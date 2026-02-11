"use client"
import { Award, Eye, Users } from "lucide-react";
import { MissionValueCard } from "./MissionValueCard";
import { GlaceGlaceForTagline, HeroTextAnimation } from "../home/HeroTextAnimation";
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";

export default function MissionValuesSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const values = [
        {
            icon: <Eye size={32} strokeWidth={2} />,
            title: 'Clarity',
            description:
                'Providing transparent, easy-to-understand financial insights that empower you to make informed decisions.',
        },
        {
            icon: <Award size={32} strokeWidth={2} />,
            title: 'Expertise',
            description:
                'Maintaining the highest standards of knowledge and compliance to deliver exceptional results.',
        },
        {
            icon: <Users size={32} strokeWidth={2} />,
            title: 'Partnership',
            description:
                'Working collaboratively to achieve your long-term goals and sustainable business growth.',
        },
    ];

    // --- Helper for staggered animation delays ---
    const staggerDelays = {
        tag: 0.3,
        heading: 0.5,
    };

    return (
        <section className="w-full bg-white py-20 xl:py-28 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <AnimatedSectionHeader 
                tag=" Our Foundation"
                heading="Our Mission & Values"
                />
                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {values.map((value, index) => (
                        <MissionValueCard
                            key={index}
                            icon={value.icon}
                            title={value.title}
                            description={value.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}