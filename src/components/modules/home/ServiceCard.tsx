

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
      className={`rounded-xl transition-shadow duration-300 border border-gray-100 group flex flex-col relative z-0 h-full bg-white overflow-hidden
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

        <Link
          href={`/services/${service.slug}`}
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
        </Link>

      </div>
      <div className="bg-blue-900 -z-10 absolute bottom-0 h-0 w-full group-hover:h-full transition-all duration-500"></div>


    </motion.div>
  );
}
