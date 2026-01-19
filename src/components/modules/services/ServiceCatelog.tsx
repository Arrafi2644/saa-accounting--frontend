import { IService } from "@/types";
import { ServiceCard } from "./ServiceCard";
import React from "react";

type Props = {
  services: IService[];
};

export const ServiceCatalog: React.FC<Props> = ({ services }) => {


  return (
  <section className="relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-[#FEFEFE]">


      <div className="relative container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
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
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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