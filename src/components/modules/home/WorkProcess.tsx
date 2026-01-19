
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Search, Settings, Shield, TrendingUp } from "lucide-react";
import { PartnershipStepsProps, Step, StepCard } from "./StepCard";
import { GlaceGlaceForTagline } from "./HeroTextAnimation";

// --- Helper for staggered animation delays ---
const staggerDelays = {
  tag: 0.3,
  heading: 0.5,
  para: 0.7,
};

// Default steps data
const defaultSteps: Step[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your unique business needs and financial goals through a comprehensive assessment.',
    icon: <Search className="w-6 h-6" />
  },
  {
    number: '02',
    title: 'Assessment & Planning',
    description: 'Developing a tailored financial strategy aligned with your business objectives.',
    icon: <FileText className="w-6 h-6" />
  },
  {
    number: '03',
    title: 'Setup & Implementation',
    description: 'Seamless integration of technology and systems for efficient financial management.',
    icon: <Settings className="w-6 h-6" />
  },
  {
    number: '04',
    title: 'Ongoing Compliance',
    description: 'Ensuring accuracy and meeting all regulatory deadlines with proactive monitoring.',
    icon: <Shield className="w-6 h-6" />
  },
  {
    number: '05',
    title: 'Reporting & Growth',
    description: 'Providing strategic insights and actionable recommendations for future success.',
    icon: <TrendingUp className="w-6 h-6" />
  }
];

// WorkProcess Component
export const WorkProcess: React.FC<PartnershipStepsProps> = ({
  title = 'Our Proven 5-Step Partnership',
  subtitle = 'A structured approach to delivering exceptional financial services tailored to your business.',
  steps = defaultSteps
}) => {
  return (
    <section className="w-full bg-[#001f3f] py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="text-center mb-12 lg:mb-16"
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
              <p className="py-2 px-6">
                OUR PROCESS
              </p>
            </GlaceGlaceForTagline>
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: staggerDelays.heading, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white my-4"
          >
            {title}
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: staggerDelays.para, ease: "easeOut" }}
            className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              index={index}
              totalSteps={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
