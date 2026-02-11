import BranchSection from '@/components/modules/contact/BranchSection';
import ContactInfoSection from '@/components/modules/contact/ContactInfoSection';
import ContactSection from '@/components/modules/contact/ContactSection';
import CTASection from '@/components/modules/contact/CTASection';
import WhyContactSection from '@/components/modules/contact/WhyContactSection';
import CommonHero from '@/components/modules/shared/commonHero/CommonHero';
import { serverFetch } from '@/lib/server-fetch';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const res = await serverFetch.get("/seo/contact", ["SEOS"]);
    const data = await res.json();

    const seo = Array.isArray(data.data) ? data.data[0] : data.data;

    if (!seo) {
        return {
            title: "Contact Us | SAA Accounting Business Ltd",
            description:
                "Get in touch with SAA Accounting Business Ltd for expert accounting, tax, and financial advisory services. Contact our team today to discuss your business needs.",
        };

    }

    return {
        title: seo?.metaTitle,
        description: seo?.metaDescription,
        keywords: seo?.metaKeywords?.split(",").map((k: string) => k.trim()),
        alternates: {
            canonical: seo?.canonicalURL,
        },
        openGraph: {
            title: seo?.ogTitle || seo.metaTitle,
            description: seo?.ogDescription || seo?.metaDescription,
            images: seo?.ogImage ? [{ url: seo?.ogImage }] : [],
            type: "website",
        },
    };
}

const ContactPage = async () => {

    const res = await serverFetch.get("/site-info", ["SITEINFO"]);
    const data = await res.json();
    const contactInfo = data?.data;

    const commonHeroProps = {
        title: "More Than Accountants: Your Trusted Partners in Business Growth",
        description: "Our mission is to empower small to medium-sized businesses with strategic financial clarity."
    }
    return (
        <div>
            <CommonHero title={commonHeroProps.title} description={commonHeroProps.description} />
            <ContactInfoSection contactInfo={contactInfo} />
            <ContactSection contactInfo={contactInfo} />
            <BranchSection contactInfo={contactInfo} />
            <WhyContactSection />
            <CTASection />
        </div>
    );
};

export default ContactPage;