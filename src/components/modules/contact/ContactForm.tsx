"use client"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { z } from "zod";
import { Send } from "lucide-react";
import config from "@/config";
import { toast } from "sonner";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

const contactFormSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
});
export const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
        try {
            setLoading(true)
            const res = await fetch(`${config.baseUrl}/message`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Failed to send message");
            }

            const result = await res.json();

            if (result.success) {
                toast.success("Message successfully sent.")
                form.reset();

            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
        >
            <Card

                className="shadow-lg border p-4 py-4 md:py-6">
                <CardHeader className="pb-4 px-0 md:px-4">
                    <CardTitle className="text-2xl font-bold text-[#002047]">
                        <h3> Get in Touch</h3>
                    </CardTitle>
                    <CardDescription className="text-[#65758B] text-sm md:text-base">
                        Send us a message and we will respond within 24 business hours.
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-0 md:px-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#002047] font-medium">
                                            Full Name *
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your full name"
                                                {...field}
                                                className="border-gray-300 h-auto px-3 py-3 focus-visible:ring-[#5b7fa6]"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#002047] font-medium">
                                            Email Address *
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="you@example.com"
                                                {...field}
                                                className="border-gray-300 h-auto px-3 py-3 focus-visible:ring-[#5b7fa6]"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#002047] font-medium">
                                            Subject *
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="How can we help?"
                                                {...field}
                                                className="border-gray-300 h-auto px-3 py-3 focus-visible:ring-[#5b7fa6]"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#002047] font-medium">
                                            Message *
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell us about your accounting needs..."
                                                rows={5}
                                                {...field}
                                                className="border-gray-300 h-auto px-3 py-3 focus-visible:ring-[#5b7fa6] resize-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#4d5cac] hover:bg-[#5F6CB4] text-white cursor-pointer py-8 text-base font-medium"
                            >

                                {
                                    loading ? <Spinner className="ml-2 h-4 w-4" /> : <Send className="ml-2 h-4 w-4" />

                                }
                                {
                                    loading ? "Message Sending..." : "Send Message"

                                }
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </motion.div>
    );
};
