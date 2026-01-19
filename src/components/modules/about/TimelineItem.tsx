
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.5,
      }}
      className="relative flex gap-6 pb-12 last:pb-0"
    >
      {/* Timeline Line and Icon */}
      <div className="relative flex flex-col items-center">
        {/* Icon Container */}
        <div className="w-12 h-12 bg-[#4D5CAC] rounded-full flex items-center justify-center shrink-0 z-10 shadow-lg">
          <Calendar size={20} className="text-white" strokeWidth={2} />
        </div>
        
        {/* Vertical Line - Hidden for last item */}
        {!isLast && (
          <div className="absolute top-12 left-1/2 mt-2 -translate-x-1/2 w-0.5 h-14 bg-[#DFE4EC]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-2">
        {/* Year */}
        <p className="text-[#4D5CAC] text-sm font-semibold mb-2">
          {year}
        </p>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-[#1a3a52] mb-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-[#6b7280] text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};