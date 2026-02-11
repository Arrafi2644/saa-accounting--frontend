"use client"

import { motion } from "framer-motion"
import Link from "next/link";
import { PrimaryButton } from "../button/PrimaryButton";
import { SecondaryButton } from "../button/SecondaryButton";
import GradientButton from "../button/GradiantButton";
import Image from "next/image";
import ctaBg from "../../../../../public/assets/cta-bg-image.png"



export interface commonCTAProps {
    badgeTitle?: string
    title?: string;
    subTitle?: string;
    primaryBtnText?: string;
    secondaryBtnText?: string;
}

const CommonCTA = ({ badgeTitle, title, subTitle, primaryBtnText, secondaryBtnText }: commonCTAProps) => {
    return (
        <div className="w-full  py-20 px-4 sm:px-6 lg:px-8 relative">
              <div className="absolute inset-0 -z-10">
                <Image
                  src={ctaBg}
                  alt="CTA-Section-Background"
                  className="object-cover w-full h-full"
                  priority
                />
                {/* Optional overlay */}
                {/* <div className="absolute inset-0 bg-black/40"></div> */}
              </div>
            <div className="max-w-5xl mx-auto">
                {/* Content Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* badge  */}
                    {
                        badgeTitle && <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-300/10 backdrop-blur-sm text-white text-sm font-medium border border-white/30 mb-4">
                            <span className="w-2 h-2 bg-[#64D3F8] rounded-full animate-pulse"></span>
                            {badgeTitle}
                        </span>
                    }
                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8 leading-tight px-4">
                        {title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-[#afb2b7] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-12 leading-relaxed px-4">
                        {subTitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        {/* Primary Button */}
                        <Link href="/join-us">
                            {/* <PrimaryButton>{primaryBtnText}</PrimaryButton> */}
                            <GradientButton>
                                {primaryBtnText}
                            </GradientButton>
                        </Link>

                        {/* Secondary Button */}
                        <Link href="/contact">
                            {/* <SecondaryButton className='border-[#64D3F8] text-[#64D3F8] hover:bg-[#64D3F8] hover:border-[#002047] hover:text-[#002047] transition-colors duration-300 ease-in-out'>{secondaryBtnText}</SecondaryButton> */}
                            <GradientButton variant="outline">
                                {secondaryBtnText}
                            </GradientButton>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CommonCTA;