"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { FcGoogle } from "react-icons/fc";

export function SignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      
      const result = await signIn("google", {
        callbackUrl: "/on-board",
        redirect: false,
      });
      
      if (result?.error) {
        toast({
          title: "Authentication failed",
          description: "Could not sign in with Google. Please try again.",
          variant: "destructive",
        });
        console.error("Google auth error:", result.error);
      } else if (result?.url) {
        toast({
          title: "Success!",
          description: "Signed in successfully. Redirecting...",
        });
        router.push(result.url);
      }
    } catch (error) {
      console.error("Sign in error:", error);
      toast({
        title: "Something went wrong",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full max-w-sm">
      <div className="flex flex-col space-y-2 text-center mb-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome back
        </h1>
        <p className="text-sm text-muted-foreground">
          Sign in to your account
        </p>
      </div>

      <Button
        variant="outline"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className="w-full font-medium shadow-sm border-border"
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <FcGoogle className="mr-2 h-5 w-5" />
        )}
        {isLoading ? "Signing in..." : "Continue with Google"}
      </Button>
    </div>
  );
} 