import { ISiteInfo } from "@/types";
import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";
import ContactInfoCard from "./ContactInfoCard";
import { ContactInfoMap } from "./ContactInfoMap";
export interface Props {
    contactInfo: ISiteInfo;
}

export default function ConsultContactSection({ contactInfo }: Props) {

    return (
        <div className="relative w-full  bg-white">
            <div className="container mx-auto  py-20 xl:py-28 px-4 md:px-6 lg:px-8">

                <AnimatedSectionHeader
                    tag="VISIT US"
                    heading="Auckland Office"
                    subtitle="Face-to-face meetings available on Thursdays at our Maraetai hub."
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <ContactInfoMap contactInfo={contactInfo} />
                    <ContactInfoCard contactInfo={contactInfo} />
                </div>
            </div>
        </div>
    );
}