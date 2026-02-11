
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
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: index * 0.2,
      }}

    >
<div 
  className="
    group       
    bg-[#a5e5ff99] p-6 rounded-xl border-gray-100 
    flex items-center gap-4 overflow-hidden 
    transition-all duration-500 
    hover:shadow-[0_0_20px_#9454c6]
    hover:border-[#7814c7] border-2
  "
>
  {/* Icon */}
  <div className="shrink-0 transition-all duration-300 group-hover:scale-110">
    <Trophy
      size={28}
      className="text-[#7814c7]"
      strokeWidth={2}
    />
  </div>

  {/* Title */}
  <h3 className="text-lg sm:text-xl font-semibold text-[#1a3a52] transition-colors">
    {title}
  </h3>
</div>
    </motion.div>
  );
};
