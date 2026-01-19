"use client"
import React from 'react';
import { DynamicLucideIcon } from '../shared/dynamicIcon/DynamicLucideIcon';
import { IFeature } from '@/types';
import { motion } from "framer-motion"

interface ServiceCardProps {
    feature: IFeature;
    index: number;
}

export const WhatWeOfferCard: React.FC<ServiceCardProps> = ({ feature, index }) => {

    return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                    y: {
                        delay: 0,
                        duration: 0.3,
                        ease: "easeOut",
                    },
                }}
                className={`bg-[#9177770f] p-8 rounded-xl shadow-sm hover:shadow-2xl 
             transition-shadow duration-300 border border-[#00204745]  hover:border-[#64D3F8]
             group flex flex-col h-full`}
            >
                <div className="w-14 h-14 bg-linear-to-br from-[#DCE1F0] to-[#DCF3FC] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#4D5CAC] group-hover:text-[#64D3F8]">
                        <DynamicLucideIcon
                            iconName={feature.icon}
                            size={26}
                        />
                    </div>
                </div>

                <h3 className="text-lg font-bold text-[#002047] mb-3 transition-colors">
                    {feature.title}
                </h3>

                <p className="text-[#65758B] mb-6 text-sm leading-relaxed">
                    {feature.description}
                </p>

            </motion.div>
    );
};
