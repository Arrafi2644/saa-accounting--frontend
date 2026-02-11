
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Quote, Star, User } from "lucide-react";
import { motion } from "framer-motion";
import { ITestimonial } from "./AllTestimonialsSection";


export const FeaturedTestimonialCard: React.FC<{ testimonial: ITestimonial }> = ({
    testimonial,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        >
            <Card className="border group border-[#EFF1F5] shadow-lg bg-[#515FAE]">
                <CardContent className="p-8 md:p-12">
                   <div className="flex justify-between items-start gap-4">
                     <div className="">
                        <span className="px-4 py-2 font-medium bg-[#5275BC] text-[#56CDF5] text-sm rounded-full">
                            {testimonial.industry}
                        </span>
                        {/* Star Rating */}
                        <div className="flex gap-1 my-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-5 h-5 fill-[#56CDF5] text-[#56CDF5]"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-14 h-14 group-hover:scale-110 transition-all duration-500 rounded-full text-[#56CDF5] bg-[#6774B8] flex items-center justify-center font-semibold">
                        <Quote size={28} />
                    </div>
                   </div>

                    {/* Content */}
                    <blockquote className="text-[#EEF0F7] italic text-xl md:text-2xl mb-8">
                        <h3>{`" ${testimonial.content} "`}</h3>
                    </blockquote>

                    {/* Author */}
                    <div className="flex flex-col md:flex-row items-center group-hover:scale-105 lg:group-hover:scale-102 transition-all duration-500 justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full text-[#56CDF5] bg-[#5678BE] flex items-center justify-center font-semibold">
                                <User />
                            </div>
                            <div className="space-y-1">
                                <div className="font-semibold text-white">
                                    {testimonial.clientName}
                                </div>
                                <div className="text-sm text-[#FFFFFFB3]">
                                    {testimonial.companyName}
                                </div>
                                <div className="text-sm flex items-center gap-1 text-[#FFFFFFB3]">
                                    <MapPin size={14} />
                                    {testimonial.location}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};
