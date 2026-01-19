"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  backgroundColor: string;
  content: string | string[];
  delay?: number;
}

export const ContactCard: React.FC<ContactCardProps> = ({ icon,backgroundColor, title, content, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="bg-white border hover:border-[#AAE6FA] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-4">
       
         <div  className={`shrink-0 w-14 h-14 bg-[${backgroundColor}] rounded-lg flex items-center justify-center`}>
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