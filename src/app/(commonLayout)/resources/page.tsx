import CommonQuestionsSection from "@/components/modules/resources/CommonQuestionsSection";
import FreeToolsSection from "@/components/modules/resources/FreeToolsSection";
import GuidesArticlesSection from "@/components/modules/resources/GuideAndArticlesSection";
import CommonHero from "@/components/modules/shared/commonHero/CommonHero";
import CommonCTA2 from "@/components/modules/shared/cta/CommonCTA2";
import { serverFetch } from "@/lib/server-fetch";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const res = await serverFetch.get("/seo/resources", ["SEOS"]);
    const data = await res.json();

    const seo = Array.isArray(data.data) ? data.data[0] : data.data;

    if (!seo) {
        return {
            title: "Resources | SAA Accounting Business Ltd",
            description:
                "Explore SAA Accounting Business Ltd's resources including guides, articles, and tools to help you understand accounting, tax, and financial advisory services better.",
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

const ResourcesPage = async () => {

    const articlesRes = await serverFetch.get("/resources/articles?limit=30", ["ARTICLES"])
    const articlesResponse = await articlesRes.json()
    const articles = articlesResponse.data;

    const toolsRes = await serverFetch.get("/resources/tools?limit=30", ["TOOLS"])
    const toolsResponse = await toolsRes.json()
    const tools = toolsResponse.data;
    const commonHeroProps = {
        badgeIcon: "BookOpen",
        badgeTitle: "Knowledge Hub",
        title: "Resources to Empower Your Business",
        description: "Free guides, tools, and expert insights to help you navigate NZ business accounting and tax."
    }

    const commonCTAProps = {
        title: "Need Personalized Guidance?",
        subTitle: "Our experts are ready to help you with tailored advice for your specific situation.",
        primaryBtnText: "Get Expert Advice",
        secondaryBtnText: "Become a Client"
    }
    return (
        <div>
            <CommonHero title={commonHeroProps.title} badgeIcon={commonHeroProps.badgeIcon} badgeTitle={commonHeroProps.badgeTitle} description={commonHeroProps.description} />
            <GuidesArticlesSection articles={articles} />
            <FreeToolsSection tools={tools} />
            <CommonQuestionsSection />
            <CommonCTA2 title={commonCTAProps.title} subTitle={commonCTAProps.subTitle} primaryBtnText={commonCTAProps.primaryBtnText} secondaryBtnText={commonCTAProps.secondaryBtnText} />
        </div>
    );
};

export default ResourcesPage;