'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const ToolCard: React.FC<ToolCardProps> = ({ icon, title, description, index }) => {
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
      className="bg-[#9177770f] p-8 rounded-xl border border-[#00204745] group flex flex-col h-full"
    >
      {/* Icon Container */}
      <div className="w-16 h-16 bg-[#e8eaf5] rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300">
        <div className="text-[#5b6ba8]">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-[#1a3a52] mb-4 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#6b7280] text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};