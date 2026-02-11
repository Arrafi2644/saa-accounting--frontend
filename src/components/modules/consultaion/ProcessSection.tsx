// "use client";

// import React from "react";
// import { motion, Variants } from "framer-motion";
// import { Calendar, CheckCircle, Users } from "lucide-react";
// import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";

// interface ProcessStep {
//     id: number;
//     title: string;
//     description: string;
//     icon: React.ReactNode;
// }

// const processSteps: ProcessStep[] = [
//     {
//         id: 1,
//         title: "Pick a Time",
//         description:
//             "Select a convenient slot that works for your schedule using our booking calendar.",
//         icon: <Calendar className="w-8 h-8" />,
//     },
//     {
//         id: 2,
//         title: "Get Confirmed",
//         description:
//             "Receive an instant email confirmation with meeting details and preparation tips.",
//         icon: <CheckCircle className="w-8 h-8" />,
//     },
//     {
//         id: 3,
//         title: "Expert Advice",
//         description:
//             "Connect with our senior accountants for personalized guidance and solutions.",
//         icon: <Users className="w-8 h-8" />,
//     },
// ];

// const ProcessSection = () => {
//     const containerVariants: Variants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2,
//                 delayChildren: 0.1,
//             },
//         },
//     };

//     const itemVariants: Variants = {
//         hidden: { opacity: 0, y: 30 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.6,
//                 ease: [0.22, 1, 0.36, 1] as const,
//             },
//         },
//     };

//     const lineVariants: Variants = {
//         hidden: { scaleX: 0 },
//         visible: {
//             scaleX: 1,
//             transition: {
//                 duration: 0.8,
//                 ease: "easeInOut",
//                 delay: 0.5,
//             },
//         },
//     };

//     return (
//         <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}

//                 <AnimatedSectionHeader
//                     tag="SIMPLE PROCESS"
//                     heading="What to Expect"
//                 />

//                 {/* Process Steps */}
//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                     className="relative"
//                 >
//                     {/* Desktop and Tablet View (horizontal layout) */}
//                     <div className="hidden md:block">
//                         <div className="grid grid-cols-3 gap-8 lg:gap-16 relative">
//                             {/* Connecting Lines */}
//                             <div className="absolute top-[90px] left-0 right-0 flex items-center justify-between px-[15%] pointer-events-none">
//                                 <motion.div
//                                     variants={lineVariants}
//                                     className="h-0.5 bg-gradient-to-r from-[#4F61B3] to-[#53C9F4] origin-left"
//                                     style={{ width: "calc(50% - 80px)" }}
//                                 />
//                                 <motion.div
//                                     variants={lineVariants}
//                                     className="h-0.5 bg-gradient-to-r from-[#4F61B3] to-[#53C9F4] origin-left"
//                                     style={{ width: "calc(50% - 80px)" }}
//                                 />
//                             </div>

//                             {processSteps.map((step, index) => (
//                                 <motion.div
//                                     key={step.id}
//                                     variants={itemVariants}
//                                     className="flex flex-col items-center text-center relative z-10 group"
//                                 >
//                                     {/* Circle with Icon */}
//                                     <motion.div
//                                         className="relative mb-6"
//                                         whileHover={{ scale: 1.05 }}
//                                         transition={{ duration: 0.3 }}
//                                     >
//                                         {/* Outer Circle with Gradient Border */}
//                                         <div className="w-40 h-40 lg:w-44 lg:h-44 rounded-full bg-gradient-to-tl from-[#53C9F4] to-[#4F61B3] p-1 shrink-0 group-hover:shadow-[0_0_20px_rgba(83,201,244,0.6)] transition-all duration-500">
//                                             {/* Inner White Circle */}
//                                             <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center relative overflow-hidden">
//                                                 {/* Icon */}
//                                                 <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#53C9F4] to-[#4F61B3]">
//                                                     {step.icon}
//                                                 </div>
//                                                 {/* Number */}
//                                                 <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#53C9F4] to-[#4F61B3]">
//                                                     {step.id}
//                                                 </div>

//                                                 {/* Hover Gradient Overlay */}
//                                                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-cyan-50/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
//                                             </div>
//                                         </div>
//                                     </motion.div>

//                                     {/* Title */}
//                                     <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
//                                         {step.title}
//                                     </h3>

//                                     {/* Description */}
//                                     <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-xs">
//                                         {step.description}
//                                     </p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Mobile View (vertical layout) */}
//                     <div className="md:hidden space-y-12">
//                         {processSteps.map((step, index) => (
//                             <motion.div
//                                 key={step.id}
//                                 variants={itemVariants}
//                                 className="relative group"
//                             >
//                                 <div className="flex flex-col items-center text-center">
//                                     {/* Circle with Icon */}
//                                     <motion.div
//                                         className="relative mb-6"
//                                         whileHover={{ scale: 1.05 }}
//                                         transition={{ duration: 0.3 }}
//                                     >
//                                         {/* Outer Circle with Gradient Border */}
//                                         <div className="w-36 h-36 rounded-full bg-gradient-to-tl from-[#53C9F4] to-[#4F61B3] p-1 shrink-0 group-hover:shadow-[0_0_20px_rgba(83,201,244,0.6)] transition-all duration-500">
//                                             {/* Inner White Circle */}
//                                             <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center relative overflow-hidden">
//                                                 {/* Icon */}
//                                                 <div className="text-transparent bg-clip-text bg-gradient-to-t from-[#53C9F4] to-[#4F61B3] mb-2 group-hover:scale-110 transition-transform duration-300">
//                                                     {step.icon}
//                                                 </div>
//                                                 {/* Number */}
//                                                 <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#53C9F4] to-[#4F61B3]">
//                                                     {step.id}
//                                                 </div>

//                                                 {/* Hover Gradient Overlay */}
//                                                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-cyan-50/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
//                                             </div>
//                                         </div>
//                                     </motion.div>

//                                     {/* Title */}
//                                     <h3 className="text-2xl font-bold text-slate-900 mb-3">
//                                         {step.title}
//                                     </h3>

//                                     {/* Description */}
//                                     <p className="text-slate-600 text-base leading-relaxed max-w-sm px-4">
//                                         {step.description}
//                                     </p>
//                                 </div>

//                                 {/* Connecting Line for Mobile (except last item) */}
//                                 {index < processSteps.length - 1 && (
//                                     <motion.div
//                                         initial={{ scaleY: 0 }}
//                                         animate={{ scaleY: 1 }}
//                                         transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
//                                         className="w-0.5 h-12 bg-linear-to-b from-[#4F61B3] to-[#53C9F4] mx-auto mt-8 origin-top"
//                                     />
//                                 )}
//                             </motion.div>
//                         ))}
//                     </div>
//                 </motion.div>

//             </div>
//         </section>
//     );
// };

// export default ProcessSection;

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, CheckCircle, Users } from "lucide-react";
import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";

interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
    {
        id: 1,
        title: "Pick a Time",
        description:
            "Select a convenient slot that works for your schedule using our booking calendar.",
        icon: <Calendar className="w-8 h-8" />,
    },
    {
        id: 2,
        title: "Get Confirmed",
        description:
            "Receive an instant email confirmation with meeting details and preparation tips.",
        icon: <CheckCircle className="w-8 h-8" />,
    },
    {
        id: 3,
        title: "Expert Advice",
        description:
            "Connect with our senior accountants for personalized guidance and solutions.",
        icon: <Users className="w-8 h-8" />,
    },
];

const ProcessSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    const lineVariants: Variants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.8,
            },
        },
    };

    return (
        <section className="w-full bg-white py-20 xl:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}

                <AnimatedSectionHeader
                    tag="SIMPLE PROCESS"
                    heading="What to Expect"
                />

                {/* Process Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                >
                    {/* Desktop and Tablet View (horizontal layout) */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-3 gap-8 lg:gap-16 relative">
                            {/* Connecting Lines */}
                            <div className="absolute top-[90px] left-0 right-0 flex items-center justify-between px-[15%] pointer-events-none">
                                <motion.div
                                    variants={lineVariants}
                                    className="h-0.5 bg-linear-to-r from-[#4F61B3] to-[#53C9F4] origin-left"
                                    style={{ width: "calc(50% - 80px)" }}
                                />
                                <motion.div
                                    variants={lineVariants}
                                    className="h-0.5 bg-linear-to-r from-[#4F61B3] to-[#53C9F4] origin-left"
                                    style={{ width: "calc(50% - 80px)" }}
                                />
                            </div>

                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    variants={itemVariants}
                                    className="flex flex-col items-center text-center relative z-10 group"
                                >
                                    {/* Circle with Icon */}
                                    <motion.div
                                        className="relative mb-8"
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Outer Circle with Gradient Border */}
                                        <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-linear-to-tl overflow-hidden from-[#53C9F4] to-[#4F61B3] p-1 shrink-0 group-hover:shadow-[0_0_20px_rgba(83,201,244,0.6)] transition-all duration-500">
                                            {/* Inner White Circle */}
                                            <div className="w-full h-full scale-98 group-hover:scale-102 transition-all duration-500 bg-white rounded-full flex flex-col items-center justify-center relative overflow-hidden">
                                                {/* Icon */}
                                                <div className="text-[#53C9F4] mb-2 ">
                                                    {step.icon}
                                                </div>
                                                {/* Number */}
                                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-t from-[#53C9F4] to-[#4F61B3]">
                                                    {step.id}
                                                </div>

                                                {/* Hover Gradient Overlay */}
                                                <div className="absolute inset-0 bg-linear-to-br from-cyan-50/0 via-cyan-50/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-xs">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile View (vertical layout) */}
                    <div className="md:hidden space-y-12">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                variants={itemVariants}
                                className="relative group"
                            >
                                <div className="flex flex-col items-center text-center">
                                    {/* Circle with Icon */}
                                    <motion.div
                                        className="relative mb-6"
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        {/* Outer Circle with Gradient Border */}
                                        <div className="w-36 h-36 rounded-full bg-linear-to-tl from-[#53C9F4] to-[#4F61B3] p-1 shrink-0 group-hover:shadow-[0_0_20px_rgba(83,201,244,0.6)] transition-all duration-500">
                                            {/* Inner White Circle */}
                                            <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center relative overflow-hidden">
                                                {/* Icon */}
                                                <div className="text-[#53C9F4] mb-2 group-hover:scale-110 transition-transform duration-300">
                                                    {step.icon}
                                                </div>
                                                {/* Number */}
                                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-t from-[#53C9F4] to-[#4F61B3]">
                                                    {step.id}
                                                </div>

                                                {/* Hover Gradient Overlay */}
                                                <div className="absolute inset-0 bg-linear-to-br from-cyan-50/0 via-cyan-50/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 text-base leading-relaxed max-w-sm px-4">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connecting Line for Mobile (except last item) */}
                                {index < processSteps.length - 1 && (
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                                        className="w-0.5 h-12 bg-linear-to-b from-[#4F61B3] to-[#53C9F4] mx-auto mt-8 origin-top"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessSection;