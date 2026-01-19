import { CertificationItem } from "./CertificationItem";

export default function ComplianceCertificationsSection() {
  const certifications = [
    'Xero Certified',
    'MYOB Partner',
    'Chartered Accountants',
    'Tax Agents',
  ];

  return (
    <section className="w-full bg-[#fafbfc] py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#e0f4fb] text-[#002047] text-sm font-medium px-4 py-2 rounded-full mb-4">
            Trust & Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a52] mb-4 leading-tight">
            Compliance & Certifications
          </h2>
          <p className="text-[#6b7280] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            We maintain the highest professional standards and are certified by leading
            industry bodies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((certification, index) => (
            <CertificationItem key={index} title={certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}