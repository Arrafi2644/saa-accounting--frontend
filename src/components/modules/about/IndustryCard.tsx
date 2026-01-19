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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        y: { delay: 0.2, duration: 0.3, ease: 'easeOut' },
      }}
      className="bg-white p-6 rounded-xl  transition-all duration-300 border border-gray-300 group flex items-center gap-4"
    >
      {/* Icon Container */}
      <div className="w-14 h-14 bg-[#EDEEF6] rounded-xl flex items-center justify-center shrink-0 ">
        <div className="text-[#4D5CAC]">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-[#002047] transition-colors">
        {title}
      </h3>
    </motion.div>
  );
};
