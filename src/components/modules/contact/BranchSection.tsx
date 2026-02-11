import { Clock, LocationEdit, Mail, MapPin, MapPinHouse, Phone } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { ISiteInfo } from "@/types";
import { BranchCard } from "./BranchCard";

export interface Props {
    contactInfo: ISiteInfo;
}
export default function BranchSection({ contactInfo }: Props) {
    return (
        <section className="w-full">
            <div className="container mx-auto  py-12 bg-white px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

                    {
                        contactInfo.branches?.map((branch, index) =>

                            <BranchCard
                                icon={<MapPin className="w-6 h-6 text-[#4D5CAC]" />}
                                backgroundColor="#EDEEF6"
                                title={branch.name}
                                content={branch.address}
                                delay={index * 0.2}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
}