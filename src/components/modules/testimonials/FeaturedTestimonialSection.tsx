
"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { FeaturedTestimonialCard } from "./FeaturedTestimonialCard";
import { ITestimonial } from "./AllTestimonialsSection";

interface FeaturedTestimonialsSectionProps {
    featuredTestimonials: ITestimonial[];
}

const FeaturedTestimonialSection: React.FC<FeaturedTestimonialsSectionProps> = ({featuredTestimonials: testimonials}) => {
  const [currentIndex, setCurrentIndex] = useState(0);



  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full bg-white py-20 px-4 md:px-6 lg:px-8 overflow-hidden">

      {/* 🔹 Main Content (Top Layer) */}
      <div className="relative z-10 max-w-4xl mx-auto">     
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002047] mb-4">
            Featured <span className="text-[#4D5CAC]">Success Stories</span>
          </h2>
        </div>

        {/* Animated Card */}
        <div className="mb-8 relative ">
          <AnimatePresence mode="wait">
            <FeaturedTestimonialCard
              key={testimonials[currentIndex]._id}
              testimonial={testimonials[currentIndex]}
            />
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full group cursor-pointer bg-white border hover:border-[#4D5CAC] hover:bg-[#4D5CAC] transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-[#4D5CAC] group-hover:text-white" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[#4D5CAC]"
                    : "w-2 bg-[#AFB7C3]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 group rounded-full cursor-pointer bg-white border hover:border-[#4D5CAC] hover:bg-[#4D5CAC] transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-[#4D5CAC] group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonialSection;
