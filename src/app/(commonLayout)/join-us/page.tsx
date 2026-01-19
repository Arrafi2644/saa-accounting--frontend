import JoinUsSection from '@/components/modules/join-us/JoinUsSection';
import CommonHero from '@/components/modules/shared/commonHero/CommonHero';
import { serverFetch } from '@/lib/server-fetch';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const res = await serverFetch.get("/seo/join-us", ["SEOS"]);
    const data = await res.json();

    const seo = Array.isArray(data.data) ? data.data[0] : data.data;

    if (!seo) {
        return {
            title: "Join Us | SAA Accounting Business Ltd",
            description:
                "Join SAA Accounting Business Ltd and grow your career in accounting, tax, and financial advisory services. Explore opportunities to work with a trusted and professional team.",
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

const JoinUsPage = () => {

    const commonHeroProps = {
        badgeTitle: "SSL Encrypted & NZ Privacy Compliant",
        title: "Partner with SAA Accounting",
        description: "Enter your details below to start your professional accounting journey. Secure, encrypted, and efficient."
    }
    return (
        <div>
            <CommonHero title={commonHeroProps.title} badgeTitle={commonHeroProps.badgeTitle} description={commonHeroProps.description} />
            <JoinUsSection />
        </div>
    );
};

export default JoinUsPage;