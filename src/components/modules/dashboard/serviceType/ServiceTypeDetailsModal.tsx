"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Layers, FileText, Calendar } from "lucide-react";
import { IServiceType } from "@/types";

interface ServiceTypeDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceType?: IServiceType & {
    name?: string;
    description?: string;
    totalServices?: number;
    createdAt?: string;
  };
}

export default function ServiceTypeDetailsModal({
  open,
  onOpenChange,
  serviceType,
}: ServiceTypeDetailsModalProps) {
  if (!serviceType) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>Service Type Details</DialogTitle>
            <DialogDescription>
              Detailed information about the selected service type.
            </DialogDescription>
          </DialogHeader>
        </VisuallyHidden>

        {/* Header with icon and name */}
        <DialogHeader className="px-6 pt-6 pb-4">
          <div className="flex flex-col items-center text-center">
            <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              <Layers className="h-10 w-10 text-gray-600" />
            </div>
            <h2 className="text-xl font-semibold">{serviceType.name}</h2>
          </div>
        </DialogHeader>

        {/* Info Cards */}
        <div className="px-6 pb-6 space-y-4">
          <Card className="border-0 shadow-sm bg-gray-50/70">
            <div className="p-5 space-y-4">
              {/* Description */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <FileText className="h-5 w-5 text-pink-600" />
                  </div>
                  <span className="font-medium text-gray-600">Description</span>
                </div>
                <span className="text-right max-w-[200px] break-words font-medium text-gray-900">
                  {serviceType.description || "No description provided"}
                </span>
              </div>
              <Separator />

              {/* Total Services */}
              {serviceType.totalServices !== undefined && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Layers className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-600">Total Services</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {serviceType.totalServices}
                  </span>
                </div>
              )}
              {serviceType.totalServices !== undefined && <Separator />}

              {/* Created Date */}
              {serviceType.createdAt && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Calendar className="h-5 w-5 text-yellow-600" />
                    </div>
                    <span className="font-medium text-gray-600">Created</span>
                  </div>

                  <span className="font-medium text-gray-900">
                    {new Date(serviceType.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Footer */}
        <DialogFooter className="border-t bg-gray-50/80 px-6 py-4">
          <Button
            variant="outline"
            className="w-full sm:w-auto font-medium"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
