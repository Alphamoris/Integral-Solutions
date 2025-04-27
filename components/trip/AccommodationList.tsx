"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AccommodationCard } from "./AccommodationCard";

export function AccommodationList() {
  const accommodations = [
    {
      id: 1,
      name: "Park Hyatt Tokyo",
      location: "Shinjuku, Tokyo",
      dates: "Apr 12 - Apr 15",
      imageUrl: "/a1.png",
      rating: 4.8,
      price: "$380/night",
      isActive: true
    },
    {
      id: 2,
      name: "Hoshinoya Tokyo",
      location: "Chiyoda, Tokyo",
      dates: "Apr 15 - Apr 17",
      imageUrl: "/a2.png",
      rating: 4.9,
      price: "$420/night",
      isActive: false
    },
    {
      id: 3,
      name: "Cerulean Tower",
      location: "Shibuya, Tokyo",
      dates: "Apr 17 - Apr 19",
      imageUrl: "/a3.png",
      rating: 4.7,
      price: "$350/night",
      isActive: false
    }
  ];

  return (
    <Card className="dark:bg-[#1c1a1b] bg-white/90 dark:border-[#2c2a2b] border-gray-200 mb-6">
      <CardHeader>
        <CardTitle className="dark:text-white text-gray-900 text-lg">Accommodations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 p-4">
        {accommodations.map((accommodation) => (
          <AccommodationCard 
            key={accommodation.id}
            name={accommodation.name}
            location={accommodation.location}
            dates={accommodation.dates}
            imageUrl={accommodation.imageUrl}
            rating={accommodation.rating}
            price={accommodation.price}
            isActive={accommodation.isActive}
          />
        ))}
      </CardContent>
    </Card>
  );
} 