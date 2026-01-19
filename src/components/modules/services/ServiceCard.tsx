"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { DynamicLucideIcon } from '../shared/dynamicIcon/DynamicLucideIcon';
import { IService } from '@/types';
import { motion } from "framer-motion"

interface ServiceCardProps {
    service: IService;
    index: number;
}


export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {

    return (
        <Link href={`/services/${service.slug}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    y: {
                        delay: 0,
                        duration: 0.3,
                        ease: "easeOut",
                    },
                }}
                className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl 
             transition-shadow duration-300 border border-gray-100  hover:border-[#64D3F8]
             group flex flex-col h-full`}
            >
                <div className="w-14 h-14 bg-linear-to-br from-[#DCE1F0] to-[#DCF3FC] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#4D5CAC]">
                        <DynamicLucideIcon
                            iconName={service.serviceIcon}
                            size={26}
                        />
                    </div>
                </div>

                <h3 className="text-lg font-bold text-[#002047] group-hover:text-[#4D5CAC] mb-3 transition-colors">
                    {service.title}
                </h3>

                <p className="text-[#65758B] mb-6 text-sm leading-relaxed">
                    {service.shortDescription}
                </p>

                <div
                    className="flex items-center font-medium mt-auto text-[#4D5CAC] text-sm"
                >
                    Learn more
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={14} />
                </div>
            </motion.div>
        </Link>
    );
};
