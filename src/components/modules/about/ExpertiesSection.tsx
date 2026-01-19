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
    <section className="w-full bg-[#002047] py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Our Expertise
          </h2>
          <p className="text-[#a0b3c8] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Specialized knowledge across key areas of business finance
          </p>
        </div>

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