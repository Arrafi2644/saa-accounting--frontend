
import React from "react";
import { WhoWeAreClient } from "./WhoWeAreClient";

export const WhoWeAre: React.FC = () => {
  return (
    <section className="bg-[#EEEEEE]  py-20 md:28 lg:py-32 w-full">
      {/* Background Pattern */}
      <div className="container mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
        <WhoWeAreClient />
      </div>


    </section>
  );
};
