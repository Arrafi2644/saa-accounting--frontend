"use client"
import React from 'react';
import { MapPin, Clock, Phone, Shield } from 'lucide-react';
import { motion } from "framer-motion"
import { ISiteInfo } from '@/types';
export interface Props {
    contactInfo: ISiteInfo;
}

export default function ContactInfoCard({ contactInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 1.5,
                ease: "easeOut",
            }}
            className="w-full">
            <div className="max-w-2xl mx-auto">
                <div className="relative bg-[#5B68B3] rounded-xl p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-700/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                        {/* Company Name */}
                        <div className="flex items-start gap-4 group">
                            <div className="shrink-0 mt-1">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-all duration-500 bg-indigo-400/30 group-hover:bg-indigo-400/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                    <MapPin className="w-5 h-5  sm:w-6 sm:h-6 text-cyan-300" strokeWidth={2} />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                    SAA Accounting Business Ltd
                                </h2>
                                <p className="text-indigo-100 text-sm sm:text-base">
                                    Head Office – Maraetai
                                </p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4 group">
                            <div className="shrink-0 mt-1">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-all duration-500 bg-indigo-400/30 group-hover:bg-indigo-400/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" strokeWidth={2} />
                                </div>
                            </div>
                            <div className="text-white">
                                <p className="text-base sm:text-lg font-medium leading-relaxed">
                                    Westfield Manukau, Shop 57
                                </p>
                                <p className="text-base sm:text-lg font-medium leading-relaxed">
                                    1 Leyton Way
                                </p>
                                <p className="text-base sm:text-lg font-medium leading-relaxed">
                                    Auckland, New Zealand
                                </p>
                            </div>
                        </div>

                        {/* In-Person Hours */}
                        <div className="flex items-center gap-4 group">
                            <div className="shrink-0">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-all duration-500 bg-indigo-400/30 group-hover:bg-indigo-400/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" strokeWidth={2} />
                                </div>
                            </div>
                            <p className="text-white text-base sm:text-lg font-medium">
                                In-Person: Thursdays Only
                            </p>
                        </div>

                        {/* Phone Numbers */}
                        <div className="flex items-center gap-4 group">
                            <div className="shrink-0">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-all duration-500 bg-indigo-400/30 group-hover:bg-indigo-400/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" strokeWidth={2} />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-white text-base sm:text-lg font-medium">
                                <a
                                    href={`tel:${contactInfo?.phone ?? "0279430700"}`}
                                    className="hover:text-cyan-300 transition-colors duration-200"
                                >
                                    {contactInfo?.phone ? contactInfo?.phone : "09 971 1783"}
                                </a>
                                {contactInfo?.supportPhone && (<span>

                                    <span className="text-indigo-200">|</span>
                                    <a
                                        href={`tel:${contactInfo.supportPhone}`}
                                        className="hover:text-cyan-300 transition-colors duration-200 ml-2"
                                    >
                                        {contactInfo.supportPhone}
                                    </a>
                                </span>
                                )}
                            </div>
                        </div>

                        {/* Confidentiality Notice */}
                        <div className="mt-8 pt-6 border-t border-indigo-400/30">
                            <div className="bg-indigo-500/30 backdrop-blur-sm rounded-xl p-4 sm:p-5">
                                <div className="flex items-start gap-3 group">
                                    <div className="shrink-0 mt-0.5">
                                        <Shield className="w-5 h-5 group-hover:scale-110 transition-all duration-500 text-cyan-300" strokeWidth={2} />
                                    </div>
                                    <p className="text-white text-sm sm:text-base leading-relaxed">
                                        All meetings are confidential and conducted in a private setting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}