
import { CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FormSubmissionSuccess() {
  const steps = [
    {
      number: 1,
      title: 'Data Review',
      description: 'Our team audits your submitted documents'
    },
    {
      number: 2,
      title: 'Consultation',
      description: 'We call you to discuss your specific goals'
    },
    {
      number: 3,
      title: 'Proposal',
      description: 'You receive a tailored fixed-fee quote'
    },
    {
      number: 4,
      title: 'Onboarding',
      description: 'We set up your systems and take the stress away'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full lg:w-3xl 2xl:w-4xl bg-white rounded-lg p-0">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#E8F9EF] flex items-center justify-center">
              <CircleCheck className="w-12 h-12 text-[#22c55e]" strokeWidth={2} />
            </div>
          </div>
        </div>

        <div className='max-w-xl mx-auto'>
                {/* Title */}
        <h2 className="text-[#1e293b] text-3xl font-bold text-center mb-3">
          Registration Received!
        </h2>

        {/* Subtitle */}
        <p className="text-[#64748b] text-base sm:text-xl text-center mb-12">
          Welcome to the SAA Family
        </p>

        {/* What Happens Next Section */}
        <h2 className="text-[#1e293b] text-base font-bold mb-8">
          What Happens Next?
        </h2>

        {/* Steps */}
        <div className="space-y-6 mb-10">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              {/* Number Circle */}
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#e5e7eb] flex items-center justify-center">
                  <span className="text-[#5160AD] text-sm font-semibold">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-[#1e293b] text-base font-bold mb-1">
                  {step.title}
                </h3>
                <p className="text-[#64748b] text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        </div>
        {/* Divider */}
        <div className="border-t border-[#e5e7eb] mb-8"></div>

        {/* Return Button */}
        <div className="flex justify-center">
            <Link href="/">
          <Button className="px-8 cursor-pointer  border-2 hover:text-white bg-white hover:bg-[#4D5CAC]  border-[#4D5CAC] text-[#4D5CAC] rounded-md text-base font-medium h-0 py-5 transition-colors">
            Return to Home
          </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}