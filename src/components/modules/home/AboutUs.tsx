import React from "react";
import AboutUsSection from "./AboutUsClient";
// import { AboutUsClient } from "./AboutUsClient";

export const AboutUs: React.FC = () => {
  return (
    <section className="bg-[#EEEEEE] py-20 md:py-28 lg:py-32 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AboutUsSection />
      </div>
    </section>
  );
};
