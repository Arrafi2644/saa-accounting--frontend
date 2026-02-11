// // "use client"
// // import React from 'react';
// // import { ArrowRight } from 'lucide-react';
// // import Link from 'next/link';
// // import { DynamicLucideIcon } from '../shared/dynamicIcon/DynamicLucideIcon';
// // import { IService } from '@/types';
// // import { motion } from "framer-motion"

// // interface ServiceCardProps {
// //     service: IService;
// //     index: number;
// // }


// // export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {

// //     return (
// //         <Link href={`/services/${service.slug}`}>
// //             <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 whileHover={{ y: -8 }}
// //                 transition={{
// //                     delay: index * 0.1,
// //                     duration: 0.5,
// //                     y: {
// //                         delay: 0,
// //                         duration: 0.3,
// //                         ease: "easeOut",
// //                     },
// //                 }}
// //                 className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl 
// //              transition-shadow duration-300 border border-gray-100  hover:border-[#64D3F8]
// //              group flex flex-col h-full`}
// //             >
// //                 <div className="w-14 h-14 bg-linear-to-br from-[#DCE1F0] to-[#DCF3FC] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
// //                     <div className="text-[#4D5CAC]">
// //                         <DynamicLucideIcon
// //                             iconName={service.serviceIcon}
// //                             size={26}
// //                         />
// //                     </div>
// //                 </div>

// //                 <h3 className="text-lg font-bold text-[#002047] group-hover:text-[#4D5CAC] mb-3 transition-colors">
// //                     {service.title}
// //                 </h3>

// //                 <p className="text-[#65758B] mb-6 text-sm leading-relaxed">
// //                     {service.shortDescription}
// //                 </p>

// //                 <div
// //                     className="flex items-center font-medium mt-auto text-[#4D5CAC] text-sm"
// //                 >
// //                     Learn more
// //                     <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={14} />
// //                 </div>
// //             </motion.div>
// //         </Link>
// //     );
// // };

// "use client";

// import React from "react";
// import Link from "next/link";
// import { IService } from "@/types";
// import { DynamicLucideIcon } from "../shared/dynamicIcon/DynamicLucideIcon";
// import { motion } from "framer-motion";
// import { MoveRight } from "lucide-react";

// interface ServiceCardProps {
//   service: IService;
//   index: number;
// }

// export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {

//     const getInitialPosition = (index: number) => {
//         const pos = index % 4;

//         switch (pos) {
//           case 0: // Left
//             return { opacity: 0, x: -150, y: 0 };

//           case 1: // Top
//             return { opacity: 0, x: 0, y: -150 };

//           case 2: // Bottom
//             return { opacity: 0, x: 0, y: 150 };

//           case 3: // Right
//             return { opacity: 0, x: 150, y: 0 };

//           default:
//             return { opacity: 0 };
//         }
//       };


//   return (
//     <Link href={`/services/${service.slug}`} className="h-full">
//       <motion.div
//         initial={getInitialPosition(index)}
//         whileInView={{ opacity: 1, x: 0, y: 0 }}
//         viewport={{ once: true }}
//         whileHover={{ y: -10 }}
//         transition={{
//           delay: index * 0.2,
//           duration: 1,
//           ease: "easeOut",
//         }}
//         className="
//           relative h-full overflow-hidden rounded-xl
//           bg-white border border-gray-100
//           group flex flex-col p-8
//           shadow-[0_6px_12px_rgba(0,0,0,0.08)]
//           hover:shadow-[0_20px_40px_rgba(95,100,255,0.35),0_12px_30px_rgba(254,180,123,0.35)]
//         "
//       >
//         {/* Icon */}
//         <div className="relative mb-8 z-10">
//           <div className="h-10 w-10 rounded-full bg-blue-200/60" />
//           <DynamicLucideIcon
//             iconName={service.serviceIcon}
//             size={36}
//             className="absolute top-1 left-1 text-[#002047] transition-colors duration-500 group-hover:text-white"
//           />
//         </div>

//         {/* Title */}
//         <h3 className="text-xl font-bold text-[#002047] mb-3 z-10 transition-colors group-hover:text-white">
//           {service.title}
//         </h3>

//         {/* Description */}
//         <p className="text-sm text-black mb-6 leading-relaxed z-10 transition-colors group-hover:text-white">
//           {service.shortDescription}
//         </p>

//         {/* Read More */}
//         <div className="mt-auto z-10 flex items-center gap-2 font-semibold text-[#4F5CB0] group-hover:text-white text-sm">
//           <span className="overflow-hidden whitespace-nowrap w-0 group-hover:w-28 transition-all duration-700">
//             Read More
//           </span>

//           <MoveRight
//             size={18}
//             className="
//               transition-all duration-700
//               group-hover:-ml-10
//               group-hover:opacity-0
//               group-hover:scale-75
//             "
//           />
//         </div>

//         {/* Hover Overlay */}
//         <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-900 transition-all duration-500 group-hover:h-full -z-0" />
//       </motion.div>
//     </Link>
//   );
// };




"use client"
import { IService } from "@/types";
import { motion } from "framer-motion";
import { DynamicLucideIcon } from "../shared/dynamicIcon/DynamicLucideIcon";
import Link from "next/link";

type Props = {
    service: IService;
    index: number;
};


export function ServiceCard({ service, index }: Props) {
    const getInitialPosition = (index: number) => {
        const col = index % 3;
        switch (col) {
            case 0: return { opacity: 0, x: -150, y: 0 };
            case 1: return { opacity: 0, x: 0, y: 150 };
            case 2: return { opacity: 0, x: 150, y: 0 };
            default: return { opacity: 0, x: 0, y: 0 };
        }
    };


    return (
        <Link
            href={`/services/${service.slug}`}
        >

            <motion.div
                initial={getInitialPosition(index)}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{
                    delay: index * 0.2,
                    duration: 1,
                    ease: "easeOut",
                }}
                className={`rounded-xl transition-shadow duration-300 border border-[#002047] group flex flex-col relative z-0 h-full bg-white overflow-hidden
    shadow-[0_6px_12px_rgba(0,0,0,0.08)]
    hover:shadow-[0_20px_40px_rgba(95,100,255,0.35),0_12px_30px_rgba(254,180,123,0.35)]
    
  `}
            >



                <div className="p-8">
                    <div className=" rounded-lg mb-10 duration-300 relative">
                        <div className="h-8 w-8 rounded-full bg-blue-200/60"></div>
                        <DynamicLucideIcon
                            iconName={service.serviceIcon}
                            size={40}

                            className="text-[#002047] transition-colors duration-500 delay-150 group-hover:text-white absolute top-3 left-1 "
                        />
                    </div>

                    <h3 className="text-xl font-bold max-w-full text-[#002047] group-hover:text-white mb-3 transition-colors">
                        {service.title}
                    </h3>

                    <p className="text-black group-hover:text-white mb-6 text-sm max-w-full leading-relaxed">{service.shortDescription}</p>

                    <div

                        className="group inline-flex items-center gap-2 font-semibold mt-auto text-[#4F5CB0] group-hover:text-white text-sm xl:text-base"
                    >
                        {/* Read More Text */}
                        <span
                            className=" overflow-hidden whitespace-nowrap w-0 group-hover:w-28 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                        >
                            Read More
                        </span>

                        {/* Arrow Icon */}
                        <DynamicLucideIcon
                            iconName="MoveRight"
                            size={20}
                            className="
      opacity-100
      ml-0
      group-hover:-ml-10
      scale-100
      group-hover:opacity-0
      group-hover:scale-75
      transition-all
      duration-700
      ease-in-out
    "
                        />
                    </div>

                </div>
                <div className="bg-blue-900 -z-10 absolute bottom-0 h-0 w-full group-hover:h-full transition-all duration-500"></div>


            </motion.div>
        </Link>
    );
}
