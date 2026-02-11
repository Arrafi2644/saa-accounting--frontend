'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CustomSVG from './CustomSvg';
import Image from 'next/image';
import cardImg from "../../../../public/assets/technolgoies-card-bg.svg"

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const ToolCard: React.FC<ToolCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 1,
      delay: index * 0.2,
    }}
    className="overflow-hidden rounded-xl border-3 border-white transition-all duration-300 hover:shadow-[0_0_20px_#6DCFFA] hover:border-[#6DCFFA]"
    >
      <div className='relative hover:scale-103 transition-all duration-500 bg-[#002047] p-8 group rounded-xl border border-[#00204745] group flex flex-col h-full'>
      {/* Top-right SVG background decor */}
        <Image
        src={cardImg}
        alt='technology'
        height={500}
        width={500}
        className='object-cover absolute -top-4 right-0'
        />

      {/* Card content */}
      <div className="flex flex-col z-10">
        {/* Icon */}
        <div className="relative group-hover:scale-110 transition-all  w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 duration-300">
          <div className="text-white text-2xl">{icon}</div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

        {/* Description */}
        <p className="text-white text-base leading-relaxed">{description}</p>
      </div>
      </div>
    </motion.div>
  );
};
