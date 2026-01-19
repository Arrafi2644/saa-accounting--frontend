
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Calendar } from 'lucide-react';

// interface ProcessStepItemProps {
//   stepNumber: number;
//   title: string;
//   description: string;
//   index: number;
//   isLast?: boolean;
// }

// export const ProcessStepItem: React.FC<ProcessStepItemProps> = ({stepNumber, title, description, index, isLast }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         delay: index * 0.15,
//         duration: 0.5,
//       }}
//       className="relative flex gap-6 pb-12 last:pb-0"
//     >
//       {/* Timeline Line and Icon */}
//       <div className="relative flex flex-col items-center">
//         {/* Icon Container */}
//         {/* <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 z-10 border-4 ">
//           <span className="text-transparent font-bold text-xl md:text-2xl bg-clip-text bg-linear-to-t from-[#53C9F4] to-[#4F61B3]">{stepNumber}</span>
//         </div> */}

//         <div className="w-20 h-20 rounded-full bg-gradient-to-tl from-[#53C9F4] to-[#4F61B3] p-1 shrink-0 z-10">
//   <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
//     <span className="text-transparent font-bold text-xl md:text-2xl bg-clip-text bg-linear-to-t from-[#53C9F4] to-[#4F61B3]">
//       {stepNumber}
//     </span>
//   </div>
// </div>


//         {/* Vertical Line - Hidden for last item */}
//         {!isLast && (
//           <div className="absolute top-12 left-1/2 mt-2 -translate-x-1/2 w-0.5 h-14 bg-[#DFE4EC]" />
//         )}
//       </div>

//       {/* Content */}
//       <div className="flex-1 pt-2">    
//         {/* Title */}
//         <h3 className="text-xl font-bold text-[#1a3a52] mb-2">
//           {title}
//         </h3>

//         {/* Description */}
//         <p className="text-[#6b7280] text-base leading-relaxed">
//           {description}
//         </p>
//       </div>
//     </motion.div>
//   );
// };


'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStepItemProps {
  stepNumber: number;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export const ProcessStepItem: React.FC<ProcessStepItemProps> = ({
  stepNumber,
  title,
  description,
  index,
  isLast
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.5,
      }}
      className="relative flex gap-8 pb-8 last:pb-0"
    >
      {/* Timeline Line and Icon */}
      <div className="relative flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-linear-to-tl from-[#53C9F4] to-[#4F61B3] p-1 shrink-0 z-10">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
            <span className="text-transparent font-bold text-xl md:text-2xl bg-clip-text bg-linear-to-t from-[#53C9F4] to-[#4F61B3]">
              {stepNumber}
            </span>
          </div>
        </div>

        {/* Vertical Line - Hidden for last item */}
        {!isLast && (
          <div className="absolute bg-linear-to-t to-[#4F61B3] via-[#53C9F4] from-[#4F61B3]  top-14 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+2rem)]"
             />
        )}
      </div>

      {/* Content with Border */}
      <div className="flex-1 border-2 rounded-xl bg-white p-6 border-gray-200">
        {/* Title */}
        <h3 className="text:lg md:text-xl font-semibold text-[#002047] mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#65758B] text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};