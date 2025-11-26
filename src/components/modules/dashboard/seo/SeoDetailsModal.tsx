"use client";

import React from "react";
import { ISEO } from "@/types";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SeoDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  seo: ISEO;
}

export default function SeoDetailsModal({ open, onOpenChange, seo }: SeoDetailsModalProps) {
  const renderField = (label: string, value?: string) => {
    if (!value) return null;
    return (
      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}:</span>
        <span className="text-gray-900 dark:text-gray-100 break-words">{value}</span>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="space-y-6 max-h-[90vh] overflow-y-auto min-w-[360px] sm:min-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center text-lg sm:text-xl font-semibold">
            SEO Details
          </DialogTitle>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            View all SEO information for this page
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {renderField("Page Path", seo.pagePath)}
          {renderField("Page Title", seo.pageTitle)}
          {renderField("Page Description", seo.pageDescription)}
          {renderField("Meta Title", seo.metaTitle)}
          {renderField("Meta Description", seo.metaDescription)}
          {renderField("Meta Keywords", seo.metaKeywords)}
          {renderField("Canonical URL", seo.canonicalURL)}
          {renderField("OG Title", seo.ogTitle)}
          {renderField("OG Description", seo.ogDescription)}

          {seo.ogImage && (
            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-md shadow-sm gap-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">OG Image:</span>
              <div className="relative w-full max-w-md h-64 rounded-md overflow-hidden">
                <Image
                  src={seo.ogImage}
                  alt="OG Image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 320px"
                />
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

