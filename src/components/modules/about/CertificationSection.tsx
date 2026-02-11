'use client';


import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";
import { CertificationItem } from "./CertificationItem";
import { motion } from "framer-motion";

export default function ComplianceCertificationsSection() {
  const certifications = [
    'IRD',
    'Companies Office',
    'ACC',
  ];

  return (
    <section className="w-full bg-[#fafbfc] py-20 xl:py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}

         <AnimatedSectionHeader
        tag=" Trust & Compliance"
        heading="Compliance & Certifications"
        subtitle="We maintain the highest professional standards and are certified by leading industry bodies."
        />

        {/* Certifications Grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {certifications.map((certification, index) => (
            <CertificationItem key={index} title={certification} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}