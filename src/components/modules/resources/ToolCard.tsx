"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DynamicLucideIcon } from "../shared/dynamicIcon/DynamicLucideIcon";
import { Button } from "@/components/ui/button";


interface ToolCardProps {
    title: string;
    description: string;
    icon: string;
    status: string;
    index: number
}

export const ToolCard: React.FC<ToolCardProps> = ({
    title,
    description,
    icon,
    status,
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
                className="group h-full hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-blue-300"
            >
                <CardHeader className="space-y-4  flex flex-col items-center justify-center">
                    <div className="p-3 group-hover:scale-110 transition-all duration-300 ease-in-out bg-blue-50 rounded-lg group-hover:bg-blue-100">
                        <DynamicLucideIcon
                            iconName={icon}
                            size={26}
                            className="text-[#64D3F8] "
                        />
                    </div>

                    <CardTitle className="text-xl text-center font-semibold text-[#002047]">
                        <h3>{title}</h3>
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 flex flex-col justify-between items-center h-full">
                    <CardDescription className="text-gray-600 leading-relaxed">
                        {description}
                    </CardDescription>
                    <Button
                    variant={"outline"}
                    className="max-w-fit rounded-full cursor-pointer hover:bg-[#64D3F8] border-[#64D3F8] text-[#64D3F8] hover:text-white transition-colors duration-300 ease-in-out "
                    >
                        {status==="inactive"? "Coming Soon" : "Explore"}
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );
};
