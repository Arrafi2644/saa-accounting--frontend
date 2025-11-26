/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useId, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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

import { ISEO } from "@/types";
import { useUpdateSeoMutation } from "@/redux/features/seo/seo.api";

// --------------------
// ZOD VALIDATION SCHEMA
// --------------------
const seoSchema = z.object({
  pagePath: z.string().min(1, "Page path is required"),
  pageTitle: z.string().min(2, "Page title must be at least 2 characters"),
  pageDescription: z.string().min(5, "Page description must be at least 5 characters"),

  metaTitle: z.string().min(2, "Meta title must be at least 2 characters"),
  metaDescription: z.string().min(5, "Meta description must be at least 5 characters"),
  metaKeywords: z.string().optional(),

  canonicalURL: z.string().url("Canonical URL must be a valid URL"),

  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^https?:\/\/\S+$/.test(val),
      { message: "OG Image must be a valid URL" }
    ),
});

type SeoValues = z.infer<typeof seoSchema>;

interface UpdateSeoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: ISEO;
}

export default function UpdateSeoModal({ open, onOpenChange, data }: UpdateSeoModalProps) {
  const id = useId();
  const [updateSeo, { isLoading }] = useUpdateSeoMutation();

  const form = useForm<SeoValues>({
    resolver: zodResolver(seoSchema),
    defaultValues: {
      pagePath: data?.pagePath || "",
      pageTitle: data?.pageTitle || "",
      pageDescription: data?.pageDescription || "",
      metaTitle: data?.metaTitle || "",
      metaDescription: data?.metaDescription || "",
      metaKeywords: data?.metaKeywords || "",
      canonicalURL: data?.canonicalURL || "",
      ogTitle: data?.ogTitle || "",
      ogDescription: data?.ogDescription || "",
      ogImage: data?.ogImage || "",
    },
  });

  // Pre-fill form when data changes
  useEffect(() => {
    if (data) {
      form.reset({
        pagePath: data.pagePath || "",
        pageTitle: data.pageTitle || "",
        pageDescription: data.pageDescription || "",
        metaTitle: data.metaTitle || "",
        metaDescription: data.metaDescription || "",
        metaKeywords: data.metaKeywords || "",
        canonicalURL: data.canonicalURL || "",
        ogTitle: data.ogTitle || "",
        ogDescription: data.ogDescription || "",
        ogImage: data.ogImage || "",
      });
    }
  }, [data]);

  const onSubmit = async (values: SeoValues) => {
    try {
      const res = await updateSeo({ id: data._id as string, data: values }).unwrap();
      if (res.success) {
        toast.success("SEO data updated successfully!");
        onOpenChange(false);
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update SEO data");
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="space-y-4 max-h-[90vh] overflow-y-auto min-w-[320px]">
        <DialogHeader>
          <DialogTitle className="sm:text-center">
            Update SEO Data
          </DialogTitle>
          <p className="text-sm text-muted-foreground sm:text-center">
            Update SEO information for this page.
          </p>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
            {[
              { name: "pagePath", label: "Page Path", placeholder: "/about, /contact, /services" },
              { name: "pageTitle", label: "Page Title", placeholder: "Page title..." },
              { name: "pageDescription", label: "Page Description", placeholder: "Short description of your page..." },
              { name: "metaTitle", label: "Meta Title", placeholder: "Meta title..." },
              { name: "metaDescription", label: "Meta Description", placeholder: "Meta description..." },
              { name: "metaKeywords", label: "Meta Keywords", placeholder: "keyword1, keyword2, keyword3" },
              { name: "canonicalURL", label: "Canonical URL", placeholder: "https://yourdomain.com/page" },
              { name: "ogTitle", label: "OG Title", placeholder: "Open Graph title..." },
              { name: "ogDescription", label: "OG Description", placeholder: "Open Graph description..." },
              { name: "ogImage", label: "OG Image URL", placeholder: "https://example.com/image.jpg" },
            ].map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as keyof SeoValues}
                render={({ field: f }) => (
                  <FormItem>
                    <FormLabel htmlFor={`${id}-${field.name}`}>{field.label}</FormLabel>
                    <FormControl>
                      <Input id={`${id}-${field.name}`} placeholder={field.placeholder} {...f} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update SEO"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
