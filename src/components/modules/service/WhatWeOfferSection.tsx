import { IService } from "@/types";
import React from "react";
import { WhatWeOfferCard } from "./WhatWeOfferCard";

type Props = {
  service: IService;
};

export const WhatWeOfferSection: React.FC<Props> = ({ service }) => {


  return (
  <section className="relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-white">


      <div className="relative container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
         What You <span className="text-[#4D5CAC]">Get</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive accounting and tax services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {service.features.map((feature, index) => (
            <WhatWeOfferCard
              key={index}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;