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
      title: 'Xero Certified Partner',
      description: 'Achieved official Xero certification for cloud accounting excellence.',
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
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#EDEEF6] text-[#5b6ba8] text-sm font-medium px-4 py-2 rounded-full mb-4">
            Our Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a52] leading-tight">
            Our Achievements
          </h2>
        </div>

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