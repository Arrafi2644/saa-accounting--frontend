import Image from 'next/image';
import { motion } from "framer-motion"
import { IServiceOverview } from '@/types';
interface ServiceOverviewProps {
    overview: IServiceOverview;
}
const SectionImage = ({ overview }: ServiceOverviewProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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