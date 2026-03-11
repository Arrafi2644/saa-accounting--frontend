
import { IServiceOverview } from "@/types";
import ServiceOverViewContent from "./ServiceOverViewContent";
import SectionImage from "./SectionImage";

interface ServiceOverviewProps {
    overview: IServiceOverview;
}

export const ServiceOverview = ({ overview }: ServiceOverviewProps) => {
    return (
        <section className="py-20 xl:py-28 bg-white">
            <div className="container mx-auto overflow-hidden px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">          
                    <div>

                     <ServiceOverViewContent overview={overview} />
                    </div>
                <div className="overflow-hidden rounded-2xl">

                      <SectionImage overview={overview} />
                </div>
                </div>
            </div>
        </section>
    );
};
