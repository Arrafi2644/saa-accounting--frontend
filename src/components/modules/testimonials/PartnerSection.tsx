import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PartnerSection = () => {
  const badges = [
    {
      text: 'Xero Certified Partner',
    },
    {
      text: 'MYOB Partner',
    },
    {
      text: 'IRD Authorized Agent',
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 md:px-6 lg:px-8"
    style={{
        background: "linear-gradient(to right, #0c2541, #2c5985f2, #0c2541)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-white"
            >
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span className="text-sm sm:text-base xl:text-lg font-normal whitespace-nowrap">
                {badge.text}
              </span>

              {/* Vertical Divider */}
            {index < badges.length - 1 && (
                <span className=" text-white ml-4 md:ml-8 lg:ml-12">|</span>
            )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;