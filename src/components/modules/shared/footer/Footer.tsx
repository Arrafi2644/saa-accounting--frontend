"use client"
import { motion } from "framer-motion"
import { Linkedin, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { IService, ISiteInfo } from "@/types";

interface Props {
  siteInfo: ISiteInfo,
  services: IService[]
}

export const Footer = ({ siteInfo, services }: Props) => {
  return (
    <footer className="w-full bg-[#0a2540] text-white border-t border-gray-700">
      {/* Main Footer Content */}
      <div className="container mx-auto overflow-hidden px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.1 }}
          >
            <div >
              <div className="flex items-center gap-3">
                <Link href="/">
                  <Image
                    src={siteInfo.footerLogo || siteInfo.mainLogo}
                    alt={`${siteInfo.siteTitle} Logo`}
                    width={140}
                    height={140}
                    priority
                    className="hover:scale-105 transition-all duration-300"
                  />
                </Link>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {siteInfo.siteTagline || "Strategic financial clarity for small to medium-sized businesses."}
              </p>

              {/* Social Links */}
              <div className="flex gap-3 mt-6 lg:mt-8">
                {siteInfo.linkedin && (
                  <div className="bg-[#1a3a52] hover:bg-[#11436B] p-3 hover:scale-110 transition-all duration-300 rounded-lg ">
                    <a
                      href={siteInfo.linkedin}
                      className=" hover:scale-105  rounded-lg flex items-center justify-center"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                )}
                {siteInfo.facebook && (
                  <div className="bg-[#1a3a52] hover:bg-[#11436B] p-3 hover:scale-110 transition-all duration-300 rounded-lg ">

                    <a
                      href={siteInfo.facebook}
                      className=" hover:scale-105  rounded-lg flex items-center justify-center"
                      aria-label="Facebook"
                      >
                      <Facebook size={18} />
                    </a>
                  </div>
                )}
                {siteInfo.instagram && (
                  <div className="bg-[#1a3a52] hover:bg-[#11436B] p-3 hover:scale-110 transition-all duration-300 rounded-lg ">
                  <a
                    href={siteInfo.instagram}
                    className=" hover:scale-105  rounded-lg flex items-center justify-center"
                    aria-label="Instagram"
                    >
                    <Instagram size={18} />
                  </a>
                    </div>
                )}

              </div>
            </div>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.2 }}
          >
            <div>
              <h4 className="text-lg font-bold mb-4 md:mb-6">Our Services</h4>
              <ul className="space-y-3">
                {
                  services.map(service => (
                    <li key={service._id}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-sm inline-block text-gray-300 hover:translate-x-2 hover:text-[#64D3F8] transition-all duration-300"
                      >
                        {service.title} {/* dynamic title */}
                      </Link>
                    </li>
                  ))
                }

              </ul>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.3 }}
          >
            <div>
              <h4 className="text-lg font-bold mb-4 md:mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-sm inline-block text-gray-300 hover:translate-x-2  hover:text-[#64D3F8] transition-all duration-300">About Us</Link></li>
                <li><Link href="/services" className="text-sm inline-block text-gray-300 hover:translate-x-2  hover:text-[#64D3F8] transition-all duration-300">Our Services</Link></li>
                <li><Link href="/" className="text-sm inline-block text-gray-300 hover:translate-x-2  hover:text-[#64D3F8] transition-all duration-300">Our Process</Link></li>
                <li><Link href="/testimonials" className="text-sm inline-block hover:translate-x-2  text-gray-300 hover:text-[#64D3F8] transition-all duration-300">Testimonials</Link></li>
                <li><Link href="/contact" className="text-sm inline-block hover:translate-x-2  text-gray-300 hover:text-[#64D3F8] transition-all duration-300">Contact</Link></li>
                <li><Link href="/join-us" className="text-sm inline-block hover:translate-x-2  text-gray-300 hover:text-[#64D3F8] transition-all duration-300">Join as Client</Link></li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.4 }}
          >
            <div>
              <h4 className="text-lg font-bold mb-4 md:mb-6">Contact Us</h4>
              <div className="space-y-4">
                <a href={`tel:${siteInfo.phone}`} className="flex hover:translate-x-2 transition-all items-center gap-3 text-sm text-gray-300 hover:text-[#64D3F8]  duration-300 group">
                  <div className="w-10 h-10 bg-[#1a3a52] rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"><Phone size={18} /></div>
                  <span>{siteInfo.phone}</span>
                </a>

                <a href={`mailto:${siteInfo.mainEmail}`} className="flex items-center hover:translate-x-2 gap-3 text-sm text-gray-300 hover:text-[#64D3F8] transition-all duration-300 group">
                  <div className="w-10 h-10 bg-[#1a3a52] rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"><Mail size={18} /></div>
                  <span>{siteInfo.mainEmail}</span>
                </a>

                <div className="flex items-start gap-3 text-sm hover:translate-x-2 text-gray-300 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#1a3a52] rounded-lg flex items-center justify-center shrink-0"><MapPin size={18} /></div>
                  <div className="leading-relaxed">
                    <p>{siteInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0.4 }}
      >
        <div className="border-t border-gray-700">
          <div className="container mx-auto overflow-hidden py-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">© 2026 {siteInfo.siteTitle}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm hover:-mt-1 text-gray-400 hover:text-[#64D3F8] transition-all duration-300">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-sm hover:-mt-1 text-gray-400 hover:text-[#64D3F8] transition-all duration-300">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
