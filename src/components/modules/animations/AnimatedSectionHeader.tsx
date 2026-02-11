"use client";

import { motion } from "framer-motion";
import { GlaceGlaceForTagline } from "../home/HeroTextAnimation";

interface AnimatedSectionHeaderProps {
  heading: string;
  tag?: string;
  subtitle?: string;
  headingColor?: string;   // optional dynamic color
  subtitleColor?: string;  // optional dynamic color
}

export default function AnimatedSectionHeader({
  heading,
  tag,
  subtitle,
  headingColor = "#002047",    // default dark blue
  subtitleColor = "text-gray-600", // default Tailwind gray
}: AnimatedSectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {/* Tag (optional) */}
      {tag && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="inline-block text-white font-medium text-sm rounded-tl-2xl rounded-br-2xl bg-gradient-to-r from-blue-600 to-[#56CCF4]"
        >
          <GlaceGlaceForTagline>
            <p className="py-2 px-6">{tag}</p>
          </GlaceGlaceForTagline>
        </motion.span>
      )}

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: tag ? 0.15 : 0,
          ease: "easeOut",
        }}
        style={{ color: headingColor }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold ${tag ? "mt-4" : ""}`}
      >
        {heading}
      </motion.h2>

      {/* Subtitle (optional) */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: tag ? 0.3 : 0.15,
            ease: "easeOut",
          }}
          style={{ color: typeof subtitleColor === "string" && subtitleColor.startsWith("#") ? subtitleColor : undefined }}
          className={`mt-4 text-base md:text-lg ${typeof subtitleColor === "string" && !subtitleColor.startsWith("#") ? subtitleColor : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
