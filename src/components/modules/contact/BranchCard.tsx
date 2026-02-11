"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface BranchCardProps {
  icon: React.ReactNode;
  title: string;
  backgroundColor: string;
  content: string | string[];
  delay?: number;
}

export const BranchCard: React.FC<BranchCardProps> = ({ icon,backgroundColor, title, content, delay = 0 }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 1,
      delay: delay
    }}
      className="bg-white border-2  hover:border-[#AAE6FA] rounded-lg p-6 group hover:shadow-[0_0_20px_#CBEEFB] transition-all duration-500 hover:scale-102"
    >
      <div className="flex items-start gap-4">
       
         <div  className={`shrink-0 w-14 h-14 bg-[${backgroundColor}] rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500`}>
          {icon}
         </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          {Array.isArray(content) ? (
            <div className="space-y-1">
              {content.map((item, index) => (
                <p key={index} className="text-gray-600 text-sm md:text-base">
                  {item}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-sm md:text-base wrap-break-word">{content}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};