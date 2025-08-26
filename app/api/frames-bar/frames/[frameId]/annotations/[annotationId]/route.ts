







import { NextResponse } from "next/server";

// Use the same mock data as in the annotations list endpoint
// This would be a database in a real application
const annotations = [
  {
    id: "1",
    content: "This button should be more prominent",
    createdAt: "2023-06-17T14:30:00Z",
    position: { x: 120, y: 250 },
    frameId: "1",
    authorId: "user1",
    authorName: "John Doe"
  },
  {
    id: "2",
    content: "The font size needs to be larger here",
    createdAt: "2023-06-18T09:15:00Z",
    position: { x: 300, y: 150 },
    frameId: "1",
    authorId: "user2",
    authorName: "Jane Smith"
  },
  {
    id: "3",
    content: "Add more contrast to this section",
    createdAt: "2023-06-18T11:45:00Z",
    position: { x: 450, y: 320 },
    frameId: "2",
    authorId: "user1",
    authorName: "John Doe"
  },
  {
    id: "4",
    content: "This form should have validation",
    createdAt: "2023-06-19T10:20:00Z",
    position: { x: 200, y: 400 },
    frameId: "3",
    authorId: "user3",
    authorName: "Mike Johnson"
  }
];

export async function GET(
  request: Request,
  { params }: { params: { frameId: string, annotationId: string } }
) {
  // Simulate delay to mimic a real API
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const { frameId, annotationId } = params;
  const annotation = annotations.find(
    ann => ann.frameId === frameId && ann.id === annotationId
  );
  
  if (!annotation) {
    return NextResponse.json(
      { error: "Annotation not found" },
      { status: 404 }
    );
  }
  
  return NextResponse.json(annotation);
}

export async function PATCH(
  request: Request,
  { params }: { params: { frameId: string, annotationId: string } }
) {
  try {
    // Simulate delay to mimic a real API
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const { frameId, annotationId } = params;
    const annotationIndex = annotations.findIndex(
      ann => ann.frameId === frameId && ann.id === annotationId
    );
    
    if (annotationIndex === -1) {
      return NextResponse.json(
        { error: "Annotation not found" },
        { status: 404 }
      );
    }
    
    const updateData = await request.json();
    
    // Only allow updating specific fields
    const allowedFields = ['content', 'position'];
    const hasValidFields = Object.keys(updateData).some(field => allowedFields.includes(field));
    
    if (!hasValidFields) {
      return NextResponse.json(
        { error: "No valid fields to update provided" },
        { status: 400 }
      );
    }
    
    // Update only the fields that are provided in the request
    const updatedAnnotation = {
      ...annotations[annotationIndex],
      ...Object.fromEntries(
        Object.entries(updateData).filter(([key]) => allowedFields.includes(key))
      ),
      // Add updatedAt timestamp
      updatedAt: new Date().toISOString()
    };
    
    // In a real implementation, we would update in a database
    annotations[annotationIndex] = updatedAnnotation;
    
    return NextResponse.json(updatedAnnotation);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update annotation" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { frameId: string, annotationId: string } }
) {
  try {
    // Simulate delay to mimic a real API
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const { frameId, annotationId } = params;
    const annotationIndex = annotations.findIndex(
      ann => ann.frameId === frameId && ann.id === annotationId
    );
    
    if (annotationIndex === -1) {
      return NextResponse.json(
        { error: "Annotation not found" },
        { status: 404 }
      );
    }
    
    // In a real implementation, we would delete from a database
    const deletedAnnotation = annotations[annotationIndex];
    annotations.splice(annotationIndex, 1);
    
    return NextResponse.json({ 
      message: "Annotation deleted successfully",
      deletedAnnotation
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete annotation" },
      { status: 500 }
    );
  }
} 