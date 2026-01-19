"use client"

import { motion } from "framer-motion"
import Link from "next/link";
import { PrimaryButton } from "../shared/button/PrimaryButton";
import { SecondaryButton } from "../shared/button/SecondaryButton";


const CTASection = () => {
    return (
        <div className="w-full bg-linear-to-r from-[#002048]  to-[#4D5CAC] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Content Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
        
                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8 leading-tight px-4">
                        Be Our Next Success Story.
                    </h2>

                    {/* Subtitle */}
                    <p className="text-[#afb2b7] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-12 leading-relaxed px-4">
                        Join 500+ businesses across New Zealand who trust SAA for their financial success.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        {/* Primary Button */}
                        <Link href="/join-us">
                            <PrimaryButton>Start Your Registration</PrimaryButton>
                        </Link>

                        {/* Secondary Button */}
                        <Link href="/services">
                            <SecondaryButton className='border-[#64D3F8] text-[#64D3F8] hover:bg-[#64D3F8] hover:border-[#002047] hover:text-[#002047] transition-colors duration-300 ease-in-out'>Read Our Services</SecondaryButton>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CTASection;