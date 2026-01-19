
"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialSlideCard } from "./TestimonialSlideCard";
import { ITestimonial } from "@/types";
import { GlaceGlaceForTagline } from "./HeroTextAnimation";


interface testimonialsSectionProps {
  testimonials: ITestimonial[];
}

// --- Helper for staggered animation delays ---
const staggerDelays = {
  tag: 0.3,
  heading: 0.5,
  para: 0.7,
  card: 0.9,
  navigation: 1.1,
};

const TestimonialSection: React.FC<testimonialsSectionProps> = ({ testimonials }) => {
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
    <section className="relative w-full bg-gray-50 py-20 md:py-28 lg:py-32 px-4 overflow-hidden">

      {/* 🔹 Decorative Quotes (Background Layer) */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}

        exit={{ opacity: 0, x: 0 }}
        transition={{
          delay: 0.1, duration: 1.3, ease: "easeOut"
        }}

        className="absolute top-20 left-10 text-[#F1F3F7] z-0 pointer-events-none">
        <Quote size={160} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}

        exit={{ opacity: 0, x: 80 }}
        transition={{
          delay: 0.1, duration: 1.3, ease: "easeOut"
        }}

        className="absolute bottom-20 right-10 rotate-180 text-[#F1F3F7] z-0 pointer-events-none">
        <Quote size={160} />
      </motion.div>

      {/* 🔹 Main Content (Top Layer) */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="text-center mb-12"
        >
          {/* Tag */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: staggerDelays.tag, ease: "easeOut" }}
            className="inline-block text-white font-medium text-sm rounded-tl-2xl rounded-br-2xl bg-linear-to-r from-blue-600 to-[#56CCF4]"
          >
            <GlaceGlaceForTagline>
            <p className="py-2 px-6 ">
              TESTIMONIALS
            </p>
            </GlaceGlaceForTagline>
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: staggerDelays.heading, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-[#002047] my-4"
          >
            Client Success Stories
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: staggerDelays.para, ease: "easeOut" }}
            className="text-black max-w-2xl mx-auto"
          >
            Hear from business owners who transformed their financial management.
          </motion.p>
        </motion.div>

        {/* Animated Card */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: staggerDelays.card, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <AnimatePresence mode="wait">
            <TestimonialSlideCard
              key={testimonials[currentIndex]._id}
              testimonial={testimonials[currentIndex]}
            />
          </AnimatePresence>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: staggerDelays.navigation, ease: "easeOut" }}
          className="flex items-center justify-center gap-4"
        >
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full cursor-pointer bg-white border hover:bg-[#E9F6FA] hover:border-[#64D3F8] transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-[#002047]" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${index === currentIndex
                  ? "w-8 bg-[#64D3F8]"
                  : "w-2 bg-[#AFB7C3]"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full cursor-pointer bg-white border hover:bg-[#E9F6FA] hover:border-[#64D3F8] transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-[#002047]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
