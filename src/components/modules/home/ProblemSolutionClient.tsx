"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GradientButton from "../shared/button/GradiantButton";
import saaDifference from "../../../../public/assets/saa-difference-img.webp";
import { GlaceGlaceForTagline } from "./HeroTextAnimation";

// --- Helper for staggered animation delays ---
const staggerDelays = {
  tag: 0.3,
  heading: 0.6,
  para1: 0.75,
  para2: 0.9,
  feature1: 1.05,
  feature2: 1.1,
  feature3: 1.2,
  button: 1.4,
};

export function ProblemSolutionClient(): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="relative h-[360px] lg:h-[560px] z-0 group"
      >
        <div className="absolute h-full overflow-hidden w-full rounded-xl">
        <Image
          src={saaDifference}
          alt="SAA Accounting Services simplifying bookkeeping and compliance for small to medium-sized businesses"
          fill
          className="object-cover rounded-xl group-hover:scale-105 transition-all duration-500"
        />
        </div>
        <div className="h-16 w-16 bg-[#DCDEEF] rounded-lg absolute -left-4 -top-4 -z-10"></div>
        <div className="h-24 w-24 bg-[#D9F0F9] rounded-lg absolute -right-4 -bottom-4 -z-10"></div>
      </motion.div>

      {/* Right Column, all staggered with motion.div for sequential animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } }, // optional
        }}
        className=""
      >
        {/* Tag */}
        <motion.span
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: staggerDelays.tag, ease: "easeOut" }}
          className="inline-block text-white font-medium text-sm rounded-tl-2xl rounded-br-2xl bg-linear-to-r from-blue-600 to-[#56CCF4]"
        >
          <GlaceGlaceForTagline>
           <p className="py-2 px-6">
          THE SAA DIFFERENCE
           </p>
           </GlaceGlaceForTagline>
        </motion.span>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: staggerDelays.heading, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002047] mt-4 mb-6"
        >
          The Easier Way to Get <br className="hidden lg:block" /> Your Business <br className="hidden lg:block" /> Accounting Done
        </motion.h2>
        {/* Paragraphs */}
        <motion.p
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: staggerDelays.para1, ease: "easeOut" }}
          className="text-black mb-6 leading-relaxed"
        >
          Thats where we come in. At SAA, we simplify the accounting process and provide reliable, affordable solutions tailored specifically for small to medium-sized businesses.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: staggerDelays.para2, ease: "easeOut" }}
          className="text-black mb-8 leading-relaxed"
        >
          Since 2013, we have helped hundreds of New Zealand businesses navigate
          the complexities of the financial landscape with confidence and precision.
        </motion.p>

        {/* Features List, staggered */}
        <div className="flex flex-col items-start gap-3 text-base mt-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: staggerDelays.feature1, ease: "easeOut" }}
            className="flex items-start gap-3"
          >
            <div className="shrink-0 w-6 h-6 rounded-full ">
              <CircleCheckBig className="text-[#64D3F8]" strokeWidth={2} />
            </div>
            <span className=" text-[#002047] font-medium">
              No more late-night spreadsheets
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: staggerDelays.feature2, ease: "easeOut" }}
            className="flex items-start gap-3"
          >
            <div className="shrink-0 w-6 h-6 rounded-full ">
              <CircleCheckBig className="text-[#64D3F8]" strokeWidth={2} />
            </div>
            <span className=" text-[#002047] font-medium">
              Complete IRD compliance handled for you
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: staggerDelays.feature3, ease: "easeOut" }}
            className="flex items-start justify-center gap-3"
          >
            <div className="shrink-0 w-6 h-6 rounded-full">
              <CircleCheckBig className="text-[#64D3F8]" strokeWidth={2} />
            </div>
            <span className=" text-[#002047] font-medium">
              Real-time financial visibility
            </span>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: staggerDelays.button, ease: "easeOut" }}
        >
          <Link href="/about">
            <GradientButton>Read Our Full Story</GradientButton>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
