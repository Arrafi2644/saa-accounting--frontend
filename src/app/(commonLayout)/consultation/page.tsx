import ConsultantBookingSection from "@/components/modules/consultaion/ConsultantBooking";
import ConsultationFaqSection from "@/components/modules/consultaion/ConsultationFaqSection";
import ConsultationSection from "@/components/modules/consultaion/ConsultationSection";
import ConsultContactSection from "@/components/modules/consultaion/ContactSection";
import ProcessSection from "@/components/modules/consultaion/ProcessSection";
import CommonHero from "@/components/modules/shared/commonHero/CommonHero";
import CommonCTA from "@/components/modules/shared/cta/CommonCTA";
import { serverFetch } from "@/lib/server-fetch";


const ConsultationPage = async () => {

    const res = await serverFetch.get("/site-info", ["SITEINFO"]);
    const data = await res.json();
    const contactInfo = data?.data;


    const commonHeroProps = {
        badgeIcon: "Calendar",
        badge: "Free 30-Minute Discovery Session",
        title: "Strategic Consultation",
        description: "Choose your preferred way to connect. Whether it's a quick phone call, a deep-dive Zoom, or a face-to-face meeting in Auckland, your financial clarity starts here."
    }

    const commonCTAProps = {

        title: "Ready to Get Started?",
        subTitle: "Take the first step towards financial clarity. Book your free consultation today or register as a client to begin your journey.",
        primaryBtnText: "Start Your Registration",
        secondaryBtnText: "Contact Us"
    }

    return (
        <div>
            <CommonHero badgeTitle={commonHeroProps.badge} badgeIcon={commonHeroProps.badgeIcon} title={commonHeroProps.title} description={commonHeroProps.description} />
            <ConsultationSection />
            <ConsultantBookingSection />
            <ProcessSection />
            <ConsultationFaqSection />
            <ConsultContactSection contactInfo={contactInfo} />
            <CommonCTA title={commonCTAProps.title} subTitle={commonCTAProps.subTitle} primaryBtnText={commonCTAProps.primaryBtnText} secondaryBtnText={commonCTAProps.secondaryBtnText} />

        </div>
    );
};

export default ConsultationPage;