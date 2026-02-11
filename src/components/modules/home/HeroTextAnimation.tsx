"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeroTextAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

export const HeroTextAnimation: React.FC<HeroTextAnimationProps> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const HeroTextAnimationFromLeft: React.FC<HeroTextAnimationProps> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const HeroTextAnimationFromRight: React.FC<HeroTextAnimationProps> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const HeroTextAnimationFromTop: React.FC<HeroTextAnimationProps> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};


export const HeroTextAnimationFromScale: React.FC<HeroTextAnimationProps> = ({
  children,
  delay = 0.1,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  color?: string;
};

export default function GlassGlace({
  children,
  delay = 0.4,
  duration = 5,
  color = '#53C9F4',
}: Props) {
  return (
    <div className="relative inline-flex overflow-hidden isolate rounded-full ">
      <motion.span
        initial={{ x: -70, opacity: 0 }}
        animate={{
          x: [-70, -30, 295, 295],
          opacity: [0, 1, 1, 0],
          skewX: -30,
        }}
        transition={{
          duration,
          delay,
          ease: "easeInOut",
          times: [0, 1, 1],
        }}
        style={{
          background: `linear-gradient(
      90deg,
      transparent,
      ${color},
      transparent
    )`,
        }}
        className={`
          pointer-events-none
          absolute h-full top-0 left-0
          w-6
          bg-linear-to-r
          from-transparent via-[${color}] to-transparent
          z-20
          rounded-full
          
        `}

      />

      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}


export const GlaceGlaceForTagline = ({
  children,
  delay = 0.4,
  duration = 5,
}: Props) => {
  return (
    <motion.div
      className="relative inline-flex overflow-hidden isolate rounded-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.span
        variants={{
          hidden: {
            x: -70,
            opacity: 0,
          },
          visible: {
            x: [-70, -30, 250, 250],
            opacity: [0, 1, 1, 0],
            skewX: -30,
            transition: {
              duration,
              delay,
              ease: "easeInOut",
            },
          },
        }}
        className="
          pointer-events-none
          absolute top-0 left-0 h-full w-5
          bg-white/50
          z-20
          rounded-full
        "
      />

      <div className="relative z-0">
        {children}
      </div>
    </motion.div>
  );
};


type hoverProps = {
  children: ReactNode;
};

export const HoverGlass = ({ children }: hoverProps) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-md"
      whileHover="hover"
      initial="rest"
    >
      {/* Glace / Shine layer */}
      <motion.span
        variants={{
          rest: { x: -70, opacity: 0 },
          hover: {
            x: [-70, -30, 280, 280],
            opacity: [0, 1, 1, 0],
            skewX: -30,
          },

        }}

        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.1, 0.9, 1],
        }}
        className="
          pointer-events-none
          absolute top-0 left-0 h-full w-6
          bg-linear-to-r
          from-transparent via-[#53C9F4] to-transparent
          z-20
          rounded-full
        "
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
