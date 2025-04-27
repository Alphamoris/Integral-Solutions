"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnnotationPane } from "./annotation-pane";
import { MessageSquare } from "lucide-react";

interface FrameCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
  onClick?: () => void;
  id: string;
}

export function FrameCard({
  title,
  description,
  imageUrl,
  className,
  onClick,
  id,
}: FrameCardProps) {
  const [showAnnotations, setShowAnnotations] = useState(false);

  const handleCardClick = () => {
    if (onClick) onClick();
  };

  const toggleAnnotations = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAnnotations(!showAnnotations);
  };

  return (
    <div className={cn("flex h-full", showAnnotations ? "flex-row" : "")}>
      <Card 
        className={cn(
          "overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-md transition-all cursor-pointer flex-1",
          className
        )}
        onClick={handleCardClick}
      >
        <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
              Frame Preview
            </div>
          )}
          <Button 
            variant="secondary"
            size="sm"
            className="absolute bottom-2 right-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm"
            onClick={toggleAnnotations}
          >
            <MessageSquare className="h-4 w-4" />
            {showAnnotations ? "Close" : "Annotations"}
          </Button>
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium dark:text-white text-gray-900">{title}</h3>
          <p className="text-sm dark:text-gray-400 text-gray-500 mt-1">{description}</p>
        </CardContent>
      </Card>
      
      {showAnnotations && (
        <div className="w-96">
          <AnnotationPane 
            frameId={id} 
            onClose={() => setShowAnnotations(false)}
          />
        </div>
      )}
    </div>
  );
} 