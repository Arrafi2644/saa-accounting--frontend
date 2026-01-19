import { Clock, LocationEdit, Mail, MapPin, MapPinHouse, Phone } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { ISiteInfo } from "@/types";
import { BranchCard } from "./BranchCard";

export interface Props {
    contactInfo: ISiteInfo;
}
export default function BranchSection() {
    return (
        <section className="w-full py-12 bg-white px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <BranchCard
                        icon={<MapPin className="w-6 h-6 text-[#4D5CAC]" />}
                        backgroundColor="#EDEEF6"
                        title="100 Maraetai School Road"
                        content="Maraetai 2018, New Zealand"
                        delay={0}
                    />
                    <BranchCard
                        icon={<MapPin className="w-6 h-6 text-[#4D5CAC]" />}
                        backgroundColor="#EDEEF6"
                        title="Tauranga "
                        content="196 Chadwick Road,Greerton,Tauranga"
                        delay={0.1}
                    />
                    <BranchCard
                        icon={<MapPin className="w-6 h-6 text-[#4D5CAC]" />}
                        backgroundColor="#EDEEF6"
                        title="New Plymouth"
                        content=" 2/8 Egmont St, Richmond Centre , New Plymouth"
                        delay={0.2}
                    />  
                      <BranchCard
                        icon={<MapPin className="w-6 h-6 text-[#4D5CAC]" />}
                        backgroundColor="#EDEEF6"
                        title="Christchurch"
                        content="2/4 O’Briens Road, Sockburn , Christchurch"
                        delay={0.3}
                    />  
                      <BranchCard
                        icon={<MapPin className="w-6 h-6 text-[#4D5CAC]" />}
                        backgroundColor="#EDEEF6"
                        title="Wellington"
                        content=" 11 Ebdentown Street, Upper Hutt, Wellington"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}