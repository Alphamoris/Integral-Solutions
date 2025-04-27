import { NextResponse } from "next/server";

// Mock data
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
  { params }: { params: { frameId: string } }
) {
  // Simulate delay to mimic a real API
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const frameId = params.frameId;
  const frameAnnotations = annotations.filter(annotation => annotation.frameId === frameId);
  
  return NextResponse.json(frameAnnotations);
}

export async function POST(
  request: Request,
  { params }: { params: { frameId: string } }
) {
  try {
    // Simulate delay to mimic a real API
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const frameId = params.frameId;
    const body = await request.json();
    
    // Validate required fields
    if (!body.content || !body.position || !body.authorId || !body.authorName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Create a new annotation
    const newAnnotation = {
      id: (annotations.length + 1).toString(),
      content: body.content,
      createdAt: new Date().toISOString(),
      position: body.position,
      frameId,
      authorId: body.authorId,
      authorName: body.authorName
    };
    
    // In a real implementation, we would save this to a database
    annotations.push(newAnnotation);
    
    return NextResponse.json(newAnnotation, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create annotation" },
      { status: 500 }
    );
  }
} 