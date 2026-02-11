
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
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 1
    }}
      className="bg-[#002047] group border-2 border-[#00204745] hover:border-[#6DCFFA] transition-all duration-500  rounded-2xl p-8 hover:shadow-[0_0_20px_#6DCFFA]"
    >
      <div
        className="w-15 h-15 border group-hover:scale-110 transition-all bg-[#334D6C] duration-500 border-white rounded-2xl flex items-center justify-center mx-auto mb-6"
      >
      {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-[white] text-center mb-4">
        {title}
      </h3>
      <p className="text-[white] text-center text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};