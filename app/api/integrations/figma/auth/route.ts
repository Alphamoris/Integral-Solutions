import { NextResponse } from "next/server";

// Mock Figma OAuth response data
const mockFigmaAuthResponse = {
  access_token: "mock_access_token_figma_12345",
  token_type: "Bearer",
  expires_in: 3600,
  refresh_token: "mock_refresh_token_figma_67890",
  user: {
    id: "figma_123456789",
    email: "designer@example.com",
    handle: "designer",
    name: "Design User",
    avatar_url: "https://placehold.co/100x100/png"
  }
};

export async function GET() {
  // Simulate delay to mimic a real API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real implementation, this would redirect to Figma's OAuth flow
  // and then handle the callback with actual tokens
  return NextResponse.json({
    auth_url: "https://www.figma.com/oauth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=file_read&state=random_state&response_type=code"
  });
}

export async function POST(request: Request) {
  try {
    // Simulate delay to mimic a real API
    await new Promise(resolve => setTimeout(resolve, 700));
    
    const body = await request.json();
    
    // In a real implementation, this would exchange the authorization code for tokens
    // For mock purposes, we check if a code was provided in the request body
    if (!body.code) {
      return NextResponse.json(
        { error: "Authorization code is required" },
        { status: 400 }
      );
    }
    
    // Return a mock successful response
    return NextResponse.json(mockFigmaAuthResponse);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to authenticate with Figma" },
      { status: 500 }
    );
  }
} 