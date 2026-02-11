import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";
import { Expertise } from "./Experties";

export default function ExpertiseSection() {
  const expertiseAreas = [
    'Business Structuring',
    'Tax Minimization',
    'IRD Compliance',
    'Growth Advisory',
    'Cloud Accounting Integration',
  ];

  return (
    <section className="w-full bg-[#002047] ">
      <div className="container mx-auto  py-20 xl:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">

        <AnimatedSectionHeader
          heading=" Our Expertise"
          subtitle=" Specialized knowledge across key areas of business finance"
          headingColor="#FFFFFF"
          subtitleColor="#FFFFFF"
        />


        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {expertiseAreas.map((area, index) => (
            <Expertise key={index} title={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}