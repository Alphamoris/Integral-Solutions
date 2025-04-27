"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ActivityCard } from "./ActivityCard";
import { Button } from "@/components/ui/button";

export function ActivitiesSection() {
  const activities = [
    {
      id: 1,
      name: "Visit Tokyo Skytree",
      date: "Apr 13",
      time: "10:00 AM",
      imageUrl: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
    },
    {
      id: 2,
      name: "Senso-ji Temple Tour",
      date: "Apr 14",
      time: "9:30 AM",
      imageUrl: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d",
    },
    {
      id: 3,
      name: "Shinjuku Gyoen Park",
      date: "Apr 15",
      time: "1:00 PM",
      imageUrl: "https://images.unsplash.com/photo-1526289034009-0240ddb68ce3",
    },
    {
      id: 4,
      name: "Teamlab Borderless",
      date: "Apr 16",
      time: "4:00 PM",
      imageUrl: "https://images.unsplash.com/photo-1543363136-3fdb62e11be9",
    }
  ];

  return (
    <Card className="dark:bg-[#1c1a1b] bg-white/90 dark:border-[#2c2a2b] border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="dark:text-white text-gray-900 text-lg">Activities</CardTitle>
        <Button 
          variant="ghost"
          size="sm"
          className="dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-gray-900 dark:hover:bg-[#2c2a2b] hover:bg-gray-100"
        >
          View All
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 p-4">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            name={activity.name}
            date={activity.date}
            time={activity.time}
            imageUrl={activity.imageUrl}
          />
        ))}
      </CardContent>
    </Card>
  );
} 