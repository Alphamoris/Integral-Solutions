"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, Trash2, Edit, Save, X } from "lucide-react";

interface Annotation {
  id: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  position: { x: number; y: number };
  frameId: string;
  authorId: string;
  authorName: string;
}

interface AnnotationPaneProps {
  frameId: string;
  onClose: () => void;
}

export function AnnotationPane({ frameId, onClose }: AnnotationPaneProps) {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newAnnotation, setNewAnnotation] = useState("");
  const [editingAnnotation, setEditingAnnotation] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  
  // Mock user data (in a real app, this would come from authentication)
  const currentUser = {
    id: "user1",
    name: "John Doe"
  };

  useEffect(() => {
    const fetchAnnotations = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/figma/frames/${frameId}/annotations`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch annotations");
        }
        
        const data = await response.json();
        setAnnotations(data);
      } catch (err) {
        setError("Error loading annotations");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAnnotations();
  }, [frameId]);
  
  const handleAddAnnotation = async () => {
    if (!newAnnotation.trim()) return;
    
    try {
      const response = await fetch(`/api/figma/frames/${frameId}/annotations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: newAnnotation,
          position: { x: 100, y: 100 }, // Default position
          authorId: currentUser.id,
          authorName: currentUser.name,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to add annotation");
      }
      
      const newAnnotationData = await response.json();
      setAnnotations([...annotations, newAnnotationData]);
      setNewAnnotation("");
    } catch (err) {
      setError("Error adding annotation");
      console.error(err);
    }
  };
  
  const handleDeleteAnnotation = async (annotationId: string) => {
    try {
      const response = await fetch(`/api/figma/frames/${frameId}/annotations/${annotationId}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error("Failed to delete annotation");
      }
      
      setAnnotations(annotations.filter(annotation => annotation.id !== annotationId));
    } catch (err) {
      setError("Error deleting annotation");
      console.error(err);
    }
  };
  
  const startEditing = (annotation: Annotation) => {
    setEditingAnnotation(annotation.id);
    setEditContent(annotation.content);
  };
  
  const cancelEditing = () => {
    setEditingAnnotation(null);
    setEditContent("");
  };
  
  const handleUpdateAnnotation = async (annotationId: string) => {
    if (!editContent.trim()) return;
    
    try {
      const response = await fetch(`/api/figma/frames/${frameId}/annotations/${annotationId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: editContent,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to update annotation");
      }
      
      const updatedAnnotation = await response.json();
      setAnnotations(annotations.map(annotation => 
        annotation.id === annotationId ? updatedAnnotation : annotation
      ));
      setEditingAnnotation(null);
    } catch (err) {
      setError("Error updating annotation");
      console.error(err);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <Card className="w-full h-full flex flex-col border-l border-gray-200 dark:border-gray-800">
      <CardHeader className="px-4 py-3 flex flex-row items-center justify-between space-y-0 border-b">
        <CardTitle className="text-xl font-semibold">Annotations</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="flex-grow p-0 overflow-hidden">
        <ScrollArea className="w-full h-full max-h-[calc(100vh-210px)] px-4 py-3">
          {loading ? (
            <p className="text-center py-4 text-gray-500">Loading annotations...</p>
          ) : error ? (
            <p className="text-center py-4 text-red-500">{error}</p>
          ) : annotations.length === 0 ? (
            <p className="text-center py-4 text-gray-500">No annotations yet</p>
          ) : (
            <div className="space-y-4">
              {annotations.map((annotation) => (
                <div key={annotation.id} className="border border-gray-200 dark:border-gray-800 rounded-md p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">{annotation.authorName}</p>
                      <p className="text-xs text-gray-500">{formatDate(annotation.createdAt)}</p>
                      {annotation.updatedAt && (
                        <p className="text-xs text-gray-500 italic">Updated: {formatDate(annotation.updatedAt)}</p>
                      )}
                    </div>
                    
                    {annotation.authorId === currentUser.id && (
                      <div className="flex space-x-1">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => startEditing(annotation)}
                          disabled={editingAnnotation === annotation.id}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleDeleteAnnotation(annotation.id)}
                          disabled={editingAnnotation === annotation.id}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  {editingAnnotation === annotation.id ? (
                    <div className="space-y-2">
                      <Textarea 
                        value={editContent}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEditContent(e.target.value)}
                        className="w-full"
                      />
                      <div className="flex justify-end space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={cancelEditing}
                        >
                          Cancel
                        </Button>
                        <Button 
                          variant="default" 
                          size="sm" 
                          onClick={() => handleUpdateAnnotation(annotation.id)}
                        >
                          <Save className="h-4 w-4 mr-1" />
                          Save
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm whitespace-pre-wrap mt-2">{annotation.content}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex flex-col px-4 py-3 space-y-2 border-t">
        <Textarea 
          placeholder="Add an annotation..."
          value={newAnnotation}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewAnnotation(e.target.value)}
          className="w-full"
        />
        <div className="flex justify-end w-full">
          <Button onClick={handleAddAnnotation} disabled={!newAnnotation.trim()}>
            <PlusCircle className="h-4 w-4 mr-1" />
            Add Annotation
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
} 