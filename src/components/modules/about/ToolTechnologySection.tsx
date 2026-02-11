import { Cloud, File, X } from "lucide-react";
import { ToolCard } from "./ToolCard";
import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";

export default function ToolsTechnologySection() {
    const tools = [
        {
            icon: <X size={32} strokeWidth={2} />,
            title: 'Xero',
            description:
                'Cloud-based accounting software for seamless financial management and reporting.',
        },
        {
            icon: <File size={32} strokeWidth={2} />,
            title: 'MYOB',
            description:
                'Comprehensive business management and accounting solutions for all sizes.',
        },
        {
            icon: <Cloud size={32} strokeWidth={2} />,
            title: 'Cloud Solutions',
            description:
                'Secure, automated systems ensuring accuracy, transparency, and peace of mind.',
        },
    ];

    return (
        <section className="w-full bg-white py-20 xl:py-28 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto ">
                <AnimatedSectionHeader tag=" Technology"
                heading=" Our Tools & Technology"
                subtitle="We leverage cutting-edge cloud accounting solutions for security, automation,
                        and real-time data access."
                >

                </AnimatedSectionHeader>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {tools.map((tool, index) => (
                        <ToolCard
                            key={index}
                            icon={tool.icon}
                            title={tool.title}
                            description={tool.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}