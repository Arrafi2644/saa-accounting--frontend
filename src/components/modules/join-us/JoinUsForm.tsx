/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
    Building2,
    User,
    Upload,
    FileText,
    Phone,
    Mail,
    Scale,
    Eye,
    AlertTriangle,
    Lock,
    Shield,
    CheckCircle,
    Trash2Icon,
} from "lucide-react";
import config from "@/config";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import FormSubmissionSuccess from "./FormSubmissionSuccess";

const businessFormSchema = z.object({
    businessName: z.string().min(1, "Business name is required"),
    directorsAndShareholders: z.string().min(1, "This field is required"),
    irdNumber: z.string()
        .min(8, "IRD number must be at least 8 digits")
        .max(9, "IRD number cannot be more than 9 digits"),
    fullName: z.string().min(2, "Full name is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    emailAddress: z.string().email("Invalid email address"),
    documents: z.any().optional(),
    authorityConsent: z.boolean().refine((val) => val === true, {
        message: "You must provide consent to continue",
    }),
});

type BusinessFormData = z.infer<typeof businessFormSchema>;

export default function JoinUsForm() {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false)

    const form = useForm<BusinessFormData>({
        resolver: zodResolver(businessFormSchema),
        defaultValues: {
            businessName: "",
            directorsAndShareholders: "",
            irdNumber: "",
            fullName: "",
            phoneNumber: "",
            emailAddress: "",
            authorityConsent: false,
        },
    });

    const onSubmit = async (data: BusinessFormData) => {
        const formData = new FormData();
        setIsSubmitting(true);

        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value as any);
        });

        uploadedFiles.forEach(file => {
            formData.append("files", file);
        });
        try {
            const res = await fetch(`${config.baseUrl}/join-us-form`, {
                method: "POST",
                body: formData,
            });

            const result = await res.json();
            if (result.success) {
                toast.success("Join us form submitted successfully");
                form.reset();
                setUploadedFiles([]);
                setSubmitted(true)
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to submit form");
        } finally {
            setIsSubmitting(false);
        }
    };


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setUploadedFiles((prev) => [...prev, ...filesArray]);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files) {
            const filesArray = Array.from(e.dataTransfer.files);
            setUploadedFiles((prev) => [...prev, ...filesArray]);
        }
    };

    return (
        <div className="min-h-screen bg-white p-4 md:p-8 rounded-lg border shadow-lg">
            {
                isSubmitted ? (
                    <FormSubmissionSuccess />
                ) : (
                    <div className="py-0">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                {/* Business Identity Section */}
                                <Card className="border-0 shadow-none mb-0">
                                    <CardHeader className="pb-0 px-0">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-[#EDEEF6] rounded-lg p-2">
                                                <Building2 className="h-5 w-5 text-[#4D5CAC]" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg font-bold text-[#1f2937]">
                                                    <h3> Business Identity</h3>
                                                </CardTitle>
                                                <CardDescription className="text-sm text-gray-500">
                                                    Tell us about your business
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-5 px-0">
                                        <FormField
                                            control={form.control}
                                            name="businessName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm font-medium text-[#002047]">
                                                        Name of Business <span className="text-red-500">*</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Your registered business name"
                                                            {...field}
                                                            className="border-gray-300"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="directorsAndShareholders"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm font-medium text-[#002047]">
                                                        Names of Directors and Shareholders{" "}
                                                        <span className="text-red-500">*</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="List all directors and shareholders"
                                                            {...field}
                                                            rows={4}
                                                            className="border-gray-300 resize-none"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="irdNumber"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm font-medium text-[#002047]">
                                                        IRD Number <span className="text-red-500">*</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="number"
                                                            placeholder="e.g., 123-456-789"
                                                            {...field}
                                                            className="border-gray-300 no-spinner"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                </Card>

                                {/* Contact Information Section */}
                                <Card className="border-0 shadow-none mb-0">
                                    <CardHeader className="px-0">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-[#EEFAFE] rounded-lg p-2">
                                                <User className="h-5 w-5 text-[#56CDF5]" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg font-semibold text-[#1f2937]">
                                                    <h3>Contact Information</h3>
                                                </CardTitle>
                                                <CardDescription className="text-sm text-gray-500">
                                                    How can we reach you?
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-5 px-0">
                                        <FormField
                                            control={form.control}
                                            name="fullName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm font-medium text-[#002047]">
                                                        Full Name <span className="text-red-500">*</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Enter your full name"
                                                            {...field}
                                                            className="border-gray-300"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <FormField
                                                control={form.control}
                                                name="phoneNumber"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-sm font-medium text-[#002047] flex items-center gap-2">
                                                            <Phone className="h-4 w-4  text-[#56CDF5]" />
                                                            Phone Number <span className="text-red-500">*</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="e.g., 021 123 4567"
                                                                {...field}
                                                                className="border-gray-300"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="emailAddress"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-sm font-medium text-[#002047] flex items-center gap-2">
                                                            <Mail className="h-4 w-4 text-[#56CDF5]" />
                                                            Email Address <span className="text-red-500">*</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="email"
                                                                placeholder="you@company.co.nz"
                                                                {...field}
                                                                className="border-gray-300"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Document Upload Section */}
                                <Card className="border-0 shadow-none">
                                    <CardHeader className="pb-0 px-0">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="bg-[#EDEEF6] rounded-lg p-2">
                                                <FileText className="h-5 w-5 text-[#4D5CAC]" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg font-semibold text-[#1f2937]">
                                                    <h3> Document Upload</h3>
                                                </CardTitle>
                                                <CardDescription className="text-sm text-gray-500">
                                                    Financial statements & relevant documents
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="px-0">
                                        <div
                                            onDragOver={handleDragOver}
                                            onDrop={handleDrop}
                                            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#4D5CAC] transition-colors cursor-pointer"
                                        >
                                            <div className="flex flex-col items-center">
                                                <div className="bg-[#e0f2fe] rounded-full p-4 mb-4">
                                                    <Upload className="h-8 w-8 text-[#4D5CAC]" />
                                                </div>
                                                <p className="text-sm font-medium text-[#002047] mb-1">
                                                    Drag and drop files here, or click to browse
                                                </p>
                                                <p className="text-xs text-gray-500 mb-4">
                                                    <FileText className="h-3 w-3 inline mr-1" />
                                                    All files are encrypted during transit
                                                </p>
                                                <input
                                                    type="file"
                                                    multiple
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                    id="file-upload"
                                                />
                                                <label htmlFor="file-upload">
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            document.getElementById("file-upload")?.click()
                                                        }
                                                    >
                                                        Select Files
                                                    </Button>
                                                </label>
                                            </div>
                                        </div>

                                        {uploadedFiles.length > 0 && (
                                            <div className="mt-4 space-y-2">
                                                <p className="text-sm font-medium text-[#002047]">
                                                    Uploaded Files:
                                                </p>
                                                {uploadedFiles.map((file, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-between bg-gray-50 p-2 rounded text-sm"
                                                    >
                                                        <span className="text-[#002047]">{file.name}</span>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setUploadedFiles((prev) =>
                                                                    prev.filter((_, i) => i !== index)
                                                                )
                                                            }
                                                            className="text-red-500 hover:text-red-700"
                                                        >
                                                            <Trash2Icon size={18} className="cursor-pointer" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* Authority Form Section */}
                                <Card className="border-0 shadow-sm bg-[#f8f9fc] hover:shadow-lg group transition-all duration-500">
                                    <CardHeader className="pb-0">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="bg-white rounded-lg p-2  group-hover:scale-115 transition-all duration-500">
                                                <Scale className="h-5 w-5 text-[#4D5CAC]" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-base font-semibold text-[#002047]">
                                                    <h3>Authority Form (Required)</h3>
                                                </CardTitle>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <FormField
                                            control={form.control}
                                            name="authorityConsent"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            className="cursor-pointer mt-1 rounded-full border border-[#002047] bg-white data-[state=checked]:bg-[#002047] data-[state=checked]:border-[#002047]
    "
                                                        />

                                                    </FormControl>
                                                    <div className="space-y-1 leading-none">
                                                        <FormLabel className="text-sm text-[#002047] leading-relaxed cursor-pointer">
                                                            I/We allow SAA Accounting Business Limited to
                                                            obtain information from Inland Revenue through all
                                                            channels including electronic for all tax types
                                                            (except child support). I/We accept that all work
                                                            papers prepared by SAA Accounting Services Ltd
                                                            remain the property of SAA Accounting Business Ltd.
                                                        </FormLabel>
                                                        <FormMessage />
                                                    </div>
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                </Card>

                                {/* Statement of Disclaimer of Liability */}
                                <Card className="border-0 shadow-sm bg-[#f8f9fc] hover:shadow-lg group transition-all duration-500">
                                    <CardHeader className="pb-0">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-white rounded-lg p-2  group-hover:scale-115 transition-all duration-500">
                                                <Eye className="h-5 w-5 text-[#4D5CAC]" />
                                            </div>
                                            <CardTitle className="text-base font-semibold text-[#002047]">
                                                <h3>Statement of Disclaimer of Liability</h3>
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-[#002047] leading-relaxed">
                                            A compilation does not involve verification of information. We
                                            have not performed an audit or review engagement. SAA
                                            Accounting nor its employees accept responsibility for the
                                            accuracy of material provided. Statements are prepared for the
                                            purpose of the client only.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Additional Information Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                                    {/* AML Notice */}
                                    <Card className="border shadow-sm bg-white hover:shadow-lg group transition-all duration-500">
                                        <CardContent className="pt-6">
                                            <div className="flex items-start gap-3">
                                                <div className="bg-[#EEFAFE] rounded-lg p-2.5 shrink-0  group-hover:scale-110 transition-all duration-500">
                                                    <AlertTriangle className="h-5 w-5 text-[#64D3F8]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-semibold text-[#1f2937] mb-1.5">
                                                        Anti-Money Laundering (AML) Notice
                                                    </h3>
                                                    <p className="text-xs text-[#4D5CAC] leading-relaxed">
                                                        To comply with NZ law, we may require a copy of your
                                                        Photo ID (Passport/Drivers License) to verify your
                                                        identity during onboarding.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Privacy & Data Protection */}
                                    <Card className="border shadow-sm bg-white hover:shadow-lg group transition-all duration-500" >
                                        <CardContent className="pt-6">
                                            <div className="flex items-start gap-3">
                                                <div className="bg-[#EEFAFE] rounded-lg p-2.5 shrink-0  group-hover:scale-110 transition-all duration-500">
                                                    <Lock className="h-5 w-5 text-[#64D3F8]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-semibold text-[#1f2937] mb-1.5">
                                                        Privacy & Data Protection
                                                    </h3>
                                                    <p className="text-xs text-[#4D5CAC] leading-relaxed">
                                                        Your data is encrypted using 256-bit SSL and stored in
                                                        compliance with the NZ Privacy Act 2020.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Conflict of Interest */}
                                    <Card className="border shadow-sm bg-white hover:shadow-lg group transition-all duration-500">
                                        <CardContent className="pt-6">
                                            <div className="flex items-start gap-3">
                                                <div className="bg-[#EEFAFE] rounded-lg p-2.5 shrink-0  group-hover:scale-110 transition-all duration-500">
                                                    <Shield className="h-5 w-5 text-[#64D3F8]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-semibold text-[#1f2937] mb-1.5">
                                                        Conflict of Interest Declaration
                                                    </h3>
                                                    <p className="text-xs text-[#4D5CAC] leading-relaxed">
                                                        By submitting, you confirm there are no known conflicts
                                                        of interest regarding your business and SAA Accounting.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Service Commitment */}
                                    <Card className="border shadow-sm hover:shadow-lg group bg-white transition-all duration-500">
                                        <CardContent className="pt-6">
                                            <div className="flex items-start gap-3">
                                                <div className="bg-[#EEFAFE] rounded-lg p-2.5 shrink-0 group-hover:scale-110 transition-all duration-500">
                                                    <CheckCircle className="h-5 w-5 text-[#64D3F8]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-semibold text-[#1f2937] mb-1.5">
                                                        Service Commitment
                                                    </h3>
                                                    <p className="text-xs text-[#4D5CAC] leading-relaxed">
                                                        Once submitted, a Senior Accountant will review your
                                                        file and reach out within 24 business hours.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"

                                    className="w-full bg-[#4D5CAC] hover:bg-[#4D5CAC]/93 transition-all duration-500 hover:scale-99 cursor-pointer text-white py-6 text-base font-medium rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? <Spinner /> : <Shield className="mr-2 h-5 w-5" />}
                                    {isSubmitting ? "Processing..." : "Submit Registration"}
                                </Button>

                                {/* Footer Security Info */}
                                <div className="flex items-center justify-center gap-6 text-xs text-gray-500 pb-2">
                                    <div className="flex items-center gap-1.5">
                                        <Lock className="h-3.5 w-3.5" />
                                        <span>256-bit SSL</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Shield className="h-3.5 w-3.5" />
                                        <span>NZ Privacy Act</span>
                                    </div>
                                </div>
                            </form>
                        </Form>
                    </div>
                )
            }
        </div>
    );
}