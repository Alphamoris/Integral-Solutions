"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function TripCard() {
  return (
    <div className="my-6">
      <Card className="dark:bg-[#1c1a1b] bg-white/90 dark:border-[#2c2a2b] border-gray-200 overflow-hidden">
        <CardContent className="p-0 relative">
          <div className="relative w-full h-[300px]">
            <Image
              src="/p1.png"
              alt="Tokyo skyline with Mt. Fuji"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 p-6 text-white dark:text-white text-foreground">
            <h2 className="text-2xl font-bold mb-2">Explore Tokyo</h2>
            <p className="dark:text-gray-300 text-gray-700 max-w-md">
              Experience the bustling metropolis of Tokyo, a city where tradition meets futuristic innovation.
            </p>
            <div className="flex items-center mt-4 gap-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Tokyo, Japan</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">7 days trip</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 