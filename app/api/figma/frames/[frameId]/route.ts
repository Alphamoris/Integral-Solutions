import { NextResponse } from "next/server";

// Mock data
const frames = [
  {
    id: "1",
    name: "Home Page",
    createdAt: "2023-06-16T11:30:00Z",
    image: "https://placehold.co/600x400/png",
    projectId: "1"
  },
  {
    id: "2",
    name: "Login Screen",
    createdAt: "2023-05-21T10:15:00Z",
    image: "https://placehold.co/600x400/png",
    projectId: "2"
  },
  {
    id: "3",
    name: "About Page",
    createdAt: "2023-06-17T12:45:00Z",
    image: "https://placehold.co/600x400/png",
    projectId: "1"
  },
  {
    id: "4",
    name: "Analytics Dashboard",
    createdAt: "2023-04-26T14:20:00Z",
    image: "https://placehold.co/600x400/png",
    projectId: "4"
  }
];

export async function GET(
  request: Request,
  { params }: { params: { frameId: string } }
) {
  // Simulate delay to mimic a real API
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const frameId = params.frameId;
  const frame = frames.find(frame => frame.id === frameId);
  
  if (!frame) {
    return NextResponse.json({ error: "Frame not found" }, { status: 404 });
  }
  
  return NextResponse.json(frame);
} 