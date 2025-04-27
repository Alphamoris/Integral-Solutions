import { NextResponse } from "next/server";

// Mock data
const projects = [
  {
    id: "1",
    name: "Website Redesign",
    createdAt: "2023-06-15T10:30:00Z",
    status: "in-progress",
    frames: ["1", "3"]
  },
  {
    id: "2",
    name: "Mobile App UI",
    createdAt: "2023-05-20T09:15:00Z",
    status: "completed",
    frames: ["2"]
  },
  {
    id: "3",
    name: "Brand Identity",
    createdAt: "2023-07-12T16:45:00Z",
    status: "planning",
    frames: []
  },
  {
    id: "4",
    name: "Dashboard Refresh",
    createdAt: "2023-04-25T13:10:00Z",
    status: "completed",
    frames: ["1", "4"]
  }
];

export async function GET() {
  // Simulate delay to mimic a real API
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return NextResponse.json({ projects });
} 