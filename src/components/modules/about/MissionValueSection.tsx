import { Award, Eye, Users } from "lucide-react";
import { MissionValueCard } from "./MissionValueCard";
import { HeroTextAnimation } from "../home/HeroTextAnimation";

export default function MissionValuesSection() {
    const values = [
        {
            icon: <Eye size={32} strokeWidth={2} />,
            title: 'Clarity',
            description:
                'Providing transparent, easy-to-understand financial insights that empower you to make informed decisions.',
        },
        {
            icon: <Award size={32} strokeWidth={2} />,
            title: 'Expertise',
            description:
                'Maintaining the highest standards of knowledge and compliance to deliver exceptional results.',
        },
        {
            icon: <Users size={32} strokeWidth={2} />,
            title: 'Partnership',
            description:
                'Working collaboratively to achieve your long-term goals and sustainable business growth.',
        },
    ];

    return (
        <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <HeroTextAnimation delay={0.1}>
                        <p className="text-[#5dbadb] text-sm sm:text-base font-medium mb-3 tracking-wide">
                            Our Foundation
                        </p>
                    </HeroTextAnimation>
                    <HeroTextAnimation delay={0.2}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002047] leading-tight">
                            Our Mission & Values
                        </h2>
                    </HeroTextAnimation>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {values.map((value, index) => (
                        <MissionValueCard
                            key={index}
                            icon={value.icon}
                            title={value.title}
                            description={value.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}