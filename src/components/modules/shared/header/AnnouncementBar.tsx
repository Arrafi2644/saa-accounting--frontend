"use client"
import { ISiteInfo } from "@/types";
import { motion } from "framer-motion"
import { Facebook, Linkedin, Instagram, Phone } from 'lucide-react';

interface Props {
  siteInfo: ISiteInfo
}

export function AnnouncementBar({ siteInfo }: Props) {

  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      <div className=" bg-[#0C2541]  text-[#FFFFFF] text-xs sm:text-sm border-b border-gray-200">
        <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="font-medium text-center sm:text-left">
            Providing Trusted Accounting Solutions Since 2013.
          </div>

          <div className="flex items-center gap-6">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={siteInfo?.facebook}
                className="text-[#FFFFFF] hover:text-[#65758B] transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={16} />
              </a>

              <a
                href={siteInfo?.linkedin}
                className="text-[#FFFFFF] hover:text-[#65758B] transition-colors duration-300 ease-in-out"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </a>

              <a
                href={siteInfo?.instagram}
                className="text-[#FFFFFF] hover:text-[#65758B] transition-colors duration-300 ease-in-out"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
              </a>
            </div>

            {/* Phone number */}
            <div className="flex items-center gap-2 font-medium text-[#FFFFFF]] hover:text-[#5a6a82] transition-colors duration-300 ease-in-out">
              <Phone size={14} className="text-gold" />
              <a href={`tel:${siteInfo?.phone}`}>{siteInfo?.phone ? siteInfo?.phone : "09 390 5576"}</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}