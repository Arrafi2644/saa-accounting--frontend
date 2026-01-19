
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

interface CertificationItemProps {
  title: string;
  index: number;
}

export const CertificationItem: React.FC<CertificationItemProps> = ({ title, index }) => {
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
      className="bg-[#a5e5ff99] p-6 rounded-xl  border-gray-100 group flex items-center gap-4"
    >
      {/* Icon */}
      <div className="shrink-0">
        <Trophy
          size={28} 
          className="text-[#7814c7] " 
          strokeWidth={2}
        />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-[#1a3a52] transition-colors">
        {title}
      </h3>
    </motion.div>
  );
};
