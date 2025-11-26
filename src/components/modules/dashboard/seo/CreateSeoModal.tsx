/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useId, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useCreateSEOMutation } from "@/redux/features/seo/seo.api";


// ZOD VALIDATION SCHEMA
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


export default function CreateSeoModal() {
    const id = useId();
    const [open, setOpen] = useState(false);
    const [createSeo, { isLoading }] = useCreateSEOMutation();

    const form = useForm<SeoValues>({
        resolver: zodResolver(seoSchema),
        defaultValues: {
            pagePath: "",
            pageTitle: "",
            pageDescription: "",
            metaTitle: "",
            metaDescription: "",
            metaKeywords: "",
            canonicalURL: "",
            ogTitle: "",
            ogDescription: "",
            ogImage: "",
        },
    });

    const onSubmit = async (data: SeoValues) => {
        try {
            const res = await createSeo(data).unwrap();

            if (res.success) {
                toast.success("SEO data created successfully!");
                form.reset();
                setOpen(false);
            }
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to create SEO data");
            console.log(error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm">
                    <Plus className="mr-0 h-4 w-4" />
                    Add SEO Data
                </Button>
            </DialogTrigger>

            <DialogContent className="space-y-4 max-h-[90vh] overflow-y-auto min-w-[320px]">
                <DialogHeader>
                    <DialogTitle className="sm:text-center">
                        Create SEO Data
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground sm:text-center">
                        Add SEO information for a specific page.
                    </p>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                        {/* PAGE PATH */}
                        <FormField
                            control={form.control}
                            name="pagePath"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-pagePath`}>Page Path</FormLabel>
                                    <FormControl>
                                        <Input
                                            id={`${id}-pagePath`}
                                            placeholder="/about, /contact, /services"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* PAGE TITLE */}
                        <FormField
                            control={form.control}
                            name="pageTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-pageTitle`}>Page Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            id={`${id}-pageTitle`}
                                            placeholder="Page title..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* PAGE DESCRIPTION */}
                        <FormField
                            control={form.control}
                            name="pageDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-pageDescription`}>
                                        Page Description
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id={`${id}-pageDescription`}
                                            placeholder="Short description of your page..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* META TITLE */}
                        <FormField
                            control={form.control}
                            name="metaTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-metaTitle`}>Meta Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            id={`${id}-metaTitle`}
                                            placeholder="Meta title..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* META DESCRIPTION */}
                        <FormField
                            control={form.control}
                            name="metaDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-metaDescription`}>
                                        Meta Description
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id={`${id}-metaDescription`}
                                            placeholder="Meta description..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* META KEYWORDS */}
                        <FormField
                            control={form.control}
                            name="metaKeywords"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-metaKeywords`}>
                                        Meta Keywords (Comma Separated)
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id={`${id}-metaKeywords`}
                                            placeholder="keyword1, keyword2, keyword3"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* CANONICAL URL */}
                        <FormField
                            control={form.control}
                            name="canonicalURL"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-canonicalURL`}>Canonical URL</FormLabel>
                                    <FormControl>
                                        <Input
                                            id={`${id}-canonicalURL`}
                                            placeholder="https://yourdomain.com/page"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* OG TITLE */}
                        <FormField
                            control={form.control}
                            name="ogTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-ogTitle`}>OG Title (optional)</FormLabel>
                                    <FormControl>
                                        <Input
                                            id={`${id}-ogTitle`}
                                            placeholder="Open Graph title..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* OG DESCRIPTION */}
                        <FormField
                            control={form.control}
                            name="ogDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-ogDescription`}>
                                        OG Description (optional)
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id={`${id}-ogDescription`}
                                            placeholder="Open Graph description..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* OG IMAGE */}
                        <FormField
                            control={form.control}
                            name="ogImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-ogImage`}>OG Image URL (optional)</FormLabel>
                                    <FormControl>
                                        <Input
                                            id={`${id}-ogImage`}
                                            placeholder="https://example.com/image.jpg"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Creating..." : "Create SEO"}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
