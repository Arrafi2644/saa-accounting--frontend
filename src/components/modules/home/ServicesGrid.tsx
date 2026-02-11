
import { ServiceCard } from "./ServiceCard";
import { IService } from "@/types";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";
import servicesBg from "../../../../public/assets/service-grid-bg.webp"
import Image from "next/image";

// --- Helper for staggered animation delays ---
const staggerDelays = {
  tag: 0.3,
  heading: 0.5,
  para: 0.7,
};

type Props = {
  services: IService[];
};

export function ServicesGrid({ services }: Props) {

  return (
    <section className="py-20 md:28 lg:py-32 bg-[#001F3F] relative -mt-1 w-full" id="servicesSection">
      <Image
        src={servicesBg}
        alt="Service section background image"
        fill
        className="object-cover absolute inset-0 z-0"
      />
      {/* <div
  className="absolute inset-0 z-0 bg-repeat" // bg-repeat = background-repeat: repeat
  style={{ backgroundImage: `url(${servicesBg.src})` }}
/> */}
        <div className="absolute inset-0 bg-[#001539]/65 z-10" />
      <div className="container mx-auto overflow-hidden px-4 sm:px-6 lg:px-8 relative z-20">

        <AnimatedSectionHeader
          tag="OUR SERVICES"
          heading="Our Core Services"
          subtitle="From compliance to growth strategy, we provide the tailored support your business needs to thrive."
          headingColor="#FFFFFF"
          subtitleColor="#FFFFFF"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {services.map((service: IService, index: number) => (
            <ServiceCard
              key={service._id}
              service={service}
              index={index}
            />
          ))}
        </div>

        <div className="flex items-center justify-center mt-12">
          <Link href="/services">
            {/* <Button className="cursor-pointer bg-linear-to-r from-[#4E60AF] min-h-0 flex min-w-0 w-56 h-auto py-4 px-20 to-[#56C9F2] transition-all hover:scale-105 ease-in-out">View All Services <MoveRight className="w-4 h-4 arrow-animate" /></Button> */}
            <button className="simple-gradient-btn group px-8 py-4 text-[#002047] font-semibold text-sm flex items-center gap-2 overflow-hidden relative">
              <span className="relative z-10 flex items-center gap-2">
                View All Services
                <MoveRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </button>


          </Link>
        </div>
      </div>
    </section>
  );
}

