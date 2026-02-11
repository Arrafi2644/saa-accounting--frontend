"use client"

import { motion } from "framer-motion"
import Link from "next/link";
import { PrimaryButton } from "../shared/button/PrimaryButton";
import { SecondaryButton } from "../shared/button/SecondaryButton";
import Image from "next/image";
import ctaBg from "../../../../public/assets/cta-bg-image.png"
import GradientButton from "../shared/button/GradiantButton";



const CTASection = () => {
    return (
        <div className="w-full relative py-20 px-4 sm:px-6 lg:px-8">
        {/* Background */}
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
      
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-white leading-tight px-4"
          >
            Be Our Next Success Story.
          </motion.h2>
      
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-[#afb2b7] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4 mt-6"
          >
            Join 500+ businesses across New Zealand who trust SAA for their financial success.
          </motion.p>
      
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8"
          >
            <Link href="/join-us">
              <GradientButton>Start Your Registration</GradientButton>
            </Link>
      
            <Link href="/contact">
              <GradientButton variant="outline">Read Our Services</GradientButton>
            </Link>
          </motion.div>
      
        </div>
      </div>
      
    );
};

export default CTASection;