"use client"
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { ISiteInfo } from "@/types";
export interface Props {
    contactInfo: ISiteInfo;
}
// Contact Info Component
export const ContactInfo = ({ contactInfo }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-[#002047] mb-3">
                    Serving New Zealand Nationwide
                </h2>
                <p className="text-[#65758B] text-sm md:text-base leading-relaxed">
                    While our headquarters are in Maraetai, we provide expert virtual
                    assistance and on-site visits to clients in Auckland, Christchurch,
                    Tauranga, Napier, New Plymouth, and beyond.
                </p>
            </div>

            <div className="bg-[#F6F7FB] rounded-lg p-6 border">
                <div className="flex items-start gap-4">
                    <div className="bg-[#E5E7F2] rounded-lg p-3 shadow-sm">
                        <MapPin className="h-6 w-6 text-[#4d5cac]" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#002047] mb-1">
                            {contactInfo?.siteTitle ? contactInfo?.siteTitle : "SAA Accounting Business Ltd"}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-[#65758B] mb-3">
                            <MapPin className="h-4 w-4" />
                            <span>Consultant</span>
                        </div>
                        <p className="text-[#002047] font-medium text-sm mb-1">
                            {contactInfo?.address ? contactInfo?.address : "100 Maraetai School Road, Maraetai 2018, New Zealand"}
                        </p>
                        <p className="text-[#65758B] text-sm">
                            Monday – Friday, 9:00 AM – 4:00 PM
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
                <iframe
                    src={contactInfo?.mapEmbedUrl ? contactInfo?.mapEmbedUrl : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.268037562979!2d175.02584047457597!3d-36.88393558146975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d72b679f52efd0f%3A0x590a54f16897cf6d!2s100%20Maraetai%20School%20Road%2C%20Maraetai%202018%2C%20New%20Zealand!5e0!3m2!1sen!2sbd!4v1766818931091!5m2!1sen!2sbd"}
                    className="w-full h-full border"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
        </motion.div>
    );
};