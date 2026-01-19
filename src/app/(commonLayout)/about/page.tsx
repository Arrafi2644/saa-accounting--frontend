import AccountingHeroSection from '@/components/modules/about/AccountingHeroSection';
import AchievementsSection from '@/components/modules/about/AchivementSection';
import AdvisoryServicesSection from '@/components/modules/about/AdvisoryServiceSection';
import ComplianceCertificationsSection from '@/components/modules/about/CertificationSection';
import CTASection from '@/components/modules/about/CTASection';
import ExpertiseSection from '@/components/modules/about/ExpertiesSection';
import IndustryCoverageSection from '@/components/modules/about/IndustryCoverageSection';
import MissionValuesSection from '@/components/modules/about/MissionValueSection';
import ToolsTechnologySection from '@/components/modules/about/ToolTechnologySection';
import CommonHero from '@/components/modules/shared/commonHero/CommonHero';
import { serverFetch } from '@/lib/server-fetch';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const res = await serverFetch.get("/seo/about-us", ["SEOS"]);
    const data = await res.json();

    const seo = Array.isArray(data.data) ? data.data[0] : data.data;

    if (!seo) {
        return {
            title: "About Us | SAA Accounting Business Ltd",
            description:
                "Learn more about SAA Accounting Business Ltd—our mission, values, and experienced team dedicated to delivering trusted accounting, tax, and financial advisory services since 2013.",
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

const AboutPage = () => {

    const commonHeroProps = {
        badgeTitle: "About SAA Accounting",
        title: "More Than Accountants: Your Trusted Partners in Business Growth",
        description: "Our mission is to empower small to medium-sized businesses with strategic financial clarity."
    }

    return (
        <div>
            <CommonHero title={commonHeroProps.title} badgeTitle={commonHeroProps.badgeTitle} description={commonHeroProps.description} />
            <AccountingHeroSection />
            <AdvisoryServicesSection />
            <MissionValuesSection />
            <ExpertiseSection />
            <ToolsTechnologySection />
            <IndustryCoverageSection />
            <AchievementsSection />
            <ComplianceCertificationsSection />
            <CTASection />
        </div>
    );
};

export default AboutPage;