import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Settings, Star, CreditCard, Bell, LogOut, ChevronRight } from "lucide-react";

export default function Profile() {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <div className="max-w-md mx-auto px-5 py-6 pb-20">
        {/* Header with profile */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Profile</h1>
          </div>
          <Link href="/settings">
            <Settings className="h-6 w-6 text-white" />
          </Link>
        </div>

        {/* User info */}
        <div className="flex items-center mb-8">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-semibold mr-4">
            C
          </div>
          <div>
            <h2 className="text-xl font-bold">Chhavi Sharma</h2>
            <p className="text-gray-400">chhavi.sharma@example.com</p>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 text-sm ml-1">Gold Member</span>
            </div>
          </div>
        </div>

        {/* Menu items */}
        <div className="space-y-3">
          <div className="bg-zinc-900 rounded-xl">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center mr-3">
                  <CreditCard className="h-5 w-5 text-indigo-400" />
                </div>
                <span>Payment Methods</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </div>
            <div className="border-t border-zinc-800"></div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-lime-900/30 flex items-center justify-center mr-3">
                  <Bell className="h-5 w-5 text-lime-400" />
                </div>
                <span>Notifications</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center mr-3">
                  <LogOut className="h-5 w-5 text-red-400" />
                </div>
                <span>Log Out</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">App Version 1.0.0</p>
        </div>
      </div>
    </main>
  );
} 