
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// interface ProcessStepItemProps {
//   stepNumber: number;
//   title: string;
//   description: string;
//   index: number;
//   isLast?: boolean;
// }

// export const ProcessStepItem: React.FC<ProcessStepItemProps> = ({
//   stepNumber,
//   title,
//   description,
//   index,
//   isLast
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         delay: index * 0.15,
//         duration: 0.5,
//       }}
//       className="relative flex gap-8 pb-8 last:pb-0 group"
//     >
//       {/* Timeline Line and Icon */}
//       <div className="relative flex flex-col items-center group-hover:scale-105 transition-all duration-500">
//         <div className="w-20 h-20 rounded-full bg-linear-to-tl from-[#53C9F4] to-[#4F61B3] p-1 shrink-0 z-10
//           group-hover:shadow-[0_0_10px_rgba(83,201,244,0.5)] transition-all duration-500">
//           <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
//             <span className="text-transparent font-bold text-xl md:text-2xl bg-clip-text bg-linear-to-t from-[#53C9F4] to-[#4F61B3]">
//               {stepNumber}
//             </span>
//           </div>
//         </div>

//         {/* Vertical Line - Hidden for last item */}
//         {!isLast && (
//           <div className="absolute bg-linear-to-t to-[#4F61B3] via-[#53C9F4] from-[#4F61B3] top-14 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+2rem)]" />
//         )}
//       </div>

//       {/* Content with Border */}
//       <div className="relative flex-1 rounded-xl p-0.5 bg-linear-to-r from-[#53C9F4] to-[#4F61B3]
//         transition-all duration-500">

//                   {/* group-hover:shadow-[0_0_0_1px_rgba(83,201,244,0.5),0_0_10px_rgba(83,201,244,0.4),0_0_40px_rgba(83,201,244,0.2)] */}

        
//         {/* Animated gradient background on hover */}
//         <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#53C9F4]/0 via-[#53C9F4]/0 to-[#4F61B3]/0 
//           group-hover:from-[#53C9F4]/10 group-hover:via-[#53C9F4]/5 group-hover:to-[#4F61B3]/10 
//           transition-all duration-500 pointer-events-none" />
        
//         {/* Corner accents */}
//         <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-[#53C9F4]/0 
//           group-hover:from-[#53C9F4]/20 transition-all duration-500 rounded-xl pointer-events-none" />
//         <div className="absolute bottom-0 left-0 w-20 h-20 bg-linear-to-tr from-[#4F61B3]/0 
//           group-hover:from-[#4F61B3]/20 transition-all duration-500 rounded-xl pointer-events-none" />
        
//         {/* Glowing border effect */}
//         <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
//           transition-opacity duration-500 pointer-events-none"
//           style={{
//             background: 'linear-gradient(45deg, transparent 30%, rgba(83,201,244,0.15) 50%, transparent 70%)',
//             backgroundSize: '200% 200%',
//             animation: 'gradient-shift 3s ease infinite',
//           }}
//         />
// <div className="relative flex-1 rounded-xl overflow-hidden bg-white shadow-sm transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-blue-200/40">

//   <div 
//     className="
//       absolute inset-0 bg-[#68CEF6] 
//       scale-x-0 scale-y-0 origin-top-left 
//       group-hover:scale-x-100 group-hover:scale-y-100
//       transition-all duration-500 ease-out
//       rounded-xl
//     "
//   />

//   <div className="relative z-10 p-6">
//     <h3 
//       className="
//         text-lg md:text-xl text-[#002047] 
//         group-hover:text-xl lg:group-hover:text-[22px]
//         mb-3 font-semibold 
//         transition-all duration-500
//       "
//     >
//       {title}
//     </h3>
//     <p 
//       className="
//         text-black 
//         text-base leading-relaxed 
//         transition-colors duration-500
//       "
//     >
//       {description}
//     </p>
//   </div>

// </div>


//       </div>

//       <style jsx>{`
//         @keyframes gradient-shift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//       `}</style>
//     </motion.div>
//   );
// };


// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// interface ProcessStepItemProps {
//   stepNumber: number;
//   title: string;
//   description: string;
//   index: number;
//   isLast?: boolean;
// }

// export const ProcessStepItem: React.FC<ProcessStepItemProps> = ({
//   stepNumber,
//   title,
//   description,
//   index,
//   isLast
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         delay: index * 0.15,
//         duration: 0.5,
//       }}
//       className="relative flex gap-8 pb-8 last:pb-0"
//     >
//       {/* Timeline Line and Icon */}
//       <div className="relative flex flex-col items-center">
//         <div className="w-20 h-20 rounded-full bg-linear-to-tl from-[#53C9F4] to-[#4F61B3] p-1 shrink-0 z-10">
//           <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
//             <span className="text-transparent font-bold text-xl md:text-2xl bg-clip-text bg-linear-to-t from-[#53C9F4] to-[#4F61B3]">
//               {stepNumber}
//             </span>
//           </div>
//         </div>

//         {/* Vertical Line - Hidden for last item */}
//         {!isLast && (
//           <div className="absolute bg-linear-to-t to-[#4F61B3] via-[#53C9F4] from-[#4F61B3]  top-14 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+2rem)]"
//              />
//         )}
//       </div>

//       {/* Content with Border */}
//       <div className="flex-1 border-2 rounded-xl bg-white p-6 border-gray-200">
//         {/* Title */}
//         <h3 className="text:lg md:text-xl font-semibold text-[#002047] mb-2">
//           {title}
//         </h3>

//         {/* Description */}
//         <p className="text-[#65758B] text-base leading-relaxed">
//           {description}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

"use client";

import { motion } from "framer-motion";

interface ProcessStepItemProps {
  stepNumber: number;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export const ProcessStepItem = ({
  stepNumber,
  title,
  description,
  index,
  isLast = false,
}: ProcessStepItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.5,
      }}
      className="relative flex gap-8 pb-8 last:pb-0 group"
    >
      {/* Timeline circle + number */}
      <div className="relative flex flex-col items-center group-hover:scale-105 transition-all duration-500">
        <div
          className={`
            w-20 h-20 rounded-full 
            bg-gradient-to-tl from-[#53C9F4] to-[#4F61B3] 
            p-1 shrink-0 z-10
            group-hover:shadow-[0_0_10px_rgba(83,201,244,0.5)]
            transition-all duration-500
          `}
        >
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
            <span
              className={`
                text-transparent font-bold text-xl md:text-2xl 
                bg-clip-text bg-gradient-to-t from-[#53C9F4] to-[#4F61B3]
              `}
            >
              {stepNumber}
            </span>
          </div>
        </div>

        {/* Connecting vertical line (not shown on last item) */}
        {!isLast && (
          <div
            className={`
              absolute top-14 left-1/2 -translate-x-1/2 w-0.5 
              h-[calc(100%+2rem)] 
              bg-gradient-to-t from-[#4F61B3] via-[#53C9F4] to-[#4F61B3]
            `}
          />
        )}
      </div>

      {/* Main content card */}
      <div
        className={`
          relative flex-1 rounded-xl p-0.5 
          bg-gradient-to-r from-[#53C9F4] to-[#4F61B3]
          transition-all duration-500
        `}
      >
        {/* Hover overlay gradient */}
        <div
          className={`
            absolute inset-0 rounded-xl 
            bg-gradient-to-br from-[#53C9F4]/0 via-[#53C9F4]/0 to-[#4F61B3]/0
            group-hover:from-[#53C9F4]/10 group-hover:via-[#53C9F4]/5 group-hover:to-[#4F61B3]/10
            transition-all duration-500 pointer-events-none
          `}
        />

        {/* Corner accents */}
        <div
          className={`
            absolute top-0 right-0 w-20 h-20 rounded-xl 
            bg-gradient-to-bl from-[#53C9F4]/0 
            group-hover:from-[#53C9F4]/20 
            transition-all duration-500 pointer-events-none
          `}
        />
        <div
          className={`
            absolute bottom-0 left-0 w-20 h-20 rounded-xl 
            bg-gradient-to-tr from-[#4F61B3]/0 
            group-hover:from-[#4F61B3]/20 
            transition-all duration-500 pointer-events-none
          `}
        />

        {/* Animated shimmer overlay */}
        <div
          className={`
            absolute inset-0 rounded-xl opacity-0 
            group-hover:opacity-100 transition-opacity duration-500 
            pointer-events-none
          `}
          style={{
            background:
              "linear-gradient(45deg, transparent 30%, rgba(83,201,244,0.15) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
            animation: "gradient-shift 3s ease infinite",
          }}
        />

        {/* Inner white card */}
        <div
          className={`
            relative flex-1 rounded-xl overflow-hidden bg-white 
            shadow-sm transition-shadow duration-500 
            group-hover:shadow-xl group-hover:shadow-blue-200/40
          `}
        >
          {/* Scale-in background color on hover */}
          <div
            className={`
              absolute inset-0 bg-[#68CEF6] 
              scale-x-0 scale-y-0 origin-top-left 
              group-hover:scale-x-100 group-hover:scale-y-100 
              transition-all duration-500 ease-out rounded-xl
            `}
          />

          <div className="relative z-10 p-6">
            <h3
              className={`
                text-lg md:text-xl text-[#002047] 
                group-hover:text-xl lg:group-hover:text-[22px] 
                mb-3 font-semibold 
                transition-all duration-500
              `}
            >
              {title}
            </h3>

            <p
              className={`
                text-black text-base leading-relaxed 
                transition-colors duration-500
              `}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};