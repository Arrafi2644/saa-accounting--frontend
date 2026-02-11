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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 200, damping: 20 }
      }}
      variants={{
        hidden: { opacity: 0, y: 150 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.2,
            duration: 1,
            type: "spring",
            stiffness: 80,
            damping: 20,
          },
        },
      }}
      className=" "
    >
      <div className='bg-[#1a3550] border-2 hover:border-[#5dbadb] p-6 h-full rounded-xl shadow-md hover:shadow-2xl transition-all duration-300  border-[#2a4a68] group flex items-center gap-4'>


        <div className="shrink-0">
          <CircleCheckBig
            size={28}
            strokeWidth={2}
            className="text-[#5dbadb] transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <span className="text-base font-semibold text-white">{title}</span>
      </div>
    </motion.div>


  );
};
