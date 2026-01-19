
"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {motion} from "framer-motion"

interface FAQCardProps {
    question: string;
    answer: string;
    index: number
}

export const FAQCard: React.FC<FAQCardProps> = ({ index, question, answer }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.15,
                duration: 0.5,
            }}
        >
            <Card
                className="border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">
                        {question}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {answer}
                    </CardDescription>
                </CardContent>
            </Card>
        </motion.div>
    );
};