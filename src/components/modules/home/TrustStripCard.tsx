"use client"
import { motion } from "framer-motion"
import React from "react";

export type TrustStripCardProps = {
    partner: string;
    index: number;
    partners: string[];
}

const TrustStripCard: React.FC<TrustStripCardProps> = ({ partner, index, partners }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration:1.3, delay: index * 0.2 }}
            className="flex items-center text-white text-lg font-semibold"
        >
            <span className="hover:text-gray-300 transition-all duration-500">{partner}</span>

            {/* Vertical Divider */}
            {index < partners.length - 1 && (
                <span className="mx-6 text-gray-400">|</span>
            )}
        </motion.div>
    );
};

export default TrustStripCard;
