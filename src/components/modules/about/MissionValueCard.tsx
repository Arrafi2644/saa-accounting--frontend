

'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const MissionValueCard: React.FC<ValueCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        y: { delay: 0.5, duration: 0.3, ease: 'easeOut' },
      }}
      className="p-8 rounded-xl border text-center bg-[#9177770f] border-[#00204745] group flex flex-col items-center justify-center h-full"
    >
      {/* Icon Container */}
      <div className="w-16 h-16 bg-linear-to-br from-[#DBE0F0] to-[#DDF3FB]  rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300">
        <div className="text-[#4D5CAC]">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#1a3a52] mb-4 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#65758b] text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};