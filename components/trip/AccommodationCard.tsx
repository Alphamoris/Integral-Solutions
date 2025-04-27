"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AccommodationCardProps {
  name: string;
  location: string;
  dates: string;
  imageUrl: string;
  rating: number;
  price: string;
  isActive?: boolean;
}

export function AccommodationCard({
  name,
  location,
  dates,
  imageUrl,
  rating,
  price,
  isActive = false,
}: AccommodationCardProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden border-transparent cursor-pointer transition-all duration-200 hover:border-blue-500",
        isActive ? 
          "border-blue-500 dark:bg-[#1c1a1b] bg-white" : 
          "dark:bg-[#141213] bg-gray-50"
      )}
    >
      <CardContent className="p-3 space-y-3">
        <div className="flex gap-3">
          <div className="relative h-20 w-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="dark:text-white text-gray-900 font-medium">{name}</h3>
            <p className="dark:text-gray-400 text-gray-500 text-sm">{location}</p>
            <div className="flex items-center gap-1 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-yellow-400 text-sm">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        
        <div className="pt-2 dark:border-gray-800 border-gray-200 border-t flex justify-between items-center">
          <div className="dark:text-gray-400 text-gray-500 text-xs">{dates}</div>
          <div className="dark:text-white text-gray-900 font-medium">{price}</div>
        </div>
      </CardContent>
    </Card>
  );
} 