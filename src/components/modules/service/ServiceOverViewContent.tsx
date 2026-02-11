"use client"
import React from 'react';
import { motion } from "framer-motion";
import { IServiceOverview } from '@/types';
import { CircleCheckBig } from 'lucide-react';

interface ServiceOverviewProps {
    overview: IServiceOverview;
}

const ServiceOverViewContent = ({ overview }: ServiceOverviewProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002047] mb-6">
                {overview.title}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-black">
                {overview.description}
            </p>
            {
                (overview.features && overview.features.length > 1) && <ul className="space-y-4">
                    {overview.features.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center text-[#65758B] font-medium"
                        >
                            <CircleCheckBig className="text-[#64D3F8] mr-3 h-5 w-5 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            }

        </motion.div>
    );
};

export default ServiceOverViewContent;