"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ITestimonial } from "@/types";
import { Star } from "lucide-react";

interface TestimonialDetailsModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    testimonial: ITestimonial;
}

const TestimonialDetailsModal = ({
    open,
    onOpenChange,
    testimonial,
}: TestimonialDetailsModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md space-y-4">
                <DialogHeader>
                    <DialogTitle className="text-center">Testimonial Details</DialogTitle>
                    <DialogDescription className="text-center">
                        Full testimonial information
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col items-center gap-3">
                    <Avatar className="w-20 h-20">
                        <AvatarImage src={testimonial.photoUrl} alt={testimonial.fullName} />
                        <AvatarFallback>
                            {testimonial.fullName?.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>

                    <h2 className="text-lg font-semibold">{testimonial.fullName}</h2>
                    <p className="text-sm text-muted-foreground">{testimonial.email}</p>

                    {/* Rating */}
                    <div className="flex gap-1 text-yellow-500">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-500" />
                        ))}
                    </div>
                </div>

                {/* Info Section */}
                <div className="space-y-3 border rounded-md p-4">
                    {testimonial.companyName && (
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Company</span>
                            <span className="font-medium">{testimonial.companyName}</span>
                        </div>
                    )}

                    {testimonial.designation && (
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Designation</span>
                            <span className="font-medium">{testimonial.designation}</span>
                        </div>
                    )}

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Approved</span>
                        <span
                            className={`font-medium ${testimonial.isApproved ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {testimonial.isApproved ? "Yes" : "No"}
                        </span>
                    </div>

                    {testimonial?.createdAt && (
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Date</span>
                            <span className="font-medium">
                                {new Date(testimonial.createdAt).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}
                                
                            </span>
                        </div>
                    )}

                </div>

                {/* Message */}
                <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">Message</h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {testimonial.message}
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default TestimonialDetailsModal;
