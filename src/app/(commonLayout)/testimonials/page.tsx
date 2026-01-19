import CommonHero from '@/components/modules/shared/commonHero/CommonHero';
import AllTestimonialsSection from '@/components/modules/testimonials/AllTestimonialsSection';
import CTASection from '@/components/modules/testimonials/CTASection';
import FeaturedTestimonialSection from '@/components/modules/testimonials/FeaturedTestimonialSection';
import PartnerSection from '@/components/modules/testimonials/PartnerSection';
import { TestimonialStatSection } from '@/components/modules/testimonials/TestimonialStateSection';
import { serverFetch } from '@/lib/server-fetch';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const res = await serverFetch.get("/seo/testimonials", ["SEOS"]);
    const data = await res.json();

    const seo = Array.isArray(data.data) ? data.data[0] : data.data;

    if (!seo) {
        return {
            title: "Testimonials | SAA Accounting Business Ltd",
            description: "Read what our clients say about SAA Accounting Business Ltd and how our expert accounting, tax, and financial services have helped their businesses grow.",
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

const TestimonialsPage = async () => {
    const featuredTestimonialRes = await serverFetch.get("/testimonial?isFeatured=true&limit=5", ["TESTIMONIALS"])
    const FeaturedTestimonialResponse = await featuredTestimonialRes.json()
    const featuredTestimonials = FeaturedTestimonialResponse.data;

    const res = await serverFetch.get("/testimonial?isApproved=true&limit=60", ["TESTIMONIALS"])
    const testimonialResponse = await res.json()
    const testimonials = testimonialResponse.data;

    const commonHeroProps = {
        badgeIcon: "Star",
        badgeTitle: "Client Success Stories",
        title: "Client Success Stories",
        description: "See how we've helped businesses across New Zealand gain financial clarity and strategic growth."
    }

    return (
        <div>
            <CommonHero
                badgeIcon={commonHeroProps.badgeIcon} title={commonHeroProps.title} badgeTitle={commonHeroProps.badgeTitle} description={commonHeroProps.description}
            />
            <TestimonialStatSection testimonials={testimonials}/>
            <FeaturedTestimonialSection featuredTestimonials={featuredTestimonials} />
            <AllTestimonialsSection testimonials={testimonials} />
            <PartnerSection />
            <CTASection />
        </div>
    );
};

export default TestimonialsPage;