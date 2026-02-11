// import React from 'react';
import { IServiceMatter } from '@/types';
import { DualComparisonCard } from './ComparisionItem';
import AnimatedSectionHeader from '../animations/AnimatedSectionHeader';

interface Props {
  serviceMatter: IServiceMatter;
}

const ServiceMatterSection = ({ serviceMatter }: Props) => {
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
    <section className="w-full py-20 xl:py-28 px-4 md:px-6 lg:px-8 bg-[#001539]">
      <div className="container mx-auto overflow-hidden">
        {/* Header */}
        {/* <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Why This Service <span className="text-[#6DCEF8]">Matters</span>
          </h2>
          <p className="text-lg lg:text-xl text-white max-w-3xl mx-auto">
            The difference between stress and success is having the right financial partner.
          </p>
        </div> */}

        <AnimatedSectionHeader tag=" MATTER"
          heading=" Why This Service Matters"
          subtitle=" The difference between stress and success is having the right financial partner."
              headingColor="#FFFFFF"
          subtitleColor="#FFFFFF"
        >

        </AnimatedSectionHeader>


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