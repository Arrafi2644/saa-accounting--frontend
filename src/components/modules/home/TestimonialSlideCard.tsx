

import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";
import { motion } from "framer-motion";
import { ITestimonial } from "@/types";


export const TestimonialSlideCard: React.FC<{ testimonial: ITestimonial }> = ({
    testimonial,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{
                delay: 0.1, duration: 0.4, ease: "easeOut"
            }}
            className="overflow-hidden group"
        >
            <Card className="border border-[#EFF1F5] shadow-lg bg-white ">
                <CardContent className="p-8 md:p-12">
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                        ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-[#002047] text-lg md:text-xl mb-8 font-medium">
                        <h3>{testimonial.content}</h3>
                    </blockquote>

                    {/* Author */}
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center gap-4 group-hover:scale-105 transition-all duration-500">
                            <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#4F65B6] to-[#64D3F8] flex items-center justify-center text-white font-semibold">
                                <User />
                            </div>
                            <div>
                                <div className="font-semibold text-[#002047]">
                                    {testimonial.clientName}
                                </div>
                                <div className="text-sm text-gray-600">
                                    {testimonial?.designation}{testimonial?.designation && ","} {testimonial.clientName}
                                </div>
                            </div>
                        </div>

                        <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-sm rounded-full">
                            {testimonial.industry}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};
