"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  backgroundColor: string;
  // content: string | string[];
   content: React.ReactNode
  delay?: number;
}

export const ContactCard: React.FC<ContactCardProps> = ({ icon,backgroundColor, title, content, delay = 0 }) => {
  return (

    <motion.div
  initial={{ opacity: 0, y: 70 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay }}
  className={`
    bg-white border-2 border-gray-200 rounded-lg p-6 
    transition-all duration-500 ease-out
    hover:border-[#AAE6FA] hover:border-2
    hover:shadow-[0_0_20px_#CBEEFB]
    hover:-translate-y-2
    group
  `}
>
  <div className="flex items-start gap-4">
    <div 
      className={`
        shrink-0 w-14 h-14 bg-[${backgroundColor}] rounded-lg 
        transition-all duration-500
        group-hover:scale-110 group-hover:shadow-md
        flex items-center justify-center
      `}
    >
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