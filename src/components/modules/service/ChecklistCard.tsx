"use client"
import { IRequirementDoc } from '@/types';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
import { DynamicLucideIcon } from '../shared/dynamicIcon/DynamicLucideIcon';

interface ChecklistProps {
  checklistItems : IRequirementDoc[]
}

const ChecklistCard:React.FC<ChecklistProps> = ({checklistItems}) => {
    return (
         <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
             {/* Checklist Card */}
        <div className="bg-white rounded-2xl border border-[#53C9F4] shadow-sm p-6 md:p-8 lg:p-10">
          {/* Card Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="shrink-0 w-10 h-10 bg-[#53C9F4]/10 rounded-lg flex items-center justify-center">
              <FileText size={24} className=" text-[#53C9F4]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Required Documents Checklist
            </h3>
          </div>

          {/* Checklist Items */}
          <div className="space-y-4 mb-8 ">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 group bg-[#F8F9FA] p-4 lg:p-6 rounded-lg">
                {/* <CircleCheckBig size={18} className=" text-[#53C9F4] shrink-0 mt-0.5" /> */}
                          <DynamicLucideIcon
                            iconName={item.icon}
                            size={20}
                            className="text-[#53C9F4] mt-0.5 group-hover:scale-110 transition-all duration-500 "
                          />
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="bg-blue-50 border-l-4 border-[#53C9F4] rounded-r-lg p-4 md:p-5">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              <span className="font-bold text-gray-900">Important:</span>{' '}
              Contact us immediately upon receiving an IRD letter – before attempting to gather documents. We will guide you on exactly what is needed and help prioritize your response.
            </p>
          </div>
        </div>
        </motion.div>
    );
};

export default ChecklistCard;