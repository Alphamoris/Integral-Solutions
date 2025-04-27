import React from "react";
import { SignIn } from "@/components/auth/sign-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Integral",
  description: "Login to Integral to access your account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-[#0B0809] transition-colors duration-300 p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold dark:text-white text-gray-900 mb-2">
          Integral
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Sign in to access your account
        </p>
      </div>
      
      <SignIn />
      
      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        By signing in, you agree to our{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </a>
      </p>
    </div>
  );
} 