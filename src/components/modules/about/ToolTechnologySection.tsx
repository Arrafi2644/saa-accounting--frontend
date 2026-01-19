import { Cloud, File, X } from "lucide-react";
import { ToolCard } from "./ToolCard";

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
        <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block bg-[#e8eaf5] text-[#5b6ba8] text-sm font-medium px-4 py-2 rounded-full mb-4">
                        Technology
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a52] mb-4 leading-tight">
                        Our Tools & Technology
                    </h2>
                    <p className="text-[#6b7280] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        We leverage cutting-edge cloud accounting solutions for security, automation,
                        and real-time data access.
                    </p>
                </div>

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