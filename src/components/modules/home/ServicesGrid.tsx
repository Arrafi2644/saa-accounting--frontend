"use client"

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "./ServiceCard";
import { IService } from "@/types";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { GlaceGlaceForTagline } from "./HeroTextAnimation";

// --- Helper for staggered animation delays ---
const staggerDelays = {
  tag: 0.3,
  heading: 0.5,
  para: 0.7,
};

type Props = {
  services: IService[];
};

export function ServicesGrid({ services }: Props) {

  return (
    <section className="py-20 md:28 lg:py-32 bg-[#EEEEEE] relative -mt-1 w-full" id="servicesSection">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Tag */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: staggerDelays.tag, ease: "easeOut" }}
            className="inline-block text-white font-medium text-sm  rounded-tl-2xl rounded-br-2xl bg-linear-to-r from-blue-600 to-[#56CCF4]"
          >
            <GlaceGlaceForTagline>
              
            <p className="py-2 px-6">
            OUR SERVICES
            </p>
            </GlaceGlaceForTagline>
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: staggerDelays.heading, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002047] mb-6 mt-4"
          >
            Our Core Services
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: staggerDelays.para, ease: "easeOut" }}
            className="text-[#002047] text-lg"
          >
            From compliance to growth strategy, we provide the tailored support your business needs to thrive.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {services.map((service: IService, index: number) => (
            <ServiceCard
              key={service._id}
              service={service}
              index={index}
            />
          ))}
        </div>

        <div className="flex items-center justify-center mt-12">
          <Link href="/services">
            {/* <Button className="cursor-pointer bg-linear-to-r from-[#4E60AF] min-h-0 flex min-w-0 w-56 h-auto py-4 px-20 to-[#56C9F2] transition-all hover:scale-105 ease-in-out">View All Services <MoveRight className="w-4 h-4 arrow-animate" /></Button> */}
            <button className="simple-gradient-btn group px-8 py-4 text-[#002047] font-semibold text-sm flex items-center gap-2 overflow-hidden relative">
              <span className="relative z-10 flex items-center gap-2">
                View All Services
                <MoveRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </button>


          </Link>
        </div>
      </div>
    </section>
  );
}

