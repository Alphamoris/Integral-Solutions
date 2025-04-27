"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  
  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-blue-600 backdrop-blur-sm border-blue-700 shadow-lg h-12 w-12"
        onClick={toggleTheme}
        aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {currentTheme === 'dark' ? (
          <SunIcon className="h-6 w-6 text-yellow-300" />
        ) : (
          <MoonIcon className="h-6 w-6 text-indigo-200" />
        )}
      </Button>
    </div>
  );
} 