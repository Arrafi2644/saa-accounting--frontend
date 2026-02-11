
import { cache } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import FAQSection from "@/components/modules/service/FAQSection";
import RequirementDocsSection from "@/components/modules/service/RequirementDocsSection";
import ServiceMatterSection from "@/components/modules/service/ServiceMatterSection";
import { ServiceOverview } from "@/components/modules/service/ServiceOverview";
import WhatWeOfferSection from "@/components/modules/service/WhatWeOfferSection";
import WorkProcessSection from "@/components/modules/service/WorkProcessSection";
import CommonHero from "@/components/modules/shared/commonHero/CommonHero";
import CommonCTA from "@/components/modules/shared/cta/CommonCTA";

import { serverFetch } from "@/lib/server-fetch";
import { IService } from "@/types";
import config from "@/config";
import CommonCTA2 from "@/components/modules/shared/cta/CommonCTA2";

// ✅ Build-time static params generation
export async function generateStaticParams() {
  try {
    const res = await fetch(`${config.baseUrl}/service`);
    const data = await res.json();

    // Return slug array for dynamic routes
    return (
      data?.data?.map((service: IService) => ({
        slug: service.slug,
      })) ?? []
    );
  } catch (error) {
    console.error("Failed to fetch services for static params:", error);
    return [];
  }
}

// ✅ Cached server function to fetch service by slug
export const getService = cache(
  async (slug: string): Promise<IService | null> => {
    try {
      const res = await serverFetch.get(`/service/${slug}`);

      if (!res.ok) return null;

      const data = await res.json();
      return data?.data ?? null;
    } catch (error) {
      console.error("Get Service Error:", error);
      return null;
    }
  }
);

// ✅ Metadata generation for SEO
type MetadataProps = {
  params: Promise<{ slug: string }>; // Promise, must await
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug } = await params; // unwrap Promise
  const service = await getService(slug);

  if (!service) {
    return {
      title: "Service | SAA Accounting Business Ltd",
      description:
        "Explore our professional accounting, tax, and financial advisory services.",
    };
  }

  return {
    title: `${service.title} | SAA Accounting Business Ltd`,
    description:
      service.serviceSummary ||
      `Learn more about ${service.title} services.`,
    alternates: {
      canonical: `${config.baseUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.serviceSummary,
      images: service.overView?.serviceImage
        ? [{ url: service.overView.serviceImage }]
        : [],
      type: "website",
    },
  };
}

// ✅ Page component
type PageProps = {
  params: Promise<{ slug: string }>; // Promise, must await
};

export default async function ServiceDetailsPage({ params }: PageProps) {
  const { slug } = await params; // unwrap Promise

  const service = await getService(slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen">
      <CommonHero
        badgeIcon={service.serviceIcon}
        badgeTitle={service.title}
        title={service.banner.title}
        description={service.banner.subtitle}
      />

      <ServiceOverview overview={service.overView} />

      <ServiceMatterSection serviceMatter={service.serviceMatter} />

      <WhatWeOfferSection service={service} />

      <WorkProcessSection steps={service.processSteps} />

      <RequirementDocsSection requirementDocs={service.requirementDocs} />

      <FAQSection faqs={service.faqs} />

      <CommonCTA2
        title="Ready to Simplify Your Business Accounting?"
        subTitle="Partner with our expert accountants and take control of your finances. Let's build a foundation for sustainable growth."
        primaryBtnText="Book A Consultant"
        secondaryBtnText="Start Your Registration"
      />
    </div>
  );
}
