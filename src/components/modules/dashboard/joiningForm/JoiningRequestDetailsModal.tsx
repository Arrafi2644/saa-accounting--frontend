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

import { Calendar, Phone, Mail, User, CheckCircle, XCircle } from "lucide-react";

import { IJoiningRequest } from "@/types";

interface JoiningRequestDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  request?: IJoiningRequest;
}

export default function JoiningRequestDetailsModal({
  open,
  onOpenChange,
  request,
}: JoiningRequestDetailsModalProps) {
  if (!request) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-0 overflow-hidden rounded-2xl shadow-2xl border-0 max-h-[90vh]">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>Joining Request Details</DialogTitle>
            <DialogDescription>
              Detailed information about the joining request.
            </DialogDescription>
          </DialogHeader>
        </VisuallyHidden>

        {/* Top Section */}
        <div className="relative flex flex-col items-center pt-4 px-6">
          <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center">
            {request.companyName}
          </h2>

          <Badge
            className={`mt-2 ${
              request.isHuman ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {request.isHuman ? "Verified Human" : "Not Verified"}
          </Badge>

          <Separator className="my-2 w-full" />
        </div>

        {/* Scrollable Body */}
        <div className="px-6 pb-6 space-y-4 overflow-y-auto max-h-[calc(90vh-220px)]">
          {/* Company Info */}
          <Card className="p-5 bg-gray-50/70 shadow-sm border-0 space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="h-5 w-5 text-gray-600" />
              <span className="font-semibold">Date:</span>
              <span>{request.companyDate}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">IRD:</span>
              <span>{request.companyIRD}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">Address:</span>
              <span>{request.address}</span>
            </div>
          </Card>

          {/* Directors */}
          {[request.director1, request.director2].map((director, idx) => (
            <Card key={idx} className="p-5 bg-gray-50/70 shadow-sm border-0 space-y-2">
              <h3 className="font-semibold text-gray-700">
                Director {idx + 1}
              </h3>
              <div className="flex gap-2">
                <span className="font-medium">Name:</span> {director.name}
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Position:</span> {director.position}
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Date:</span> {director.date}
              </div>
              <div className="flex gap-2">
                <span className="font-medium">IRD:</span> {director.ird}
              </div>
            </Card>
          ))}

          {/* Contact Info */}
          <Card className="p-5 bg-gray-50/70 shadow-sm border-0 space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="h-5 w-5 text-gray-600" />
              <span className="font-semibold">Business Phone:</span>
              <span>{request.phoneBusiness}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="h-5 w-5 text-gray-600" />
              <span className="font-semibold">Home Phone:</span>
              <span>{request.phoneHome}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="h-5 w-5 text-gray-600" />
              <span className="font-semibold">Mobile:</span>
              <span>{request.phoneMobile}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="h-5 w-5 text-gray-600" />
              <span className="font-semibold">Email:</span>
              <span>{request.email}</span>
            </div>
          </Card>

          {/* Submitted At */}
          {request.createdAt && (
            <Card className="p-4 bg-gray-50/70 border-0 shadow-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="font-medium">
                  Submitted On:{" "}
                  {new Date(request.createdAt).toLocaleDateString("en-US", {
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
