"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image";
import { JSX, useEffect, useRef, useState } from "react";
import { Building2, Calendar, Users } from "lucide-react";
import whyWeAreImage from "../../../../public/assets/your-partner-section.jpeg"
import { GlaceGlaceForTagline } from "./HeroTextAnimation";

// --- Helper for staggered animation delays ---
const staggerDelays = {
    tag: 0.3,
    heading: 0.5,
    para1: 0.7,
    para2: 0.85,
    para3: 1.0,
};

type StatItem = {
    label: string;
    value: number;
    icon: React.ComponentType<{ className?: string; size?: number }>;
};

const stats: StatItem[] = [
    {
        label: "Years in Business",
        value: 12,
        icon: Calendar,
    },
    {
        label: "Clients Served",
        value: 500,
        icon: Users,
    },
    {
        label: "Industries Covered",
        value: 15,
        icon: Building2,
    },
];
function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
    })
    useEffect(() => {
        if (!isInView) return
        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0
        const timer = setInterval(() => {
            current += increment
            if (current >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, duration / steps)
        return () => clearInterval(timer)
    }, [isInView, value])
    return (
        <span ref={ref}>
            {count.toLocaleString()}
            {suffix}
        </span>
    )
}

export function WhoWeAreClient(): JSX.Element {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Right Column */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } },
                }}
                className=""
            >
                {/* Tag */}
                <motion.span
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: staggerDelays.tag, ease: "easeOut" }}
                    className="inline-block text-white font-medium text-sm rounded-tl-2xl rounded-br-2xl bg-linear-to-r from-blue-600 to-[#56CCF4]"
                >
                    <GlaceGlaceForTagline>
                        <p className="py-2 px-6">
                            WHO WE ARE
                        </p>
                    </GlaceGlaceForTagline>
                </motion.span>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: staggerDelays.heading, ease: "easeOut" }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002047] mt-4 mb-6"
                >
                    Your Partner in Financial Confidence
                </motion.h2>

                {/* Paragraph 1 */}
                <motion.p
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: staggerDelays.para1, ease: "easeOut" }}
                    className="text-lg mb-6 text-[#002047]"
                >
                    <span className="font-bold">We are the experts in what we do.</span> An easier way to get your business accounting done for you.
                </motion.p>

                {/* Paragraph 2 */}
                <motion.p
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: staggerDelays.para2, ease: "easeOut" }}
                    className="text-black mb-6 leading-relaxed"
                >
                    Since 2013, SAA Accounting Services Limited has been helping business owners manage their accounting with confidence and ease. We understand that not every business owner has the time or expertise to handle bookkeeping — and why should you? You are focused on growing your business, not managing the numbers.
                </motion.p>

                {/* Paragraph 3 */}
                <motion.p
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: staggerDelays.para3, ease: "easeOut" }}
                    className="text-black mb-8 leading-relaxed"
                >
                    Thats where we come in. At SAA, we simplify the accounting process and provide reliable, affordable solutions tailored specifically for small to medium-sized businesses.
                </motion.p>

                {/* Paragraph 4 */}
                <motion.p
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: staggerDelays.para3 + 0.15, ease: "easeOut" }}
                    className="text-black mb-8 leading-relaxed"
                >
                    We use the latest accounting technologies, including Xero and MYOB, to efficiently and securely manage your business finances. Our systems streamline and automate data collection, ensuring accuracy, transparency, and peace of mind — so you can focus on what you do best.
                </motion.p>

                {/* <div className="grid grid-cols-3 gap-8 border-t pt-10 mt-10">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-center"
                            >
                                <div className="w-12 h-12 relative rounded-md bg-[#E9F6FA] mx-auto mb-3">
                                    <Icon size={24} className="  text-[#64D3F8] absolute translate-x-1/2 translate-y-1/2" />
                                </div>
                                <div className="text-3xl font-bold text-[#002047] mb-1">
                                    <span className="text-2xl md:text-3xl font-bold text-[#002047]">

                                        <Counter value={stat.value} suffix="+" />

                                    </span>

                                </div>
                                <div className="text-sm  text-[#65758B]">{stat.label}</div>
                            </motion.div>
                        );
                    })}
                </div> */}
            </motion.div>

            {/* Left Column */}
            <motion.div
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.5,
                    ease: "easeOut",
                }}

                className="relative h-[300px] lg:h-[500px] z-0"
            >
                <Image
                    src={whyWeAreImage}
                    alt="SAA Accounting Services team providing professional bookkeeping and financial advisory support to businesses"
                    fill
                    className="object-cover rounded-xl"
                />

            </motion.div>



        </div>
    );
}