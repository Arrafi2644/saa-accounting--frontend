
import CommonHero from "@/components/modules/shared/commonHero/CommonHero";
import ServiceCatalog from "@/components/modules/services/ServiceCatelog";
import { Metadata } from "next";
import { serverFetch } from "@/lib/server-fetch";
import CommonCTA2 from "@/components/modules/shared/cta/CommonCTA2";

export async function generateMetadata(): Promise<Metadata> {
  const res = await serverFetch.get("/seo/resources", ["SEOS"]);
  const data = await res.json();

  const seo = Array.isArray(data.data) ? data.data[0] : data.data;

  if (!seo) {
    return {
      title: "Our Services | SAA Accounting Business Ltd",
      description:
        "Discover the range of expert accounting, tax, bookkeeping, and financial advisory services offered by SAA Accounting Business Ltd.",
    };
  }

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.metaKeywords?.split(",").map((k: string) => k.trim()),
    alternates: {
      canonical: seo.canonicalURL,
    },
    openGraph: {
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      images: seo.ogImage ? [{ url: seo.ogImage }] : [],
      type: "website",
    },
  };
}

export default async function ServicesPage() {
  const res = await serverFetch.get("/service", ["SERVICES"]);
  const servicesResponse = await res.json();
  const services = servicesResponse.data;

  return (
    <div className="min-h-screen  font-sans">
      <CommonHero
        badgeTitle="Professional Accounting Services"
        title="More Than Accountants: Your Trusted Partners in Business Growth"
        description="Our mission is to empower small to medium-sized businesses with strategic financial clarity."
      />

      <ServiceCatalog services={services} />

      <CommonCTA2
        badgeTitle="Free Consultation"
        title="Not Sure Which Service is Right for You?"
        subTitle="Our team will assess your needs and recommend the perfect solution for your business."
        primaryBtnText="Book Free Assessment"
        secondaryBtnText="Start Your Registration"
      />
    </div>
  );
}
