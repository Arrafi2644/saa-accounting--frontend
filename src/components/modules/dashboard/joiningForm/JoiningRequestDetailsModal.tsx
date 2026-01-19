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
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Calendar, Phone, Mail, User, Building2, FileText, BookUser } from "lucide-react";

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
        {/* Hidden for accessibility */}
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
            Joining Request Details
          </h2>

          <Separator className="my-2 w-full" />
        </div>

        {/* Scrollable Body */}
        <div className="px-6 pb-6 space-y-4 overflow-y-auto max-h-[calc(90vh-220px)]">
          {/* Company Info */}
          <Card className="p-5 bg-gray-50/70 shadow-sm border-0 space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <Building2 className="h-5 w-5 text-[#65758B]" />
              <span className="font-semibold">Business Name:</span>
              <span>{request.businessName}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="h-5 w-5 text-[#65758B]" />
              <span className="font-semibold">IRD Number:</span>
              <span>{request.irdNumber}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <BookUser className="h-5 w-5 text-[#65758B]" />
              <span className="font-semibold">Directors & Shareholders:</span>
              <span>{request.directorsAndShareholders}</span>
            </div>
          </Card>

          {/* Contact Info */}
          <Card className="p-5 bg-gray-50/70 shadow-sm border-0 space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <User className="h-5 w-5 text-[#65758B]" />
              <span className="font-semibold">Full Name:</span>
              <span>{request.fullName}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="h-5 w-5 text-[#65758B]" />
              <span className="font-semibold">Phone:</span>
              <span>{request.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="h-5 w-5 text-[#65758B]" />
              <span className="font-semibold">Email:</span>
              <span>{request.emailAddress}</span>
            </div>
          </Card>

          {/* Documents */}
          {request.documents.length > 0 && (
            <Card className="p-5 bg-gray-50/70 shadow-sm border-0 space-y-2">
              <div className="flex gap-2">
                <FileText className="h-5 w-5 text-[#65758B] mt-0.5" />
                <h3 className="font-semibold text-gray-700">Documents</h3>
              </div>
              <ul className="list-disc list-inside">
                {request.documents.map((docUrl, idx) => {
                  const isPdf = docUrl.toLowerCase().endsWith(".pdf");
                  return (
                    <li key={idx}>
                      <a
                        href={docUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-blue-600 hover:underline ${isPdf ? "font-medium" : ""
                          }`}
                      >
                        {isPdf ? `PDF Document ${idx + 1}` : `Image ${idx + 1}`}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Card>
          )}

          {/* Submitted At */}
          {request.createdAt && (
            <Card className="p-4 bg-gray-50/70 border-0 shadow-sm">
              <div className="flex items-center gap-2 text-[#65758B]">
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
