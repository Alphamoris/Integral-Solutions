import { NextResponse } from "next/server";

// Mock Google OAuth response data
const mockGoogleAuthResponse = {
  access_token: "mock_access_token_google_12345",
  token_type: "Bearer",
  expires_in: 3600,
  refresh_token: "mock_refresh_token_google_67890",
  id_token: "mock_id_token_google_09876",
  user: {
    id: "google_123456789",
    email: "user@example.com",
    name: "Example User",
    picture: "https://placehold.co/100x100/png"
  }
};

export async function GET() {
  // Simulate delay to mimic a real API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real implementation, this would redirect to Google's OAuth flow
  // and then handle the callback with actual tokens
  return NextResponse.json({
    auth_url: "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email%20profile"
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
    return NextResponse.json(mockGoogleAuthResponse);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to authenticate with Google" },
      { status: 500 }
    );
  }
} 