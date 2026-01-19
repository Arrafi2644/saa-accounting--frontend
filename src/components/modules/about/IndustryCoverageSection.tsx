import { Briefcase, Heart, Home, MoreHorizontal, RectangleEllipsis, ShoppingCart, Truck, Wrench } from "lucide-react";
import { IndustryCard } from "./IndustryCard";

export default function IndustryCoverageSection() {
  const industries = [
    {
      icon: <Wrench size={24} strokeWidth={2} />,
      title: 'Trades & Construction',
    },
    {
      icon: <ShoppingCart size={24} strokeWidth={2} />,
      title: 'E-commerce & Retail',
    },
    {
      icon: <Briefcase size={24} strokeWidth={2} />,
      title: 'Professional Services',
    },
    {
      icon: <Home size={24} strokeWidth={2} />,
      title: 'Property Investment',
    },
    {
      icon: <Heart size={24} strokeWidth={2} />,
      title: 'Healthcare',
    },
    {
      icon: <Truck size={24} strokeWidth={2} />,
      title: 'Transport & Logistics',
    },
    {
      icon: <RectangleEllipsis size={24} strokeWidth={2} />,
      title: 'Other Technologies',
    },
    {
      icon: <MoreHorizontal size={24} strokeWidth={2} />,
      title: 'Other Technologies',
    },
  ];

  return (
    <section className="w-full bg-[#cff0fc78] py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#e0f4fb] text-[#002047] text-sm font-medium px-4 py-2 rounded-full mb-4">
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a52] leading-tight">
            Industry Coverage
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}