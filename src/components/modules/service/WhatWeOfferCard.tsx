
// "use client"
// import React from 'react';
// import { DynamicLucideIcon } from '../shared/dynamicIcon/DynamicLucideIcon';
// import { IFeature } from '@/types';
// import { motion } from "framer-motion"

// interface ServiceCardProps {
//     feature: IFeature;
//     index: number;
// }

// export const WhatWeOfferCard: React.FC<ServiceCardProps> = ({ feature, index }) => {
//     return (
//         <motion.div
//              initial={{ opacity: 0, y: 70 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                     delay: index * 0.3,
//                     duration: 1,
//                     y: {
//                         delay: 0.2,
//                         duration: 1,
//                         ease: "easeOut",
//                     },
//                 }}
//             className={``}
//         >
//             <div className='relative bg-[#001539] p-8 rounded-xl shadow-sm hover:shadow-2xl 
//                 hover:shadow-[#64D3F8]/20 transition-all duration-300 border border-[#00204745] 
//                 hover:border-[#64D3F8] group flex items-center justify-center flex-col h-full
//                 overflow-hidden cursor-pointer'>
//             {/* Animated gradient background on hover */}
//             <div className="absolute inset-0 bg-linear-to-br from-[#64D3F8]/0 via-[#64D3F8]/0 to-[#64D3F8]/0 
//                 group-hover:from-[#64D3F8]/5 group-hover:via-[#64D3F8]/10 group-hover:to-[#64D3F8]/5 
//                 transition-all duration-500 rounded-xl" />
            
//             {/* Animated corner accents */}
//             <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-[#64D3F8]/0 
//                 group-hover:from-[#64D3F8]/20 transition-all duration-500 rounded-xl" />
//             <div className="absolute bottom-0 left-0 w-20 h-20 bg-linear-to-tr from-[#64D3F8]/0 
//                 group-hover:from-[#64D3F8]/20 transition-all duration-500 rounded-xl" />
            
//             {/* Glowing border effect */}
//             <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
//                 transition-opacity duration-500 pointer-events-none"
//                 style={{
//                     background: 'linear-gradient(45deg, transparent 30%, rgba(100, 211, 248, 0.1) 50%, transparent 70%)',
//                     backgroundSize: '200% 200%',
//                     animation: 'gradient-shift 3s ease infinite',
//                 }}
//             />

//             <div className="relative z-10 flex flex-col items-center justify-center h-full">
//                 {/* Icon container with enhanced animations */}
//                 <motion.div 
//                     whileHover={{ 
//                         scale: 1.15,
//                         rotate: [0, -5, 5, -5, 0],
//                         transition: { duration: 0.5 }
//                     }}
//                     className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 
//                         group-hover:bg-linear-to-br group-hover:from-white group-hover:to-[#64D3F8]/10
//                         transition-all duration-500 shadow-lg group-hover:rounded-xl group-hover:shadow-[#64D3F8]/30
//                         relative overflow-hidden"
//                 >
//                     {/* Icon background shimmer */}
//                     <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent 
//                         -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
//                     <div className="text-[#4D5CAC] relative z-10 group-hover:text-[#64D3F8] transition-colors duration-300">
//                         <DynamicLucideIcon
//                             iconName={feature.icon}
//                             size={26}
//                         />
//                     </div>
//                 </motion.div>

//                 {/* Title with gradient effect on hover */}
//                 <h3 className="text-lg font-bold text-white mb-3 transition-all duration-300
//                     group-hover:text-[#64D3F8] group-hover:scale-105 text-center">
//                     {feature.title}
//                 </h3>

//                 {/* Description with enhanced readability on hover */}
//                 <p className="text-white/80 mb-6 text-sm leading-relaxed text-center
//                     group-hover:text-white transition-all duration-300">
//                     {feature.description}
//                 </p>

//                 {/* Bottom accent line */}
//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r 
//                     from-transparent via-[#64D3F8] to-transparent scale-x-0 
//                     group-hover:scale-x-100 transition-transform duration-500 origin-center" />
//             </div>

//             <style jsx>{`
//                 @keyframes gradient-shift {
//                     0%, 100% { background-position: 0% 50%; }
//                     50% { background-position: 100% 50%; }
//                 }
//             `}</style>
//             </div>
//         </motion.div>
//     );
// };
// -----------------------------------------------
// "use client"
// import React from 'react';
// import { DynamicLucideIcon } from '../shared/dynamicIcon/DynamicLucideIcon';
// import { IFeature } from '@/types';
// import { motion } from "framer-motion"

// interface ServiceCardProps {
//     feature: IFeature;
//     index: number;
// }

// export const WhatWeOfferCard: React.FC<ServiceCardProps> = ({ feature, index }) => {

//     return (
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                     delay: index * 0.15,
//                     duration: 0.5,
//                     y: {
//                         delay: 0,
//                         duration: 0.3,
//                         ease: "easeOut",
//                     },
//                 }}
//                 className={`bg-[#9177770f] p-8 rounded-xl shadow-sm hover:shadow-2xl 
//              transition-shadow duration-300 border border-[#00204745]  hover:border-[#64D3F8]
//              group flex flex-col h-full`}
//             >
//                 <div className="w-14 h-14 bg-linear-to-br from-[#DCE1F0] to-[#DCF3FC] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                     <div className="text-[#4D5CAC] group-hover:text-[#64D3F8]">
//                         <DynamicLucideIcon
//                             iconName={feature.icon}
//                             size={26}
//                         />
//                     </div>
//                 </div>

//                 <h3 className="text-lg font-bold text-[#002047] mb-3 transition-colors">
//                     {feature.title}
//                 </h3>

//                 <p className="text-[#65758B] mb-6 text-sm leading-relaxed">
//                     {feature.description}
//                 </p>

//             </motion.div>
//     );
// };

// --------------------------------------------------

"use client";

import { motion } from "framer-motion";
import { DynamicLucideIcon } from "../shared/dynamicIcon/DynamicLucideIcon";
import { IFeature } from "@/types";

interface ServiceCardProps {
  feature: IFeature;
  index: number;
}

export const WhatWeOfferCard = ({ feature, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.3,
        duration: 1,
        y: {
          delay: 0.2,
          duration: 1,
          ease: "easeOut",
        },
      }}
    >
      <div
        className={`
          relative bg-[#001539] p-8 rounded-xl shadow-sm
          hover:shadow-2xl hover:shadow-[#64D3F8]/20
          transition-all duration-300
          border border-[#00204745] hover:border-[#64D3F8]
          group flex items-center justify-center flex-col h-full
          overflow-hidden cursor-pointer
        `}
      >
        {/* Animated gradient background on hover */}
        <div
          className={`
            absolute inset-0 rounded-xl
            bg-gradient-to-br
            from-[#64D3F8]/0 via-[#64D3F8]/0 to-[#64D3F8]/0
            group-hover:from-[#64D3F8]/5
            group-hover:via-[#64D3F8]/10
            group-hover:to-[#64D3F8]/5
            transition-all duration-500
          `}
        />

        {/* Top-right corner accent */}
        <div
          className={`
            absolute top-0 right-0 w-20 h-20 rounded-xl
            bg-gradient-to-bl from-[#64D3F8]/0
            group-hover:from-[#64D3F8]/20
            transition-all duration-500
          `}
        />

        {/* Bottom-left corner accent */}
        <div
          className={`
            absolute bottom-0 left-0 w-20 h-20 rounded-xl
            bg-gradient-to-tr from-[#64D3F8]/0
            group-hover:from-[#64D3F8]/20
            transition-all duration-500
          `}
        />

        {/* Glowing / animated shimmer overlay */}
        <div
          className={`
            absolute inset-0 rounded-xl opacity-0
            group-hover:opacity-100 transition-opacity duration-500
            pointer-events-none
          `}
          style={{
            background:
              "linear-gradient(45deg, transparent 30%, rgba(100, 211, 248, 0.16) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
            animation: "gradient-shift 3s ease infinite",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Icon */}
          <motion.div
            whileHover={{
              scale: 1.15,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 },
            }}
            className={`
              w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6
              group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-[#64D3F8]/10
              transition-all duration-500 shadow-lg
              group-hover:rounded-xl group-hover:shadow-[#64D3F8]/30
              relative overflow-hidden
            `}
          >
            {/* Shimmer effect on icon hover */}
            <div
              className={`
                absolute inset-0 bg-gradient-to-r
                from-transparent via-white/20 to-transparent
                -translate-x-full group-hover:translate-x-full
                transition-transform duration-1000
              `}
            />

            <div className="text-[#4D5CAC] relative z-10 group-hover:text-[#64D3F8] transition-colors duration-300">
              <DynamicLucideIcon iconName={feature.icon} size={26} />
            </div>
          </motion.div>

          {/* Title */}
          <h3
            className={`
              text-lg font-bold text-white mb-3
              transition-all duration-300
              group-hover:text-[#64D3F8] group-hover:scale-105
              text-center
            `}
          >
            {feature.title}
          </h3>

          {/* Description */}
          <p
            className={`
              text-white/80 mb-6 text-sm leading-relaxed text-center
              group-hover:text-white transition-all duration-300
            `}
          >
            {feature.description}
          </p>

          {/* Bottom line accent */}
          <div
            className={`
              absolute bottom-0 left-0 right-0 h-1
              bg-gradient-to-r from-transparent via-[#64D3F8] to-transparent
              scale-x-0 group-hover:scale-x-100
              transition-transform duration-500 origin-center
            `}
          />
        </div>
      </div>
    </motion.div>
  );
};