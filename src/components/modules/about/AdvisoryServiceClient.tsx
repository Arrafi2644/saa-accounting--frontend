"use client"
import { motion } from "framer-motion"

const AdvisoryServiceClient = () => {
    return (<motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002065] mb-8 sm:mb-10 lg:mb-12 leading-tight px-4">
                Comprehensive Accounting and Advisory Services
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg lg:text-xl text-[#65758B] leading-relaxed max-w-5xl mx-auto px-4">
                    We are more than just accountants — we are your trusted partners in business growth. Our dedicated team
                    takes care of everything related to accounting, tax, and more. From setting up new businesses and
                    planning structures to company incorporations, tax registrations, tax planning, and growth analysis —
                    we ave got you covered.
                </p>

                <p className="text-base sm:text-lg lg:text-xl text-[#65758B] leading-relaxed max-w-5xl mx-auto px-4">
                    Our advisory services go beyond simply educating clients about their obligations. We focus on
                    sustainability, accountability, and growth — helping you build a business thats strong, compliant, and
                    future-ready. Simply put — we{`'`}re a great team, eager to help your business grow.
                </p>
            </div>
        </div>
    </motion.div>
    );
};

export default AdvisoryServiceClient;