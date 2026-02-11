import { Clock, Mail, Phone } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { ISiteInfo } from "@/types";

export interface Props {
    contactInfo: ISiteInfo;
}
export default function ContactInfoSection({ contactInfo }: Props) {
    return (
        <section className="w-full ">
            <div className="container mx-auto py-12 bg-white px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ContactCard
                        
                        icon={<Mail className="w-6 h-6 text-[#4D5CAC]  group" />}
                        backgroundColor="#EDEEF6"
                        title="Email Us"
                        content={contactInfo.mainEmail ? contactInfo.mainEmail : "office@saaaccounting.co.nz"}
                        delay={0}
                    />
                    <ContactCard
                        icon={<Phone className="w-6 h-6 text-[#56CDF5]" />}
                        backgroundColor="#EDEEF6"
                        title="Call Us"
                        content={` ${contactInfo?.phone ? contactInfo?.phone : "027 943 0700"}`}
                        delay={0.2}
                    />
                    <ContactCard
                        icon={<Clock className="w-6 h-6 text-[#4D5CAC]" />}
                        backgroundColor="#EDEEF6"
                        title="Operating Hours"
                        content="Monday – Friday, 9:00 AM – 4:00 PM"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}