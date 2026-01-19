import { Star, Briefcase, MapPin } from 'lucide-react';
import { StatItem } from './StateItem';
import { ITestimonial } from '@/types';
interface AllTestimonialsSectionProps {
  testimonials: ITestimonial[];
}
export const TestimonialStatSection: React.FC<AllTestimonialsSectionProps> = ({ testimonials }) => {
  const totalRating = testimonials.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rating,
    0,
  );

  const averageRating = Number((totalRating / testimonials.length).toFixed(1));

  const stats = [
    {
      icon: <Star className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />,
      value: averageRating,
      label: 'Average Rating',
        suffix: ""
    },
    {
      icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />,
      value: 500,
      label: 'Businesses Served',
        suffix: "+"
    },
    {
      icon: <MapPin className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />,
      value: "NZ Wide",
      label: 'Nationwide Coverage',
      suffix: ""
    },
  ];

  return (
    <section className="w-full bg-linear-to-r from-cyan-400 to-blue-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-cyan-300/30">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              index={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
