import { NewsletterSection } from '@/components/modules/home/NewsletterSection';
import { Footer } from '@/components/modules/shared/footer/Footer';
import { AnnouncementBar } from '@/components/modules/shared/header/AnnouncementBar';
import { Navbar } from '@/components/modules/shared/header/Navbar';
import { serverFetch } from '@/lib/server-fetch';
;

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {

    const res = await serverFetch.get("/site-info", ["SITEINFO"])
    const sitInfoRes = await res.json()
    const siteInfo = sitInfoRes.data;

    const serviceApiRes = await serverFetch.get("/service", ["SERVICES"])
    const servicesResponse = await serviceApiRes.json()
    const services = servicesResponse.data;

    return (
        <div>
            <AnnouncementBar siteInfo={siteInfo} />
            <Navbar siteInfo={siteInfo} services={services} />
            <main className="min-h-dvh">
                {children}
            </main>
            <NewsletterSection />
            <Footer siteInfo={siteInfo} services={services} />
        </div>
    );
};

export default CommonLayout;