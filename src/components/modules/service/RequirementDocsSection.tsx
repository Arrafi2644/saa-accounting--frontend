import React from 'react';
import { IRequirementDoc } from '@/types';
import ChecklistCard from './ChecklistCard';
import AnimatedSectionHeader from '../animations/AnimatedSectionHeader';

interface ChecklistProps {
  requirementDocs: IRequirementDoc[]
}

const RequirementDocsSection: React.FC<ChecklistProps> = ({ requirementDocs }) => {
  const checklistItems = requirementDocs;

  return (
    <section className="w-full py-20 xl:py-28 px-4 md:px-6 xl:px-8 bg-white">
      <div className="max-w-4xl mx-auto ">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <p className="text-[#53C9F4] text-sm font-semibold tracking-wider uppercase mb-3">
            BE PREPARED
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            What You will Need to{' '}
            <span className="text-[#4D5CAC]">Get Started</span>
          </h2>
        </div> */}

        <AnimatedSectionHeader
          tag="BE PREPARED"
          heading="What You will Need To Get Started"

        >

        </AnimatedSectionHeader>

        <ChecklistCard checklistItems={checklistItems} />
      </div>
    </section>
  );
};

export default RequirementDocsSection;