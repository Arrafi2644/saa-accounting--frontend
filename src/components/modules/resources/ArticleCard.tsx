"use client"
import {motion} from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ExternalLink, Tag } from "lucide-react";
import Link from "next/link";
import { DynamicLucideIcon } from "../shared/dynamicIcon/DynamicLucideIcon";
import { Badge } from "@/components/ui/badge";


interface ArticleCardProps {
    title: string;
    description: string;
    category: string;
    icon: string;
    readTime: number;
    index: number
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
    title,
    description,
    category,
    icon,
    readTime,
    index
}) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            transition={{
                delay: index * 0.15,
                duration: 0.5,
                y: {
                    delay: 0.5,
                    duration: 0.3,
                    ease: "easeOut",
                }
            }}>
            <Card
                className="group h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-gray-200 hover:border-blue-300"
            >
                <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                        <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                            <DynamicLucideIcon
                                iconName={icon}
                                size={20}
                                className="text-[#4D5CAC] "
                            />
                        </div>
                        <div className="flex items-center text-[#65758B]">
                            <Tag size={14} />
                            <Badge className="bg-white text-[#65758B] text-sm">{category}</Badge>
                        </div>
                    </div>

                    <CardTitle className="text-xl font-bold text-[#002047] group-hover:text-[#4D5CAC] transition-colors">
                        <h3>{title}</h3>
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 flex flex-col justify-between h-full">
                    <CardDescription className="text-gray-600 leading-relaxed">
                        {description}
                    </CardDescription>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1.5 mb-1" />
                            {readTime} min read
                        </div>

                        <Link className='flex items-center transition-all duration-300' href="#">
                            <span className="text-sm text-[#4D5CAC] font-medium group-hover:-translate-x-1 transition-transform">
                                Read More
                            </span>
                            <ExternalLink className="w-3 h-3 ml-1 " />
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};
