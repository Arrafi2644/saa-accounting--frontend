
"use client";

import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';

export interface ITestimonial {
  _id: string;
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
  const [prevIndex, setPrevIndex] = useState<number>(0);

  const uniqueLocations = Array.from(new Set(testimonials.map(t => t.location)));
  const locations = ['All', ...uniqueLocations];

  const handleClick = (location: string) => {
    const currentIndex = locations.indexOf(selectedLocation);
    const newIndex = locations.indexOf(location);
    
    setPrevIndex(currentIndex);
    setSelectedLocation(location);
  };

  const currentIndex = locations.indexOf(selectedLocation);
  const direction = currentIndex > prevIndex ? 1 : -1;

  return (
    <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto overflow-hidden">
        {/* Filter Section */}
    <div className="flex flex-wrap items-center justify-center gap-3 mb-10 w-full mx-auto">
  <span className="h-10 w-10 inline-block py-2 border-0 bg-gray-50">
    <Filter className="h-6 w-6 text-gray-600" />
  </span>

{locations.map((location) => {
  const isSelected = selectedLocation === location;

  return (
    <div key={location} className="relative isolate">
      <button
        onClick={() => handleClick(location)}
        className={`
          relative rounded-full px-6 h-10 text-sm font-medium
          overflow-hidden border transition-all duration-300
          ${isSelected
            ? 'border-transparent text-white shadow-md'
            : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:shadow-sm'
          }
        `}
      >
        <AnimatePresence initial={false}>
          {isSelected && (
            <motion.span
              className="absolute inset-0 rounded-full bg-[#4D5CAC] -z-10"
              initial={{
                scaleX: 0,
                originX: direction > 0 ? 0 : 1,
              }}
              animate={{
                scaleX: 1,
              }}
              exit={{
                scaleX: 0,
                originX: direction > 0 ? 0 : 1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
          )}
        </AnimatePresence>

        <span className="relative z-10 flex items-center justify-center w-full h-full">
          {location}
        </span>
      </button>
    </div>
  );
})}
</div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-y-8">
          {testimonials
            .filter(t => selectedLocation === 'All' || t.location === selectedLocation)
            .map((testimonial, index) => (
              <TestimonialCard key={testimonial._id} index={index} testimonial={testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AllTestimonialsSection;