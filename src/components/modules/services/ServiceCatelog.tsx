import { IService } from "@/types";
import { ServiceCard } from "./ServiceCard";
import React from "react";
import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";

type Props = {
  services: IService[];
};

const staggerDelays = {
  tag: 0.3,
  heading: 0.5,
  para: 0.7,
};

export const ServiceCatalog: React.FC<Props> = ({ services }) => {


  return (
  <section className="relative overflow-hidden bg-[#FEFEFE]">
      <div className="relative container px-4 sm:px-6 lg:px-8 py-20  mx-auto overflow-hidden">
        {/* Header */}
        {/* <div className="text-center mb-12 md:mb-16">
           <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E9F8FE] text-[#4D5CAC] text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-[#64D3F8] rounded-full"></span>
              WHAT WE OFFER
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Service <span className="text-[#4D5CAC]">Catalog</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of accounting and advisory services.
          </p>
        </div> */}

        <AnimatedSectionHeader
          tag="WHAT WE OFFER"
          heading=" Our Service Catalog"
          subtitle="  Explore our comprehensive range of accounting and advisory services."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCatalog;


// import { ServiceCard } from "./ServiceCard";
// import { IService } from "@/types";
// import Link from "next/link";
// import { MoveRight } from "lucide-react";
// import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";
// import servicesBg from "../../../../public/assets/services-bg.webp"
// import Image from "next/image";

// // --- Helper for staggered animation delays ---
// const staggerDelays = {
//   tag: 0.3,
//   heading: 0.5,
//   para: 0.7,
// };

// type Props = {
//   services: IService[];
// };

// export function ServiceCatalog({ services }: Props) {

//   return (
//     <section className="py-20 md:28 lg:py-32 bg-[#001F3F] relative -mt-1 w-full" id="servicesSection">
//       <Image
//         src={servicesBg}
//         alt="Service section background image"
//         fill
//         className="object-cover absolute inset-0 z-0"
//       />
//         <div className="absolute inset-0 bg-[#001539]/80 z-10" />
//       <div className="container mx-auto overflow-hidden px-4 sm:px-6 lg:px-8 relative z-20">

//         <AnimatedSectionHeader
//           tag="OUR SERVICES"
//           heading="Our Core Services"
//           subtitle="From compliance to growth strategy, we provide the tailored support your business needs to thrive."
//           headingColor="#FFFFFF"
//           subtitleColor="#FFFFFF"
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
//           {services.map((service: IService, index: number) => (
//             <ServiceCard
//               key={service._id}
//               service={service}
//               index={index}
//             />
//           ))}
//         </div>

//         <div className="flex items-center justify-center mt-12">
//           <Link href="/services">
//             {/* <Button className="cursor-pointer bg-linear-to-r from-[#4E60AF] min-h-0 flex min-w-0 w-56 h-auto py-4 px-20 to-[#56C9F2] transition-all hover:scale-105 ease-in-out">View All Services <MoveRight className="w-4 h-4 arrow-animate" /></Button> */}
//             <button className="simple-gradient-btn group px-8 py-4 text-[#002047] font-semibold text-sm flex items-center gap-2 overflow-hidden relative">
//               <span className="relative z-10 flex items-center gap-2">
//                 View All Services
//                 <MoveRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
//               </span>
//             </button>


//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

