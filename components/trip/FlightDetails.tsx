"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FlightDetails() {
  return (
    <Card className="dark:bg-[#1c1a1b] bg-white/90 dark:border-[#2c2a2b] border-gray-200 my-6">
      <CardHeader>
        <CardTitle className="dark:text-white text-gray-900 text-lg">Flight Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="dark:text-white text-gray-900 font-bold">12 Apr</span>
              <span className="dark:text-gray-400 text-gray-500 text-sm">08:45 AM</span>
            </div>
            
            <div className="flex-1 mx-4">
              <div className="relative flex items-center">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <div className="flex-1 h-0.5 dark:bg-gray-600 bg-gray-300 mx-2"></div>
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              </div>
              <div className="flex justify-between text-xs dark:text-gray-400 text-gray-500 mt-1">
                <span>JFK</span>
                <span>NRT</span>
              </div>
            </div>
            
            <div className="text-right">
              <span className="dark:text-white text-gray-900">Japan Airlines</span>
              <div className="dark:text-gray-400 text-gray-500 text-sm">14h 30m</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="dark:text-white text-gray-900 font-bold">19 Apr</span>
              <span className="dark:text-gray-400 text-gray-500 text-sm">10:15 PM</span>
            </div>
            
            <div className="flex-1 mx-4">
              <div className="relative flex items-center">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <div className="flex-1 h-0.5 dark:bg-gray-600 bg-gray-300 mx-2"></div>
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              </div>
              <div className="flex justify-between text-xs dark:text-gray-400 text-gray-500 mt-1">
                <span>NRT</span>
                <span>JFK</span>
              </div>
            </div>
            
            <div className="text-right">
              <span className="dark:text-white text-gray-900">ANA</span>
              <div className="dark:text-gray-400 text-gray-500 text-sm">13h 45m</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 