"use client"
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { GlaceGlaceForTagline } from '../home/HeroTextAnimation';
import { motion } from "framer-motion"
import AnimatedSectionHeader from '../animations/AnimatedSectionHeader';

interface PreparationItem {
  title: string;
  description: string;
}

const preparationItems: PreparationItem[] = [
  {
    title: 'Have Your IRD Number Ready',
    description:
      'Your IRD number helps us access your tax records and provide accurate advice.',
  },
  {
    title: 'Access to Accounting Software',
    description:
      'Ensure you can log into your Xero or MYOB account for screen-sharing sessions.',
  },
  {
    title: 'Prepare Your Questions',
    description:
      'Write down your top 3 financial goals or pain points to discuss.',
  },
  {
    title: 'Recent Financial Documents',
    description:
      'Have your latest bank statements or financial reports handy for reference.',
  },
];

export default function HowToPrepare() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 space-y-4 hidden xl:block">
          <motion.span
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-block text-white font-medium text-sm rounded-tl-2xl rounded-br-2xl bg-linear-to-r from-blue-600 to-[#56CCF4]"
          >
            <GlaceGlaceForTagline>
              <p className="py-2 px-6">
                BE PREPARED
              </p>
            </GlaceGlaceForTagline>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-3xl lg:text-4xl font-bold text-[#002047] mb-4">

            How to Prepare
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">

            Make the most of your consultation by having these items ready.
          </motion.p>

        </div>

        <div className='block xl:hidden'>
          <AnimatedSectionHeader
            tag="BE PREPARED"
            heading=" How to Prepare"
            subtitle="Make the most of your consultation by having these items ready."
          />
        </div>

        {/* Preparation Items */}
        <div className="space-y-4 sm:space-y-5">
          {preparationItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl border-2 border-gray-200 p-5 sm:p-4 lg:p-6 hover:shadow-lg hover:border-cyan-200 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Icon */}
                <div className="shrink-0 mt-0.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cyan-50 rounded-full flex items-center justify-center group-hover:bg-cyan-100 transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 text-cyan-400 group-hover:text-cyan-500 transition-all duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}