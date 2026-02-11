"use client"

import { motion } from "framer-motion"
import Link from "next/link";
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

const CommonCTA2 = ({ badgeTitle, title, subTitle, primaryBtnText, secondaryBtnText }: commonCTAProps) => {
    return (
<div className="w-full py-20 px-4 sm:px-6 lg:px-8 relative">
  {/* Background Image */}
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

  <div className="max-w-5xl mx-auto text-center relative z-10">

    {/* Badge */}
    {badgeTitle && (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-300/10 backdrop-blur-sm text-white text-sm font-medium border border-white/30"
      >
        <span className="w-2 h-2 bg-[#64D3F8] rounded-full animate-pulse"></span>
        {badgeTitle}
      </motion.span>
    )}

    {/* Main Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      className="text-3xl md:text-4xl font-bold text-white leading-tight px-4 mt-4"
    >
      {title}
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
      className="text-[#afb2b7] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4 mt-4"
    >
      {subTitle}
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8"
    >
      <Link href="/consultation">
        <GradientButton>{primaryBtnText}</GradientButton>
      </Link>

      <Link href="/join-us">
        <GradientButton variant="outline">{secondaryBtnText}</GradientButton>
      </Link>
    </motion.div>

  </div>
</div>
    );
};

export default CommonCTA2;
