'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CircleCheckBig } from 'lucide-react';

interface ExpertiseItemProps {
  title: string;
  index: number;
}

export const Expertise: React.FC<ExpertiseItemProps> = ({ title, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        y: { delay: 0.5, duration: 0.3, ease: 'easeOut' },
      }}
      className="bg-[#1a3550] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#2a4a68] group flex items-center gap-4"
    >
      {/* Icon */}
      <div className="shrink-0">
        <CircleCheckBig
          size={28} 
          className="text-[#5dbadb] transition-transform duration-300" 
          strokeWidth={2}
        />
      </div>

      {/* Title */}
      <span className="text-base font-semibold text-white transition-colors">
        {title}
      </span>
    </motion.div>
  );
};
