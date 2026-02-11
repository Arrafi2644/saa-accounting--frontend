"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ITestimonial } from "@/types";
import { useCreateTestimonialMutation } from "@/redux/features/testimonial/testimonial.api";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

type FormData = Omit<ITestimonial, '_id' | 'isApproved' | 'isFeatured' | 'createdAt'>;

export const ReviewForm = () => {
    const [hoveredStar, setHoveredStar] = useState(0);
    const [createTestimonial, { isLoading }] = useCreateTestimonialMutation()
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [formData, setFormData] = useState<FormData>({
        partnershipLabel: "",
        rating: 0,
        content: "",
        clientName: "",
        designation: "",
        companyName: "",
        location: "",
        industry: "",
    });

    const handleInputChange = (field: keyof FormData, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};

        if (!formData.partnershipLabel) {
            newErrors.partnershipLabel = "Partnership label is required";
        }
        if (formData.rating < 1 || formData.rating > 5) {
            newErrors.rating = "Please select a rating";
        }
        if (!formData.content || formData.content.length < 10) {
            newErrors.content = "Review must be at least 10 characters";
        }
        if (!formData.clientName) {
            newErrors.clientName = "Client name is required";
        }
        if (!formData.companyName) {
            newErrors.companyName = "Company name is required";
        }
        if (!formData.location) {
            newErrors.location = "Location is required";
        }
        if (!formData.industry) {
            newErrors.industry = "Industry is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            const res = await createTestimonial(formData).unwrap();
            if (res.success) {
                toast.success("Review submitted successfully")
                // Reset form
                setFormData({
                    partnershipLabel: "",
                    rating: 0,
                    content: "",
                    clientName: "",
                    designation: "",
                    companyName: "",
                    location: "",
                    industry: "",
                });
                setErrors({});
            } else {
                toast.error(res.message)
            }
        }
    };

    return (
        <div className="min-h-screen w-full  py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl container mx-auto overflow-hidden">
                <Card className="shadow-lg border p-4 py-4 md:py-6">
                    <CardHeader className="pb-4 text-center">
                        <div className=" flex items-center w-full justify-center">
                            <Link href="/">
                                <Image
                                    src="https://res.cloudinary.com/dog2ins5h/image/upload/v1766768290/Saa-Logo-Final-v2-c_owooet.png"
                                    alt="SAA Accounting Logo"
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </Link>
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-[#002047]">
                            <h3>Submit Your Review</h3>
                        </CardTitle>
                        <CardDescription className="text-[#65758B] text-sm md:text-base">
                            Share your experience with our services. Your feedback helps us improve.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-5">
                            {/* Partnership Label */}
                            <div className="space-y-2">
                                <label className="text-[#002047] font-medium text-sm">
                                    Partnership Label *
                                </label>
                                <Input
                                    placeholder="Write partnership label"
                                    value={formData.partnershipLabel}
                                    onChange={(e) => handleInputChange('partnershipLabel', e.target.value)}
                                    className="border-gray-300  mt-2 h-auto px-3 py-3 focus-visible:ring-[#5b7fa6]"
                                />
                                {errors.partnershipLabel && (
                                    <p className="text-red-500 text-sm">{errors.partnershipLabel}</p>
                                )}
                            </div>

                            {/* Rating */}
                            <div className="space-y-2">
                                <label className="text-[#002047] font-medium text-sm">
                                    Rating *
                                </label>
                                <div className="flex gap-2  mt-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => handleInputChange('rating', star)}
                                            onMouseEnter={() => setHoveredStar(star)}
                                            onMouseLeave={() => setHoveredStar(0)}
                                            className="focus:outline-none transition-transform cursor-pointer hover:scale-110"
                                        >
                                            <Star
                                                className={`w-8 h-8 ${star <= (hoveredStar || formData.rating)
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "fill-none text-gray-300 cursor-pointer"
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                                {errors.rating && (
                                    <p className="text-red-500 text-sm">{errors.rating}</p>
                                )}
                            </div>

                            {/* Review Content */}
                            <div className="space-y-2">
                                <label className="text-[#002047] font-medium text-sm">
                                    Review *
                                </label>
                                <Textarea
                                    placeholder="Share your experience with our services..."
                                    rows={5}
                                    value={formData.content}
                                    onChange={(e) => handleInputChange('content', e.target.value)}
                                    className=" mt-2 border-gray-300 h-auto px-3 py-3 focus-visible:ring-[#5b7fa6] resize-none"
                                />
                                {errors.content && (
                                    <p className="text-red-500 text-sm">{errors.content}</p>
                                )}
                            </div>

                            {/* Client Name & Designation */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[#002047] font-medium text-sm">
                                        Your Name *
                                    </label>
                                    <Input
                                        placeholder="John Doe"
                                        value={formData.clientName}
                                        onChange={(e) => handleInputChange('clientName', e.target.value)}
                                        className="border-gray-300  mt-2 h-auto px-3 py-3 focus-visible:ring-[#5b7fa6]"
                                    />
                                    {errors.clientName && (
                                        <p className="text-red-500 text-sm">{errors.clientName}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[#002047] font-medium text-sm">
                                        Designation
                                    </label>
                                    <Input
                                        placeholder="CEO, Manager, etc."
                                        value={formData.designation}
                                        onChange={(e) => handleInputChange('designation', e.target.value)}
                                        className="border-gray-300 mt-2 h-auto px-3 py-3 focus-visible:ring-[#5b7fa6]"
                                    />
                                </div>
                            </div>

                            {/* Company Name */}
                            <div className="space-y-2">
                                <label className="text-[#002047] font-medium text-sm">
                                    Company Name *
                                </label>
                                <Input
                                    placeholder="Your company name"
                                    value={formData.companyName}
                                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                                    className="border-gray-300 mt-2 h-auto px-3 py-3 focus-visible:ring-[#5b7fa6]"
                                />
                                {errors.companyName && (
                                    <p className="text-red-500 text-sm">{errors.companyName}</p>
                                )}
                            </div>

                            {/* Location & Industry */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[#002047] font-medium text-sm">
                                        Location *
                                    </label>
                                    <Input
                                        placeholder="City, Country"
                                        value={formData.location}
                                        onChange={(e) => handleInputChange('location', e.target.value)}
                                        className="border-gray-300 mt-2 h-auto px-3 py-3 focus-visible:ring-[#5b7fa6]"
                                    />
                                    {errors.location && (
                                        <p className="text-red-500 text-sm">{errors.location}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[#002047] font-medium text-sm">
                                        Industry *
                                    </label>
                                    <Input
                                        placeholder="e.g., Technology, Finance"
                                        value={formData.industry}
                                        onChange={(e) => handleInputChange('industry', e.target.value)}
                                        className="border-gray-300 mt-2 h-auto px-3 py-3 focus-visible:ring-[#5b7fa6]"
                                    />
                                    {errors.industry && (
                                        <p className="text-red-500 text-sm">{errors.industry}</p>
                                    )}
                                </div>
                            </div>

                            <Button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full bg-[#4d5cac] hover:bg-[#5F6CB4] text-white cursor-pointer py-8 text-base font-medium"
                                disabled={isLoading}
                            >
                                {isLoading ? <Spinner /> : <Send className="ml-2 h-4 w-4" />}

                                {isLoading ? "Review Submitting..." : "Submit Review"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};