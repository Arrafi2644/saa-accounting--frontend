"use client"
import Image from 'next/image';
import { motion } from "framer-motion"
import { IServiceOverview } from '@/types';
interface ServiceOverviewProps {
    overview: IServiceOverview;
}
const SectionImage = ({ overview }: ServiceOverviewProps) => {
    return (
<motion.div
  initial={{ opacity: 0, x: 150 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05 }}
  transition={{
    opacity: { duration: 1, ease: "easeOut" },
    x: { duration: 1, delay: 0.2, ease: "easeOut" },
    scale: { duration: 0.5, ease: "easeOut" },
  }}
  className="relative h-[400px] bg-gray-50 rounded-2xl overflow-hidden shadow-xl"
>
  <Image
    src={overview.serviceImage as string}
    alt={overview.title}
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
</motion.div>



    );
};

export default SectionImage;