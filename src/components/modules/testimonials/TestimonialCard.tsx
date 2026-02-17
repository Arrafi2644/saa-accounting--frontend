import { Card, CardContent } from "@/components/ui/card";
import { ITestimonial } from "./AllTestimonialsSection";
import { motion } from "framer-motion";
import { Building2, MapPin, Quote, Star, User } from "lucide-react";

interface TestimonialCardProps {
  testimonial: ITestimonial;
  index: number
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ index, testimonial }) => {
  return (
   <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.2,
          duration: 1,
          y: {
            delay: 0.2,
            duration: 1,
            ease: "easeOut",
          },
        }}
    >

    
    <Card className="relative group bg-white border-3 h-full border-gray-200 hover:border-cyan-400  transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6">
        {/* Badge */}
        <div className="absolute -top-5 right-6 group-hover:scale-110 transition-all duration-500">
          <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm"><Quote size={18} /></span>
          </div>
        </div>

        {/* partnershipLabel */}
        <p className="text-cyan-400 px-4 py-2 rounded-full inline-block bg-[#EEFAFE] font-semibold text-base mb-5">
          {testimonial?.partnershipLabel}
        </p>

        {/* Rating */}
        <div className="flex gap-1 mb-4 ">
          {[...Array(testimonial?.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 group-hover:scale-102 transition-all duration-500 fill-cyan-400 text-cyan-400"
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6 line-clamp-4">
          {testimonial?.content}
        </p>

        {/* Client Info */}
        <div className="flex items-start gap-3 mb-4 group-hover:scale-102 transition-all duration-500">
          <div className="w-10 h-10 rounded-full  bg-linear-to-br from-[#4F65B6] to-[#64D3F8] flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">
              <User size={22} />
            </span>
          </div>
          <div className="flex-1 min-w-0 ">
            <p className="font-semibold text-gray-900 text-sm truncate">
              {testimonial?.clientName}
            </p>
            <p className="text-xs text-[#4D5CAC] font-medium truncate">
              {testimonial?.companyName}
            </p>
          </div>
        </div>

        {/* Location and Industry */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{testimonial?.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5" />
            <span>{testimonial?.industry}</span>
          </div>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
};