/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import Image from "next/image";
import {
  useGetSiteInfoQuery,
  useUpdateSiteInfoMutation,
} from "@/redux/features/siteInfo/siteInfo.api";
import { Spinner } from "@/components/ui/spinner";

// Zod Schema
const siteInfoSchema = z.object({
  siteTitle: z.string().min(1, "Site title is required").optional(),
  siteTagline: z.string().optional(),
  mainLogo: z.instanceof(File).optional(),
  footerLogo: z.instanceof(File).optional(),
  faviconLogo: z.instanceof(File).optional(),
  mainEmail: z.string().email().optional().or(z.literal("")),
  supportEmail: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional(),
  supportPhone: z.string().optional(),
  address: z.string().optional(),
  mapEmbedUrl: z.string().url().optional().or(z.literal("")),
  facebook: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().url().optional().or(z.literal("")),
  youtube: z.string().url().optional().or(z.literal("")),
  twitter: z.string().url().optional().or(z.literal("")),
  instagram: z.string().url().optional().or(z.literal("")),
  tiktok: z.string().url().optional().or(z.literal("")),
  pinterest: z.string().url().optional().or(z.literal("")),
  whatsapp: z.string().optional(),
});

type SiteInfoFormValues = z.infer<typeof siteInfoSchema>;

// File Upload Component
interface FileUploadProps {
  value?: File;
  onChange: (file: File | undefined) => void;
  currentUrl?: string;
  label: string;
  accept?: string;
}

function FileUpload({
  value,
  onChange,
  currentUrl,
  label,
  accept = "image/*",
}: FileUploadProps) {
  const preview = value
    ? URL.createObjectURL(value)
    : currentUrl || "";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onChange(file);
  };

  const handleRemove = () => {
    onChange(undefined);
  };

  return (
    <div className="space-y-3">
      {preview ? (
        <div className="relative w-full h-48 border-2 border-dashed rounded-lg overflow-hidden group bg-gray-50">
          <Image src={preview} alt="Preview" fill className="object-contain" />
          {value && (
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
              onClick={handleRemove}
            >
              ✕
            </Button>
          )}
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer">
          <input
            type="file"
            hidden
            accept={accept}
            onChange={handleFileChange}
          />
          Upload {label}
        </label>
      )}
    </div>
  );
}

export default function UpdateSiteInfoForm() {
  const { data: siteInfoResponse, isLoading } = useGetSiteInfoQuery(undefined);
  const siteInfo = siteInfoResponse?.data;

  const [updateSiteInfo, { isLoading: isUpdating }] = useUpdateSiteInfoMutation();

  const form = useForm<SiteInfoFormValues>({
    resolver: zodResolver(siteInfoSchema),
    defaultValues: {
      siteTitle: "",
      siteTagline: "",
      mainEmail: "",
      supportEmail: "",
      phone: "",
      supportPhone: "",
      address: "",
      mapEmbedUrl: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      twitter: "",
      instagram: "",
      tiktok: "",
      pinterest: "",
      whatsapp: "",
      mainLogo: undefined,
      footerLogo: undefined,
      faviconLogo: undefined,
    },
  });

  // Load existing data
  useEffect(() => {
    if (siteInfo) {
      form.reset({
        siteTitle: siteInfo.siteTitle || "",
        siteTagline: siteInfo.siteTagline || "",
        mainEmail: siteInfo.mainEmail || "",
        supportEmail: siteInfo.supportEmail || "",
        phone: siteInfo.phone || "",
        supportPhone: siteInfo.supportPhone || "",
        address: siteInfo.address || "",
        mapEmbedUrl: siteInfo.mapEmbedUrl || "",
        facebook: siteInfo.facebook || "",
        linkedin: siteInfo.linkedin || "",
        youtube: siteInfo.youtube || "",
        twitter: siteInfo.twitter || "",
        instagram: siteInfo.instagram || "",
        tiktok: siteInfo.tiktok || "",
        pinterest: siteInfo.pinterest || "",
        whatsapp: siteInfo.whatsapp || "",
      });
    }
  }, [siteInfo, form]);

  const onSubmit = async (data: SiteInfoFormValues) => {
    try {
      const formData = new FormData();

      // Text fields - only add if value exists
      const textFields: (keyof SiteInfoFormValues)[] = [
        "siteTitle",
        "siteTagline",
        "mainEmail",
        "supportEmail",
        "phone",
        "supportPhone",
        "address",
        "mapEmbedUrl",
        "facebook",
        "linkedin",
        "youtube",
        "twitter",
        "instagram",
        "tiktok",
        "pinterest",
        "whatsapp",
      ];

      textFields.forEach((field) => {
        const value = data[field] as string;
        if (value && value.trim() !== "") {
          formData.append(field, value.trim());
        }
      });

      // Files - only append if new file selected
      if (data.mainLogo) formData.append("mainLogo", data.mainLogo);
      if (data.footerLogo) formData.append("footerLogo", data.footerLogo);
      if (data.faviconLogo) formData.append("faviconLogo", data.faviconLogo);

      const res = await updateSiteInfo(formData).unwrap();
        if(res.success){
           await fetch("/api/revalidate/siteinfos", { method: "POST" });
          toast.success("Site information updated successfully!");
        }
    } catch (error: any) {
      console.error("Update error:", error);
      toast.error(error?.data?.message || "Failed to update site info");
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-10 text-center">
        <Spinner className="mx-auto" />
        <p className="mt-4">Loading site information...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8 text-[#002047]">
        Update Site Information
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          {/* Logos */}
          <Card>
            <CardHeader>
              <CardTitle>Logos</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="mainLogo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Main Logo</FormLabel>
                    <FormControl>
                      <FileUpload
                        value={field.value}
                        onChange={field.onChange}
                        // currentUrl={siteInfo?.mainLogo}
                        label=" Main Logo"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="footerLogo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Footer Logo</FormLabel>
                    <FormControl>
                      <FileUpload
                        value={field.value}
                        onChange={field.onChange}
                        // currentUrl={siteInfo?.footerLogo}
                        label="Footer Logo"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="faviconLogo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Favicon (32x32 or 64x64 recommended)</FormLabel>
                    <FormControl>
                      <FileUpload
                        value={field.value}
                        onChange={field.onChange}
                        // currentUrl={siteInfo?.faviconLogo}
                        
                        label="Favicon"
                        accept="image/x-icon,image/png,image/jpeg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* General Information */}
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="siteTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Site Title</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value ?? ""} />
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
                      <Input {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mainEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Main Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} value={field.value ?? ""} />
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
                      <Input type="email" {...field} value={field.value ?? ""} />
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
                      <Input {...field} value={field.value ?? ""} />
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
                      <Input {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Address & Map */}
          <Card>
            <CardHeader>
              <CardTitle>Address & Map</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea rows={3} {...field} value={field.value ?? ""} />
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
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        placeholder="https://www.google.com/maps/embed?pb=..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "facebook",
                "linkedin",
                "youtube",
                "twitter",
                "instagram",
                "tiktok",
                "pinterest",
                "whatsapp",
              ].map((platform) => (
                <FormField
                  key={platform}
                  control={form.control}
                  name={platform as keyof SiteInfoFormValues}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">
                        {platform === "twitter" ? "X (Twitter)" : platform}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          // value={field.value ?? ""}
                          value={typeof field.value === "string" ? field.value : ""}

                          placeholder={`https://${platform}.com/your-profile`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-4 pt-8">
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
            <Button type="submit" disabled={isUpdating} className="px-10">
              {isUpdating ? (
                <span className="flex items-center gap-2">
                  <Spinner />
                  Updating...
                </span>
              ) : (
                "Update Site Info"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}