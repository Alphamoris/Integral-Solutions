import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/trip/Header";
import { TripCard } from "@/components/trip/TripCard";
import { FlightDetails } from "@/components/trip/FlightDetails";
import { AccommodationList } from "@/components/trip/AccommodationList";
import { ActivitiesSection } from "@/components/trip/ActivitiesSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0B0809] text-white flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Integral Trip Planner
        </h1>
        <p className="text-gray-400 mb-8">
          Your personalized travel companion. Plan trips, explore destinations, and create memorable experiences.
        </p>
        
        <div className="space-y-4">
          <Link href="/on-board">
            <Button className="w-full h-14 mb-6 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 text-lg font-medium">
              Start Planning
            </Button>
          </Link>
          
          <Link href="/trip-overview">
            <Button className="w-full h-14 rounded-xl text-white bg-zinc-800 hover:bg-zinc-700 text-lg font-medium">
              View Demo Trip
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
