"use client"

import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TestimonialCard } from './TestimonialCard';

export interface ITestimonial {
    _id: string,
    partnershipLabel: string;
    rating: number;
    content: string;
    clientName: string;
    designation?: string;
    companyName: string;
    location: string;
    industry: string;
    isApproved?: boolean;
    isFeatured?: boolean;
}

interface AllTestimonialsSectionProps {
    testimonials: ITestimonial[];
}


const AllTestimonialsSection: React.FC<AllTestimonialsSectionProps> = ({ testimonials }) => {
    const [selectedLocation, setSelectedLocation] = useState<string>('All');
    const uniqueLocations = Array.from(new Set(testimonials.map(t => t.location)));
    const locations = ['All', ...uniqueLocations];

    const filteredTestimonials = selectedLocation === 'All'
        ? testimonials
        : testimonials.filter((t) => t.location === selectedLocation);

    return (
        <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Filter Section */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-10 w-full mx-auto">
                    <span
                        className="h-10 w-10 inline-block py-2 border-0 bg-gray-50"
                    >
                        <Filter className="h-6 w-6 text-gray-600" />
                    </span>

                    {locations.map((location) => (
                        <Button
                            key={location}
                            onClick={() => setSelectedLocation(location)}
                            variant={selectedLocation === location ? 'default' : 'outline'}
                            className={`rounded-full cursor-pointer px-6 h-10 text-sm font-medium transition-all ${selectedLocation === location
                                ? 'bg-[#4D5CAC] text-white hover:bg-indigo-700'
                                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {location}
                        </Button>
                    ))}
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={testimonial._id} index={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};



export default AllTestimonialsSection;