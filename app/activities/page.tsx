import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Activities() {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <div className="max-w-md mx-auto px-5 py-6 pb-20">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Link href="/trip-overview" className="mr-2">
            <ArrowLeft className="h-6 w-6 text-white" />
          </Link>
          <h1 className="text-2xl font-bold">All Activities</h1>
        </div>

        {/* Activity filters */}
        <div className="flex space-x-2 mb-5 overflow-x-auto pb-2">
          <div className="bg-lime-300 text-black px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
            All Activities
          </div>
          <div className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
            Day 1 (27 Jan)
          </div>
          <div className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
            Day 2 (28 Jan)
          </div>
          <div className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
            Day 3 (29 Jan)
          </div>
        </div>

        {/* Activities list */}
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-zinc-900 rounded-xl p-4">
              <div className="flex space-x-3">
                <img 
                  src={`/a${i}.png`} 
                  alt={`Activity ${i+1}`} 
                  className="h-24 w-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-400">Day {i+1}</span>
                    <span className="text-xs bg-zinc-800 px-2 py-0.5 rounded">
                      {i % 2 === 0 ? "Morning" : "Afternoon"}
                    </span>
                  </div>
                  <h3 className="text-white font-medium mt-1">
                    {["Tokyo Sky Tree", "Senso-ji Temple Visit", "Tokyo Disneyland", "Shibuya Crossing", "Meiji Shrine"][i]}
                  </h3>
                  <div className="mt-2">
                    <p className="text-xs text-gray-400">
                      Duration: {2 + i % 3} hours
                    </p>
                    <p className="text-xs text-gray-400">
                      {i % 3 === 0 ? "Self-guided" : "Guided tour"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 