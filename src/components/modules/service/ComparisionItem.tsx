"use client"
import React from 'react';
import { DynamicLucideIcon } from '../shared/dynamicIcon/DynamicLucideIcon';
import { motion } from 'framer-motion';

// Single item type
interface ComparisonItem {
  icon: string;
  text: string;
}

// Section type for each side (without / with)
export interface ComparisonSection {
  badgeTitle: string;
  badgeIcon: string;
  title: string;
  items: ComparisonItem[];
}

// Props for the dual card component
export interface DualComparisonCardProps {
  withoutSaaS: ComparisonSection;
  withSaaS: ComparisonSection;
}

// Reusable Badge Component
const Badge: React.FC<{
  icon: string;
  text: string;
  badgeColor: string;
  iconColor: string;
  textColor: string;
}> = ({ icon, text, badgeColor, iconColor, textColor }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${badgeColor}`}>
    <DynamicLucideIcon iconName={icon} size={20} className={iconColor} />
    <span className={`text-sm font-medium ${textColor}`}>{text}</span>
  </div>
);

// Main Dual Comparison Card Component
export const DualComparisonCard: React.FC<DualComparisonCardProps> = ({
  withoutSaaS,
  withSaaS,
}) => {
  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Left: Without Expert Support (Problems) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-3xl p-8 lg:p-10 border border-[#FBE7E7] bg-white">
          <Badge
            icon={withoutSaaS.badgeIcon}
            text={withoutSaaS.badgeTitle}
            badgeColor="bg-red-50"
            iconColor="text-[#F05253]"
            textColor="text-[#F05253]"
          />
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-6 mb-8">
            {withoutSaaS.title}
          </h3>
          <div className="space-y-4">
            {withoutSaaS.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-red-50"
              >
                <div className="shrink-0 p-2 rounded-lg bg-[#FADEDF]">
                  <DynamicLucideIcon iconName={item.icon} size={20} className="text-[#F05253] " />
                </div>
                <span className="text-base font-medium text-gray-800">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* Right: With SAA Accounting (Benefits) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-3xl p-8 lg:p-10 border border-[#D1F1FA] bg-white">
          <Badge
            icon={withSaaS.badgeIcon}
            text={withSaaS.badgeTitle}
            badgeColor="bg-[#F7FBFD]"
            iconColor="text-[#56CDF5]"
            textColor="text-[#4D5CAC]"
          />
          <h3 className="text-3xl lg:text-4xl font-bold text-[#002047] mt-6 mb-8">
            {withSaaS.title}
          </h3>
          <div className="space-y-4">
            {withSaaS.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#F1F9FD]"
              >
                <div className="shrink-0 p-2 rounded-lg bg-[#D1F1FA]">
                  <DynamicLucideIcon iconName={item.icon} size={20} className="text-[#56CDF5]" />
                </div>
                <span className="text-base font-medium text-gray-800">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};