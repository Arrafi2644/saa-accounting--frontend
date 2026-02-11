

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
  // Alternating pattern: even indices (0, 2, 4, 6...): white text, #002047 background
  // Odd indices (1, 3, 5, 7...): #002047 text, #001F3F background
  const isWhiteTextCard = index % 2 === 0;

  const cardBgColor = isWhiteTextCard ? 'bg-[#002047]' : 'bg-[#65D0F8]';
  const titleTextColor = isWhiteTextCard ? 'text-white' : 'text-[#002047]';
  const descriptionTextColor = isWhiteTextCard ? 'text-white' : 'text-[#002047]';
  const borderColor = isWhiteTextCard ? 'border-white' : 'border-[#002047]';

  return (
    <motion.div
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 1,
      delay: index * 0.2,
    }}
      className={`p-10 md:p-6 lg:p-10 rounded-xl  border-2 text-center ${cardBgColor}  border-[#00204745] hover:shadow-[0_0_20px_#6DCFFA] group  h-full group`}
    >
      <div className='group-hover:scale-103 transition-all duration-500 flex flex-col items-center justify-center'>

      {/* Icon Container */}
      <div className={`p-4 group-hover:scale-110 group-hover:rounded-2xl transition-all duration-300  bg-transparent border-2 ${borderColor} transition-all duration-500  rounded-2xl flex items-center justify-center mb-6`}>
        <div className={titleTextColor}>{icon}</div>
      </div>

      {/* Title */}
      <h3 className={`text-xl font-bold ${titleTextColor} mb-4 transition-colors`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`${descriptionTextColor} text-base leading-relaxed`}>
        {description}
      </p>
      </div>
    </motion.div>
  );
};