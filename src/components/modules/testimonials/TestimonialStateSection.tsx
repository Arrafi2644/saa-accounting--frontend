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
   <section className="w-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 relative overflow-hidden"
    style={{
        background: "linear-gradient(to right, #0c2541, #2c5985f2, #0c2541)",
      }}
   >
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
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
