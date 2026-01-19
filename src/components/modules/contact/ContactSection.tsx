
import { ISiteInfo } from '@/types';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
export interface Props {
    contactInfo: ISiteInfo;
}
// Main Contact Section Component
export default function ContactSection({contactInfo}:Props) {
  return (
    <section className="bg-white py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ContactForm />
          <ContactInfo contactInfo={contactInfo} />
        </div>
      </div>
    </section>
  );
}