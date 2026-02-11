"use client"
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { ISiteInfo } from "@/types";
export interface Props {
    contactInfo: ISiteInfo;
}
// Contact Info Component
export const ContactInfoMap = ({ contactInfo }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            className="space-y-6">

            <div className="w-full h-[540px] rounded-lg overflow-hidden shadow-md">
                <iframe
                    src={contactInfo?.mapEmbedUrl ? contactInfo?.mapEmbedUrl : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.268037562979!2d175.02584047457597!3d-36.88393558146975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d72b679f52efd0f%3A0x590a54f16897cf6d!2s100%20Maraetai%20School%20Road%2C%20Maraetai%202018%2C%20New%20Zealand!5e0!3m2!1sen!2sbd!4v1766818931091!5m2!1sen!2sbd"}
                    // src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.268037562979!2d175.02584047457597!3d-36.88393558146975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d72b679f52efd0f%3A0x590a54f16897cf6d!2s100%20Maraetai%20School%20Road%2C%20Maraetai%202018%2C%20New%20Zealand!5e0!3m2!1sen!2sbd!4v1766818931091!5m2!1sen!2sbd"
                    className="w-full h-full border"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
        </motion.div>
    );
};