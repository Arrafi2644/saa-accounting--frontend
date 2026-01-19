"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

import { toast } from "sonner";
import { useUpdateToolMutation } from "@/redux/features/tool/tool.api";
import { ITool } from "@/types";

// Zod schema
const updateToolSchema = z.object({
    title: z.string().min(3, "Title is required"),
    description: z.string().min(10, "Description is required"),
    icon: z.string().min(1, "Icon is required"),
    status: z.enum(["active", "inactive"] as const)
});

type UpdateToolForm = z.infer<typeof updateToolSchema>;

interface UpdateToolModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    tool: ITool;
}

export default function UpdateToolModal({ open, onOpenChange, tool }: UpdateToolModalProps) {
    const [updateTool, { isLoading }] = useUpdateToolMutation();

    const form = useForm<UpdateToolForm>({
        resolver: zodResolver(updateToolSchema),
        defaultValues: {
            title: "",
            description: "",
            icon: "",
            status: "active",
        },
    });

    useEffect(() => {
        if (open && tool) {
            form.reset({
                title: tool.title,
                description: tool.description,
                icon: tool.icon,
                status: tool.status,
            });
        }
    }, [tool, open, form]);

    const onSubmit = async (data: UpdateToolForm) => {
        try {
            const res = await updateTool({ id: tool._id!, data }).unwrap();
            if (res.success) {
                await fetch("/api/revalidate/tools", { method: "POST" });
                toast.success("Tool updated successfully");
                onOpenChange(false);
                form.reset();
            }
        } catch {
            toast.error("Failed to update tool");
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Edit Tool</DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
                        {/* Title */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Tool title" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Tool description" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Icon */}
                        <FormField
                            control={form.control}
                            name="icon"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Icon URL</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Icon URL" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Status */}
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value || "active"} // ✅ controlled value
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="active">Active</SelectItem>
                                                <SelectItem value="inactive">Inactive</SelectItem>
                                            </SelectContent>
                                        </Select>

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className="w-full" disabled={isLoading}>
                            {isLoading ? "Updating..." : "Update Tool"}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
