
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import GradientButton from '../shared/button/GradiantButton';
import ctaBg from "../../../../public/assets/cta-bg-image.png"

interface CTASectionProps {
  badge?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  features?: string[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const ConversionBanner: React.FC<CTASectionProps> = ({
  badge = 'Ready to Get Started?',
  title = 'Ready to Partner with an',
  highlightText = 'Expert Team?',
  subtitle = 'Join hundreds of successful business owners who trust SAA with their accounting and financial advisory needs.',
  features = [
    'No obligation',
    'Free initial consultation',
    'Response within 24 hours'
  ],
}) => {


  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <Image
        src={ctaBg}
        alt='CTA-Section-Background'
        fill
        className='absolute w-full h-full'
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              <span className="w-2 h-2 bg-[#64D3F8] rounded-full animate-pulse"></span>
              {badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {title}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#64D3F8] to-blue-400">
              {highlightText}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.4 }}
            className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            {/* Primary Button */}
            <Link href="/join-us">
              {/* <PrimaryButton>Start Your Registration</PrimaryButton> */}
              <GradientButton>Start Your Registration</GradientButton>
            </Link>
            <Link href="/consultation">
              {/* <SecondaryButton className='transition-colors duration-300 border-[#ffffff4d] hover:border-[#ACB1C5] bg-transparent hover:bg-transparent text-white hover:text-[#002047]'><span className='mr-1'><Phone /></span>Book A Consultation</SecondaryButton> */}
              <GradientButton variant='outline'>
                Book A Consultation
              </GradientButton>
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y:70 }}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-gray-300 text-sm"
          >
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <span className="flex items-center gap-1">
                  {feature}
                </span>
                {index < features.length - 1 && (
                  <span className="inline">•</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};