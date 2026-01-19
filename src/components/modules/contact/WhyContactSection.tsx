"use client"

import { MonitorPlay, Users, Zap } from "lucide-react";
import { FeatureCard } from "./FeatureCard";
import {motion} from "framer-motion"

export default function WhyContactSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#002047]">
            Why Contact{' '}
            <span className="text-[#4D5CAC]">SAA Accounting</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-cyan-500" />}
            title="Fast Response"
            description="We aim to respond to all inquiries within 24 business hours."
            delay={0}
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-cyan-500" />}
            title="Expert Advice"
            description="Speak directly with experienced accountants like Shalini."
            delay={0.15}
          />
          <FeatureCard
            icon={<MonitorPlay className="w-8 h-8 text-cyan-500" />}
            title="Virtual Friendly"
            description="Fully equipped for Zoom, Teams, and remote MYOB/Xero training."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}