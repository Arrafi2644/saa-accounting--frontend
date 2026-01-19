"use client"
import { IServiceOverview } from "@/types";
import ServiceOverViewContent from "./ServiceOverViewContent";
import SectionImage from "./SectionImage";

interface ServiceOverviewProps {
    overview: IServiceOverview;
}

export const ServiceOverview = ({ overview }: ServiceOverviewProps) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">          
                     <ServiceOverViewContent overview={overview} />
                      <SectionImage overview={overview} />
                </div>
            </div>
        </section>
    );
};
