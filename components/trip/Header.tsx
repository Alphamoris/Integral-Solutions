"use client";

import React from "react";

export function Header() {
  return (
    <div className="pt-8 pb-4">
      <h1 className="text-4xl font-bold dark:text-white text-gray-900 mb-2">Tokyo Trip</h1>
      <p className="dark:text-gray-400 text-gray-500">April 12 - April 19, 2024</p>
      <div className="flex items-center gap-2 mt-4">
        <div className="px-3 py-1 dark:bg-[#1c1a1b] bg-gray-100 rounded-full dark:text-gray-300 text-gray-600 text-sm">7 days</div>
        <div className="px-3 py-1 dark:bg-[#1c1a1b] bg-gray-100 rounded-full dark:text-gray-300 text-gray-600 text-sm">Japan</div>
      </div>
    </div>
  );
} 