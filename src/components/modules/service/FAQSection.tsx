"use client"

import React, { useState } from 'react';
import { AccordionItem } from './AccordionItem';
import { IFaq } from '@/types';
import AnimatedSectionHeader from '../animations/AnimatedSectionHeader';

interface Props {
  faqs: IFaq[];
}

const FAQSection = ({ faqs }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 xl:py-28 px-4 md:px-6 lg:px-8 bg-[#F9FBFC]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        {/* <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002047] mb-4">
            Frequently Asked{' '}
            <span className="text-[#4D5CAC]">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-[#65758B] max-w-2xl mx-auto">
            Everything you need to know about our accounting and tax services.
          </p>
        </div> */}

            <AnimatedSectionHeader 
                heading=" Frequently Asked Questions"
                subtitle="Everything you need to know about our accounting and tax services."
                >

                </AnimatedSectionHeader>

        {/* FAQ Accordion */}
        <div className=" overflow-hidden space-y-6">
          {faqs.map((item, index) => (
            <AccordionItem
              index={index}
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;