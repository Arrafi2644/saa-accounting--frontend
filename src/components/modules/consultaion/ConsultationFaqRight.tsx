"use client"

import React, { useState } from 'react';
import { IFaq } from '@/types';
import AnimatedSectionHeader from '../animations/AnimatedSectionHeader';
import { AccordionItem } from '../service/AccordionItem';
import { GlaceGlaceForTagline } from '../home/HeroTextAnimation';
import { motion } from "framer-motion"



interface PreparationItem {
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Is the initial consultation free?',
    answer:
      'Yes! Your first 30-minute discovery session is completely free. This allows us to understand your needs and determine how we can best assist you.',
  },
  {
    question: 'How long is a typical consultation session?',
    answer:
      'A typical consultation session lasts between 45-60 minutes, depending on the complexity of your financial situation and questions.',
  },
  {
    question: 'Can I reschedule my appointment?',
    answer:
      'Yes, you can reschedule your appointment up to 24 hours in advance. Please contact us as soon as possible to arrange a new time.',
  },
  {
    question: 'What if I need help outside scheduled hours?',
    answer:
      'We offer emergency support for urgent matters. Please email us with "URGENT" in the subject line, and we will respond as quickly as possible.',
  },
  {
    question: 'Do I need to prepare anything before the call?',
    answer:
      'Please have your IRD number, access to your accounting software, and any relevant financial documents ready. Review the preparation checklist on the left for details.',
  },
];

export const ConsultantFaqRight = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}

        <div className="mb-8 sm:mb-12 space-y-4 hidden xl:block">
          {/* <p className="text-cyan-400 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3">
            Common Questions

          </p> */}
          <motion.span
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-block text-white font-medium text-sm rounded-tl-2xl rounded-br-2xl bg-linear-to-r from-blue-600 to-[#56CCF4]"
          >
            <GlaceGlaceForTagline>
              <p className="py-2 px-6">
                COMMON QUESTIONS
              </p>
            </GlaceGlaceForTagline>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">

            Frequently Asked
          </motion.h2>
        </div>

        <div className='block xl:hidden'>

          <AnimatedSectionHeader
            tag="COMMON QUESTIONS"
            heading=" Frequently Asked"
          />
        </div>
        {/* FAQ Accordion */}
        <div className=" overflow-hidden space-y-6">
          {faqItems.map((item, index) => (
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
    </motion.div>
  );
};
