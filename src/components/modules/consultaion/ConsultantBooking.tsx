"use client";

import React, { useEffect } from 'react';
import AnimatedSectionHeader from '../animations/AnimatedSectionHeader';
import { motion } from "framer-motion"

export default function ConsultantBookingSection() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="w-full bg-[#FBFBFC] py-20 xl:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                <AnimatedSectionHeader
                    tag="BOOK NOW"
                    heading="Select a Time That Works for You"
                    subtitle="Use our interactive calendar to find and book your preferred consultation slot."
                />

                {/* Calendly Widget with Zoom Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        duration: 1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-200"
                >
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/saaaccounting/30min"
                        style={{
                            minWidth: '320px',
                            height: '700px',
                            width: '100%',
                        }}
                    ></div>
                </motion.div>
            </div>
        </section>
    );
}