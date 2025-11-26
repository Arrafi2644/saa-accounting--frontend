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

import {
  Calendar,
  Tags,
  CheckCircle,
  XCircle,
  ClipboardList,
} from "lucide-react";
import Image from "next/image";
import { IService } from "@/types";

interface ServiceDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service?: IService & {
    serviceType?: { name: string };
  };
}

export default function ServiceDetailsModal({
  open,
  onOpenChange,
  service,
}: ServiceDetailsModalProps) {
  if (!service) return null;

  const included = service.included ?? [];
  const excluded = service.excluded ?? [];
  const amenities = service.amenities ?? [];
  const subServices = service.subServices ?? [];
  const images = service.images ?? [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-0 overflow-hidden rounded-2xl shadow-2xl border-0 max-h-[90vh]">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>Service Details</DialogTitle>
            <DialogDescription>
              Detailed information about the selected service.
            </DialogDescription>
          </DialogHeader>
        </VisuallyHidden>

        {/* Top Section */}
        <div className="relative flex flex-col items-center pt-4 px-6">
          <div className="relative">
            {images[0] ? (
              <Image
                src={images[0]}
                alt={service.title ?? "Service"}
                width={40}
                height={40}
                className="rounded-xl shadow-md border border-gray-200 object-cover"
              />
            ) : (
              <div className="h-[120px] w-[120px] rounded-xl bg-gray-200 flex items-center justify-center border border-gray-200 shadow-md">
                <ClipboardList className="h-8 w-8 text-gray-400" />
              </div>
            )}
          </div>

          <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center">
            {service.title ?? "No Title"}
          </h2>

          {service.serviceType?.name && (
            <Badge className="mt-2 bg-blue-100 text-blue-700">
              {service.serviceType.name}
            </Badge>
          )}

          <Separator className="my-2 w-full" />
        </div>

        {/* Scrollable Body */}
        <div className="px-6 pb-6 space-y-4 overflow-y-auto max-h-[calc(90vh-220px)]">
          {/* Description */}
          {service.description && (
            <Card className="p-5 bg-gray-50/70 shadow-sm border-0">
              <h3 className="font-semibold text-gray-700 mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Card>
          )}

          {/* Included / Excluded */}
          {(included.length > 0 || excluded.length > 0) && (
            <Card className="p-5 bg-gray-50/70 shadow-sm border-0 space-y-4">
              {included.length > 0 && (
                <>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <h3 className="font-semibold">Included</h3>
                  </div>
                  <ul className="list-disc pl-6 text-gray-700">
                    {included.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </ul>
                  <Separator />
                </>
              )}

              {excluded.length > 0 && (
                <>
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="h-5 w-5" />
                    <h3 className="font-semibold">Excluded</h3>
                  </div>
                  <ul className="list-disc pl-6 text-gray-700">
                    {excluded.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </ul>
                </>
              )}
            </Card>
          )}

          {/* Amenities */}
          {amenities.length > 0 && (
            <Card className="p-5 bg-gray-50/70 shadow-sm border-0">
              <div className="flex items-center gap-2 text-purple-700 mb-2">
                <Tags className="h-5 w-5" />
                <h3 className="font-semibold">Amenities</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {amenities.map((a, idx) => (
                  <Badge key={idx} variant="secondary">
                    {a}
                  </Badge>
                ))}
              </div>
            </Card>
          )}

          {/* Sub Services */}
          {subServices.length > 0 && (
            <Card className="p-5 bg-gray-50/70 shadow-sm border-0">
              <h3 className="font-semibold text-gray-700 mb-3">
                Sub Services
              </h3>
              <div className="space-y-3">
                {subServices.map((sub, idx) => (
                  <div
                    key={idx}
                    className="border rounded-lg p-3 bg-white shadow-sm"
                  >
                    <p className="font-semibold">{sub.title}</p>
                    <p className="text-sm text-gray-600">{sub.description}</p>

                    <div className="flex gap-2 mt-2 flex-wrap">
                      {(sub.image ?? []).map((img, i) => (
                        <Image
                          key={i}
                          src={img}
                          width={80}
                          height={80}
                          alt="sub"
                          className="rounded-md border object-cover"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Created At */}
          {service.createdAt && (
            <Card className="p-4 bg-gray-50/70 border-0 shadow-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="font-medium">
                  Added On:{" "}
                  {new Date(service.createdAt).toLocaleDateString("en-US", {
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
