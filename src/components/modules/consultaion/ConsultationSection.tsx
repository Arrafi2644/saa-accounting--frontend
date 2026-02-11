
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Phone, Video, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";

interface ConsultationOption {
  id: string;
  title: string;
  icon: React.ReactNode;
  schedule: string;
  location?: string;
  description: string;
  quote: string;
  color: string;
  iconBg: string;
  borderColor: string;
}

const consultationOptions: ConsultationOption[] = [
  {
    id: "phone",
    title: "Phone Call",
    icon: <Phone className="w-6 h-6 text-white" />,
    schedule: "Mon – Sat | 9:00 AM – 7:00 PM",
    description:
      "Get immediate answers to your accounting questions with a convenient phone consultation.",
    quote: "Quick, efficient, and direct.",
    color: "text-indigo-600",
    iconBg: "bg-indigo-600",
    borderColor: "#4f46e5",
  },
  {
    id: "zoom",
    title: "Zoom Online",
    icon: <Video className="w-6 h-6 text-white" />,
    schedule: "Wednesdays Only | 9:00 AM – 5:00 PM",
    description:
      "Perfect for detailed discussions, software demonstrations, and document reviews.",
    quote: "Screen-sharing and deep software training.",
    color: "text-cyan-500",
    iconBg: "bg-cyan-500",
    borderColor: "#06b6d4",
  },
  {
    id: "face-to-face",
    title: "Face-to-Face",
    icon: <MapPin className="w-6 h-6 text-white" />,
    schedule: "Thursdays Only",
    location: "Auckland Office / Maraetai",
    description:
      "Meet in person for comprehensive business discussions and strategic planning sessions.",
    quote: "Personal connection and detailed planning.",
    color: "text-amber-500",
    iconBg: "bg-amber-500",
    borderColor: "#f59e0b",
  },
];

const ConsultationSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="w-full bg-white py-20 xl:py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <AnimatedSectionHeader
          tag="YOUR PREFERRED METHOD"
          heading="Choose Your Experience"
          subtitle="Select the consultation style that works best for your schedule and needs."
        />

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {consultationOptions.map((option, index) => (
        <motion.div
        key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            className=" rounded-xl "
            >
              <Card
              key={index}
                className="h-full border-2 py-0 transition-all  hover:shadow-[0_0_20px_#CBEEFB] duration-500 overflow-hidden relative group"
                style={{
                  borderColor: 'rgb(226, 232, 240)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = option.borderColor;
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgb(226, 232, 240)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    className={`${option.iconBg} w-16 h-16 group-hover:scale-110 duration-500 transition-all rounded-2xl flex items-center justify-center mb-6 shadow-md`}

                  >
                    {option.icon}
                  </motion.div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold ${option.color} mb-4  transition-transform duration-300`}
                  >
                    {option.title}
                  </h3>

                  {/* Schedule */}
                  <div className="flex items-start gap-2 text-[#6970C0] mb-2">
                    <Clock className="w-4 h-4 shrink-0 text-[#6970C0]" />
                    <p className="text-sm font-medium">{option.schedule}</p>
                  </div>

                  {/* Location (if exists) */}
                  {option.location && (
                    <div className="flex items-start gap-2 text-black mb-4">
                      <MapPin className="w-4 h-4 mt-1 shrink-0 text-black" />
                      <p className="text-sm font-medium">{option.location}</p>
                    </div>
                  )}

                  {!option.location && <div className="mb-4" />}

                  {/* Description */}
                  <p className="text-black text-sm leading-relaxed mb-6 grow">
                    {option.description}
                  </p>

                  {
                    option?.quote &&
                    <motion.div
                      className="pt-4 border-t border-slate-200"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-black italic text-sm">
                        {option.quote}
                      </p>
                    </motion.div>
                  }

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={{ opacity: 0 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ConsultationSection;