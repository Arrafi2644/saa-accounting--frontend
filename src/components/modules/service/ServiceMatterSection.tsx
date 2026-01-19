// import React from 'react';
import { IServiceMatter } from '@/types';
import { DualComparisonCard } from './ComparisionItem';

interface Props {
  serviceMatter: IServiceMatter;
}

const ServiceMatterSection = ({serviceMatter}: Props) => {
  // const withoutSupportData: ComparisonSection = {
  //   badge: {
  //     icon: 'AlertTriangle',
  //     text: 'Reactive Accounting',
  //   },
  //   title: 'Without Expert Support',
  //   items: [
  //     { icon: 'AlertTriangle', text: 'Scrambling at tax deadlines' },
  //     { icon: 'FileText', text: 'Unexpected IRD penalties' },
  //     { icon: 'Clock', text: 'Hours lost on paperwork' },
  //     { icon: 'AlertTriangle', text: 'Missing deduction opportunities' },
  //   ],
  // };

  // const withSAAData: ComparisonSection = {
  //   badge: {
  //     icon: 'Lightbulb',
  //     text: 'Proactive Financial Planning',
  //   },
  //   title: 'With SAA Accounting',
  //   items: [
  //     { icon: 'Lightbulb', text: 'Year-round tax optimization' },
  //     { icon: 'Shield', text: 'Complete compliance confidence' },
  //     { icon: 'TrendingUp', text: 'Strategic growth planning' },
  //     { icon: 'BarChart3', text: 'Data-driven decisions' },
  //   ],
  // };

  return (
    <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-[#FBFBFC]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why This Service <span className="text-[#4D5CAC]">Matters</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            The difference between stress and success is having the right financial partner.
          </p>
        </div>

        {/* Dual Comparison Card */}
        <DualComparisonCard
          withoutSaaS={serviceMatter.withoutSaaS}
          withSaaS={serviceMatter.withSaaS}
        />
      </div>
    </section>
  );
};

export default ServiceMatterSection;