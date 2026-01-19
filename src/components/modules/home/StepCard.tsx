
"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Types
export interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface StepCardProps {
  step: Step;
  index: number;
  totalSteps: number;
}

export interface PartnershipStepsProps {
  title?: string;
  subtitle?: string;
  steps?: Step[];
}

// StepCard Component
export const StepCard: React.FC<StepCardProps> = ({ step, index, totalSteps }) => {
  const showConnector = index < totalSteps - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{duration: 1, delay: index * 0.2 }}
      className="flex flex-col items-center text-center h-full group"
    >
      <div className="group relative bg-[#002a52] border border-[#ffffff1a]  h-full rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:bg-[#1A375A] hover:shadow-lg hover:shadow-blue-900/20 w-full">
        {/* Step Number and Icon */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-4xl font-bold text-[#2B6489] group-hover:text-white group-hover:scale-110 transition-all duration-300 ">
            {step.number}
          </h3>
          <div className="bg-[#54cff81a] hover:bg-[#26557A] p-3 rounded-lg ">
            <div className="text-[#54cff8] transition-colors">
              {step.icon}
              
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 leading-tight text-start">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed text-start">
          {step.description}
        </p>

        {/* Connection Line and Dot */}
        {showConnector && (
          <>
            <div className='hidden absolute top-1/2 -translate-y-1/2 -right-4 border-2 border-[#19547C] bg-[#001f3f]  h-8 w-8 rounded-full lg:flex items-center justify-center'>
              <div className=' h-2 w-2 bg-[#64D3F8] rounded-full'></div>
            </div>
            <div className='hidden lg:block absolute w-4 h-0.5 bg-[#19547C] -right-8 top-1/2'></div>
          </>
        )}

      </div>
    </motion.div>
  );
};