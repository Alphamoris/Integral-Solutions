import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Figma Frame - Integral",
  description: "Design and prototype with Figma frames",
};

export default function OnBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      {/* Custom header for on-board route
      <header className="sticky top-0 z-40 w-full border-b dark:border-gray-800 border-gray-200 bg-white/90 dark:bg-[#0B0809]/90 backdrop-blur-sm">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold tracking-tight dark:text-white text-gray-900">
            Integral Solutions
          </h2>
          <nav className="ml-auto flex items-center gap-4">
            <a 
              href="#Trip" 
              className="text-sm font-medium dark:text-gray-300 text-gray-600 hover:dark:text-white hover:text-black transition-colors"
            >
              Frames
            </a>
            <a 
              href="#Places" 
              className="text-sm font-medium dark:text-gray-300 text-gray-600 hover:dark:text-white hover:text-black transition-colors"
            >
              Projects
            </a>
          </nav>
        </div>
      </header>
       */}
      {children}
    </div>
  );
} 