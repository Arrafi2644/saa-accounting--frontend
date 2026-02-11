
"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import {
  Users,
  Building2,
  Calendar,
  Verified
} from "lucide-react";
import GradientButton from "../shared/button/GradiantButton";
import { GlaceGlaceForTagline } from "./HeroTextAnimation";
import aboutImg1 from "../../../../public/assets/about-us-1.webp"
import aboutImg2 from "../../../../public/assets/saa-about-2.webp"
import Image from "next/image";

const features = [
  {
    text: "Years in Business",
    value: 12,
    icon: Calendar,
  },
  {
    text: "Clients Served",
    value: 500,
    icon: Users,
  },
  {
    text: "Industries Covered",
    value: 15,
    icon: Building2,
  },
  {
    text: "Trusted Partner",
    value: 4,
    icon: Verified
  }
];

function Counter({ value, suffix, delay = 0 }: { value: number; suffix: string; delay?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
  })
  useEffect(() => {
    if (!isInView) return
    let timeoutId: NodeJS.Timeout | null = null
    let timer: NodeJS.Timeout | null = null
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    timeoutId = setTimeout(() => {
      timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          if (timer) clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
    }, delay)
    return () => {
      if (timer) clearInterval(timer)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isInView, value, delay])
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function AboutUsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="container mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Section - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Experience Badge - Top Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, x: -150 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ duration: 1.3, ease: "easeOut" }}
                className="relative overflow-hidden h-full rounded-2xl group"
              >
                <div className="bg-[#0C2541] absolute z-10 h-full w-full group-hover:scale-110 transition-all duration-500 rounded-2xl p-6 lg:p-8 shadow-xl aspect-square flex flex-col items-center justify-center">
                </div>
                <div className=" absolute h-full w-full group-hover:scale-110 transition-all duration-500 rounded-2xl flex item-center justify-center flex-col gap-3 z-30">
                  <div className="text-white text-5xl lg:text-6xl font-bold text-center gr ">
                    12+
                  </div>
                  <div className="h-1 bg-white/30 w-16 my-3 mx-auto" />
                  <div className="text-white text-xs lg:text-sm font-semibold text-center uppercase tracking-wide">
                    Years of<br />Experiences
                  </div>
                </div>
                <div className="w-full h-full absolute group-hover:scale-105 transition-all duration-500 bg-[#163353] rounded-full z-20 -top-3/7">
                </div>
              </motion.div>

              {/* Top Right Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, x: 150 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
                className="relative h-60 lg:h-92 rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={aboutImg2}
                  alt="Team collaboration"
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </motion.div>

              {/* Bottom Left Image - Spans 2 columns */}
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.3, delay: 0.4, ease: "easeOut" }}
                className="relative h-48 lg:h-64 rounded-2xl overflow-hidden shadow-lg col-span-2 group"
              >
                <Image
                  src={aboutImg1}
                  alt="Professional team"
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </motion.div>
            </div>

          </div>

          {/* Right Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.3, delay: 0.1 }}

            className="relative space-y-5 lg:space-y-6">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.3, delay: 0.1 }}
              className="flex items-center gap-2"
            >

              <span className="text-white font-medium text-sm  rounded-tl-2xl rounded-br-2xl bg-linear-to-r from-blue-600 to-[#56CCF4]">
                <GlaceGlaceForTagline>
                  <p className="py-2 px-6">
                    WHO WE ARE
                  </p>
                </GlaceGlaceForTagline>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.3, delay: 0.2 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#002047] leading-tight"
            >
              Your Partner in Financial{" "}
              <span className="text-[#0b4d94]"> Confidence</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 70 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.3, delay: 0.3 }}
              className="text-gray-600 text-base leading-relaxed"
            >
              <span className="font-bold">We are the experts in what we do.</span> An easier way to get your business accounting done for you.
            </motion.p>
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 70 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.3, delay: 0.3 }}
              className="text-gray-600 text-base leading-relaxed"
            >
              Since 2013, SAA Accounting Services Limited has been helping business owners manage their accounting with confidence and ease. We understand that not every business owner has the time or expertise to handle bookkeeping — and why should you? You are focused on growing your business, not managing the numbers.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 70 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + (index * 0.1),
                      ease: "easeOut"
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="shrink-0 w-14 h-14 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                      <Icon className="text-[#2563EB] w-6 h-6" />
                    </div>
                    <div>
                      {/* <p className="text-xl font-bold">{feature.value}</p> */}
                      <span className="text-xl md:text-2xl  font-bold text-[#002047]">

                        <Counter value={feature.value} delay={0.5} suffix="+" />

                      </span>
                      <p className="text-black text-sm lg:text-base font-medium ">
                        {feature.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* More About Button */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.3, delay: 0.8 }}
              className="pt-4 flex items-center gap-4"
            >
              <GradientButton>More About</GradientButton>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}