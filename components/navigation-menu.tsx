"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { 
  HomeIcon, 
  PlaneLandingIcon,
  CalendarIcon,
  UserIcon,
  MapPinIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const routes = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    path: "/on-board",
    icon: MapPinIcon,
  },
  {
    name: "Trips",
    path: "/trip-overview",
    icon: PlaneLandingIcon,
  },
  {
    name: "Activities",
    path: "/activities",
    icon: CalendarIcon,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: UserIcon,
  }
];

export function FloatingNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-t border-zinc-800 dark:bg-zinc-900/90">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {routes.map((route) => (
          <Link 
            href={route.path} 
            key={route.path}
            className={cn(
              "flex flex-col items-center justify-center py-3 flex-1",
              pathname === route.path 
                ? "text-blue-500 dark:text-blue-400" 
                : "text-gray-400 hover:text-gray-300 dark:hover:text-gray-300"
            )}
          >
            <route.icon className="h-5 w-5 mb-1" />
            <span className="text-[10px] font-medium">{route.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
} 