"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ActivityCardProps {
  name: string;
  date: string;
  time: string;
  imageUrl: string;
}

export function ActivityCard({
  name,
  date,
  time,
  imageUrl,
}: ActivityCardProps) {
  return (
    <Card className="dark:bg-[#141213] bg-gray-50 border-transparent overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-32 w-full">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-medium text-sm">{name}</h3>
            <div className="flex justify-between items-center mt-1">
              <div className="text-gray-300 text-xs">{date}</div>
              <div className="bg-blue-500/20 text-blue-400 text-xs px-2 py-0.5 rounded">{time}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 