
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-[#9177770f] border border-[#00204745] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
    >
      <div
        className="w-16 h-16 bg-[#EEFAFE] text-[#64D3F8] rounded-2xl flex items-center justify-center mx-auto mb-6"
      >
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-[#002047] text-center mb-4">
        {title}
      </h3>
      <p className="text-[#65758B] text-center text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};