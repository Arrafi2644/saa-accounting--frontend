
import { AboutUs } from "@/components/modules/home/AboutUs";
import { ConversionBanner } from "@/components/modules/home/ConversationBanner";
import Hero from "@/components/modules/home/Hero";
import { ProblemSolution } from "@/components/modules/home/ProblemSolution";
import { ServicesGrid } from "@/components/modules/home/ServicesGrid";
import TestimonialsSection from "@/components/modules/home/TestimonialSection";
import { TrustStrip } from "@/components/modules/home/TrustStrip";
import { WorkProcess } from "@/components/modules/home/WorkProcess";
import { serverFetch } from "@/lib/server-fetch";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const res = await serverFetch.get("/seo/home", ["SEOS"]);
  const data = await res.json();

  const seo = Array.isArray(data.data) ? data.data[0] : data.data;

  if (!seo) {
    return {
      title: "SAA Accounting Business Ltd",
      description:
        "Strategic financial clarity for small to medium-sized businesses.",
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
export default async function HomePage() {
  const serviceApiRes = await serverFetch.get("/service?limit=8", ["SERVICES"])
  const servicesResponse = await serviceApiRes.json()
  const services = servicesResponse.data;

  const res = await serverFetch.get("/testimonial?isApproved=true&limit=4", ["TESTIMONIALS"])
  const testimonialResponse = await res.json()
  const testimonials = testimonialResponse.data;


  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <Hero />
      <TrustStrip />
      <ServicesGrid services={services} />
      <ProblemSolution />
      {/* <WhoWeAre /> */}
      <AboutUs />
      <WorkProcess />
      <TestimonialsSection testimonials={testimonials} />
      <ConversionBanner />
    </div>
  );
}
