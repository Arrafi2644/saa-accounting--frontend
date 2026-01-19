import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function UpdateServiceSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
       
        <Skeleton className="h-10 w-64 mb-8" />
    
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <Skeleton className="h-6 w-40 mb-6" />
          
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <Skeleton className="h-6 w-32 mb-6" />
          
          <div className="space-y-2 mb-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2 mb-6">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
              <div className="flex flex-col items-center justify-center space-y-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-3 w-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}