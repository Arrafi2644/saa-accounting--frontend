/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ISiteInfo } from "@/types";
import { useUpdateSiteInfoMutation } from "@/redux/features/siteInfo/siteInfo.api";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

// ZOD Schema
const siteInfoSchema = z.object({
  siteTitle: z.string().min(1, "Site title is required"),
  siteTagline: z.string().optional(),
  logoUrl: z.string().url("Must be a valid URL").optional(),
  faviconUrl: z.string().url("Must be a valid URL").optional(),
  adminEmail: z.string().email("Must be a valid email").optional(),
  supportEmail: z.string().email("Must be a valid email").optional(),
  phone: z.string().optional(),
  supportPhone: z.string().optional(),
  address: z.string().optional(),
  mapEmbedUrl: z.string().url("Must be a valid URL").optional(),
  businessHours: z
    .object({
      days: z.array(z.string()).optional(),
      start: z.string().optional(),
      end: z.string().optional(),
    })
    .optional(),
  social: z
    .object({
      facebook: z.string().url().optional(),
      instagram: z.string().url().optional(),
      youtube: z.string().url().optional(),
      twitter: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      whatsapp: z.string().url().optional(),
    })
    .optional(),
});

type SiteInfoValues = z.infer<typeof siteInfoSchema>;

interface UpdateSiteInfoModalProps {
  defaultValues: ISiteInfo;
}

export default function UpdateSiteInfoModal({ defaultValues }: UpdateSiteInfoModalProps) {
  const [open, setOpen] = useState(false);
  const [updateSiteInfo, { isLoading }] = useUpdateSiteInfoMutation();

  const form = useForm<SiteInfoValues>({
    resolver: zodResolver(siteInfoSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: SiteInfoValues) => {
    try {
      const res = await updateSiteInfo(data).unwrap();
      if (res.success) {
        toast.success("Site info updated successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update site info");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Edit Info</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto min-w-[350px] space-y-4">
        <DialogHeader>
          <DialogTitle>Update Site Info</DialogTitle>
          <p className="text-sm text-muted-foreground">Edit global website settings</p>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <FormField
              control={form.control}
              name="siteTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Site title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="siteTagline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site Tagline</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Site tagline" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="logoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo URL</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="https://example.com/logo.png" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="faviconUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Favicon URL</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="https://example.com/favicon.png" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="adminEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Admin Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="admin@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="supportEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Support Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="support@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="+880123456789" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="supportPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Support Phone</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="+880987654321" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Office address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mapEmbedUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Google Map Embed URL</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="https://www.google.com/maps/embed?..." />
                  </FormControl>
                  <FormMessage />
                  {field.value && (
                    <div className="mt-2 border rounded h-64 overflow-hidden">
                      <iframe
                        src={field.value}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  )}
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Site Info"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
