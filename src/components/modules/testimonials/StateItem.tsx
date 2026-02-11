"use client"
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItemProps {
    index: number;
    icon: React.ReactNode;
    value: number | string;
    label: string;
    suffix: string;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
    })
    useEffect(() => {
        if (!isInView) return
        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0
        const timer = setInterval(() => {
            current += increment
            if (current >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, duration / steps)
        return () => clearInterval(timer)
    }, [isInView, value])
    return (
        <span ref={ref}>
            {count.toLocaleString()}
            {suffix}
        </span>
    )
}

export const StatItem: React.FC<StatItemProps> = ({ index, icon, value, label, suffix }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 , duration: 1}}
            className="flex flex-col items-center justify-center px-4 py-6 sm:py-8">
            <div className="flex items-center gap-2 mb-2">
                <div className="text-white">{icon}</div>
                <span className="text-2xl md:text-3xl font-bold text-white">
                    {typeof value === "number" ? (
                        <Counter value={value} suffix={suffix || ""} />
                    ) : (
                        value
                    )}
                </span>
            </div>
            <p className="text-sm sm:text-base text-white">
                {label}
            </p>
        </motion.div>
    );
};