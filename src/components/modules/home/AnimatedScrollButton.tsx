"use client"
import { motion } from "framer-motion"

const AnimatedScrollButton = () => {
    const scrollToServices = () => {
        const servicesSection = document.getElementById('servicesSection');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex justify-center pb-16">
            <button
                onClick={scrollToServices}
                className="relative group focus:outline-none cursor-pointer"
                aria-label="Scroll to services"
            >
                <div className="w-6 h-10 rounded-2xl border-2 border-gray-300 flex items-center justify-center bg-white shadow-lg hover:shadow-xl transition-all group-hover:border-blue-400">

                    <motion.div
                        animate={{ y: [4, -7, 4] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="w-1 h-2 bg-[#64D3F8] rounded-3xl"></div>
                    </motion.div>

                </div>
            </button>
        </div>
    );
};

export default AnimatedScrollButton;
