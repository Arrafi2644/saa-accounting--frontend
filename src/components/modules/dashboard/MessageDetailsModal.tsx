"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Calendar, Mail, Phone, User } from "lucide-react";
import { IMessage } from "@/types";

interface MessageDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message: IMessage;
}

export default function MessageDetailsModal({
  open,
  onOpenChange,
  message,
}: MessageDetailsModalProps) {
  if (!message) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-0 overflow-hidden rounded-2xl shadow-2xl border-0 max-h-[90vh]">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>Message Details</DialogTitle>
            <DialogDescription>
              Detailed information about the submitted message.
            </DialogDescription>
          </DialogHeader>
        </VisuallyHidden>

        {/* Top Section */}
        <div className="relative flex flex-col items-center pt-4 px-6">
          <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center">
            {message.subject}
          </h2>

          <Badge
            className={`mt-2 ${
              message.isHuman
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.isHuman ? "Verified Human" : "Not Verified"}
          </Badge>

          <Separator className="my-2 w-full" />
        </div>

        {/* Scrollable Body */}
        <div className="px-6 pb-6 space-y-4 overflow-y-auto max-h-[calc(90vh-220px)]">
          {/* Sender Info */}
          <Card className="p-5 bg-gray-50/70 shadow-sm border-0 space-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <User className="h-5 w-5 text-gray-600" />
              <span className="font-semibold">Full Name:</span>
              <span>{message.fullName}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="h-5 w-5 text-gray-600" />
              <span className="font-semibold">Email:</span>
              <span>{message.email}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="h-5 w-5 text-gray-600" />
              <span className="font-semibold">Phone:</span>
              <span>{message.phone}</span>
            </div>
          </Card>

          {/* Message Content */}
          <Card className="p-5 bg-gray-50/70 shadow-sm border-0">
            <h3 className="font-semibold text-gray-700 mb-1">Message</h3>
            <p className="text-gray-600">{message.message}</p>
          </Card>

          {/* Submitted At */}
          {message.createdAt && (
            <Card className="p-4 bg-gray-50/70 border-0 shadow-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="font-medium">
                  Submitted On:{" "}
                  {new Date(message.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </Card>
          )}
        </div>

        {/* Footer */}
        <DialogFooter className="border-t bg-gray-50/80 px-6 py-2">
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
