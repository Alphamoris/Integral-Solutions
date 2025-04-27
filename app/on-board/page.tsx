"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function OnBoard() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [travelerType, setTravelerType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination) {
      toast.error("Please enter a destination");
      return;
    }
    
    if (!duration) {
      toast.error("Please select a duration");
      return;
    }
    
    if (!travelerType) {
      toast.error("Please select who you are traveling with");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call - would save to backend in real app
    setTimeout(() => {
      toast.success("Trip created successfully!");
      router.push("/trip-overview");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen w-full bg-black text-white">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto px-6 py-12 flex flex-col h-screen">
        <div className="mt-6">
          <h1 className="text-4xl font-bold mb-1">
            Plan Your Journey, Your Way!
          </h1>
          <p className="text-gray-400 mb-10">
            Let&apos;s create your personalised travel experience
          </p>
        </div>
        
        <div className="space-y-8 flex-1">
          {/* Destination Input */}
          <div className="space-y-2">
            <h2 className="text-xl font-medium">Where would you like to go?</h2>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                placeholder="Enter Destination" 
                className="bg-zinc-900 border-none h-14 pl-12 rounded-xl text-white"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>
          </div>
          
          {/* Duration Dropdown */}
          <div className="space-y-2">
            <h2 className="text-xl font-medium">How long will you stay?</h2>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger className="bg-zinc-900 border-none h-14 rounded-xl text-white">
                <SelectValue placeholder="Select Duration" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 text-white border-zinc-800">
                <SelectItem value="3days">3 Days</SelectItem>
                <SelectItem value="5days">5 Days</SelectItem>
                <SelectItem value="1week">1 Week</SelectItem>
                <SelectItem value="2weeks">2 Weeks</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Traveler Selection */}
          <div className="space-y-3">
            <h2 className="text-xl font-medium">Who are you traveling with?</h2>
            <div className="grid grid-cols-2 gap-3">
              <button 
                type="button"
                className={`bg-zinc-900 rounded-xl p-3 flex items-center justify-center space-x-2 h-14 ${travelerType === 'solo' ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setTravelerType('solo')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C7.03228 13 3 17.0323 3 22H21C21 17.0323 16.9677 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white">Solo</span>
              </button>
              <button 
                type="button"
                className={`bg-zinc-900 rounded-xl p-3 flex items-center justify-center space-x-2 h-14 ${travelerType === 'couple' ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setTravelerType('couple')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 9C17.6569 9 19 7.65685 19 6C19 4.34315 17.6569 3 16 3C14.3431 3 13 4.34315 13 6C13 7.65685 14.3431 9 16 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 9C9.65685 9 11 7.65685 11 6C11 4.34315 9.65685 3 8 3C6.34315 3 5 4.34315 5 6C5 7.65685 6.34315 9 8 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 9C13.7909 9 12 10.7909 12 13V21H20V13C20 10.7909 18.2091 9 16 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 9C5.79086 9 4 10.7909 4 13V21H12V13C12 10.7909 10.2091 9 8 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white">Couple</span>
              </button>
              <button 
                type="button"
                className={`bg-zinc-900 rounded-xl p-3 flex items-center justify-center space-x-2 h-14 ${travelerType === 'family' ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setTravelerType('family')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white">Family</span>
              </button>
              <button 
                type="button"
                className={`bg-zinc-900 rounded-xl p-3 flex items-center justify-center space-x-2 h-14 ${travelerType === 'friends' ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setTravelerType('friends')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white">Friends</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-auto mb-8">
          <Button 
            type="submit" 
            className="w-full h-14 mt-6 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 text-lg font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Trip..." : "Continue"}
          </Button>
        </div>
      </form>
    </main>
  );
} 