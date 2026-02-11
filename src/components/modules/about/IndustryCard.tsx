'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  index: number;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{
        delay: index * 0.2,
        duration: 0.8,
        y: { delay: 0.2, duration: 0.8, ease: 'easeOut' },
      }}
      className="relative bg-white group rounded-xl overflow-hidden border border-[#66D0F8]"
    >
      {/* Colored background div */}
      <div className="absolute top-0 left-0 w-0 h-full border-2 border-[#66D0F8] bg-[#66D0F8] transition-all duration-700 group-hover:w-full"></div>

      {/* Content */}
      <div className="relative p-6 flex items-center gap-4 z-10">
        {/* Icon */}
        <div className="p-4 bg-gray-100 group-hover:bg-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
          <div className="text-[#4D5CAC]">{icon}</div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-[#002047]">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};
