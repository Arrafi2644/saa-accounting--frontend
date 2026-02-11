"use client";

import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Clock, Lock, Shield, Headphones } from "lucide-react";

export default function WhyRegister() {
    const benefits = [
        {
            icon: Clock,
            title: "24-Hour Response",
            description: "Dedicated Account Manager assigned within 24 hours",
            color: "bg-[#EEFAFE]",
            iconColor: "text-[#56CDF5]",
        },
        {
            icon: Lock,
            title: "Seamless Integration",
            description: "Easy integration with Xero/MYOB",
            color: "bg-[#EEFAFE]",
            iconColor: "text-[#56CDF5]",
        },
        {
            icon: Shield,
            title: "100% Secure",
            description: "Confidential & secure data handling",
            color: "bg-[#EEFAFE]",
            iconColor: "text-[#56CDF5]",
        },
        {
            icon: Headphones,
            title: "Ongoing Support",
            description: "Dedicated support throughout the year",
            color: "bg-[#EEFAFE]",
            iconColor: "text-[#56CDF5]",
        },
    ];

    return (
        <div className="sticky top-24 ">
            <div className="container mx-auto overflow-hidden space-y-6">
                {/* Why Register Card */}
                <Card className="border rounded-lg shadow-lg">
                    <CardHeader className="pb-0">
                        <CardTitle className="text-xl font-bold text-[#002047]">
                            <h3>Why Register with SAA?</h3>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div
                                        className={`${benefit.color} rounded-lg p-3 shrink-0 group-hover:scale-110 transition-all duration-500`}
                                    >
                                        <Icon className={`h-6 w-6 ${benefit.iconColor}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-[#1f2937] mb-1 group-hover:text-lg transition-all duration-500">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </CardContent>
                </Card>

                {/* Your Data is Secure Card */}
                <Card className="border rounded-lg shadow-lg bg-[#F2F4F9] group">
                    <CardHeader className="pb-4 ">
                        <div className="flex items-center gap-2 mb-2 ">
                            <Shield className="h-5 w-5 text-[#5664B0] group-hover:scale-115 transition-all duration-500" />
                            <CardTitle className=" font-bold text-[#002047] group-hover:text-lg transition-all duration-500">
                                <h3>Your Data is Secure</h3>
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-700 leading-relaxed mb-6">
                            We use enterprise-grade 256-bit encryption. SAA Accounting
                            Services Ltd complies strictly with the New Zealand Privacy Act
                            2020. Your information is never shared with third parties.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                            <div className="flex items-center gap-2">
                                <Lock className="h-4 w-4 text-gray-500" />
                                <span className="font-medium text-xs">SSL Secured</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4 text-gray-500" />
                                <span className="font-medium text-xs">Privacy Act 2020</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}