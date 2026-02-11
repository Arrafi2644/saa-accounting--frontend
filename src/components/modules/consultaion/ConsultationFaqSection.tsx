import HowToPrepare from "./ConsultationFaqLeft";
import { ConsultantFaqRight } from "./ConsultationFaqRight";

export default function ConsultationFaqSection() {

    return (
        <div  className="relative w-full  bg-[#FBFBFC]">
            <div className="container mx-auto py-20 xl:py-28 px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
                    <HowToPrepare />
                    <ConsultantFaqRight />
                </div>
            </div>
        </div>
    );
}