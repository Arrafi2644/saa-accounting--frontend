import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";
import { TimelineItem } from "./TimelineItem";

export default function AchievementsSection() {
  const achievements = [
    {
      year: '2013',
      title: 'Founded SAA Accounting',
      description: 'Established to serve small to medium-sized businesses in New Zealand.',
    },
    {
      year: '2018',
      title: '100+ Clients Milestone',
      description: 'Reached our first major client milestone through trusted partnerships.',
    },
    {
      year: '2019',
      title: 'Xero certified and MYOB Partners',
      description: 'Achieved official Xero certification and MYOB Partners for cloud accounting excellence.',
    },
    {
      year: '2023',
      title: '500+ Clients Served',
      description: 'Expanded our reach to serve hundreds of thriving businesses.',
    },
    {
      year: '2024',
      title: 'Platinum Partner Status',
      description: 'Recognized as a leading accounting firm in the region.',
    },
  ];

  return (
    <section className="w-full bg-white py-20 xl:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        <AnimatedSectionHeader
          tag="Our Journey"
          heading="Our Achievements"
        />

        {/* Timeline */}
        <div className="relative">
          {achievements.map((achievement, index) => (
            <TimelineItem
              key={index}
              year={achievement.year}
              title={achievement.title}
              description={achievement.description}
              index={index}
              isLast={index === achievements.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}