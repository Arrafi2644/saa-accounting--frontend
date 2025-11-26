/* eslint-disable @typescript-eslint/no-explicit-any */
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
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";
import { useUpdateServiceTypeMutation } from "@/redux/features/serviceType/serviceType.api";
import { IServiceType } from "@/types";

// ⭐ Zod Schema
const updateServiceTypeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

type TUpdateServiceType = z.infer<typeof updateServiceTypeSchema>;

interface UpdateServiceTypeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: IServiceType;
}

export default function UpdateServiceTypeModal({
  open,
  onOpenChange,
  data,
}: UpdateServiceTypeModalProps) {
  const [updateServiceType, { isLoading }] = useUpdateServiceTypeMutation();

  const form = useForm<TUpdateServiceType>({
    resolver: zodResolver(updateServiceTypeSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  // 🔥 Reset form with existing values when modal opens
  useEffect(() => {
    if (open && data) {
      form.reset({
        name: data.name || "",
        description: data.description || "",
      });
    }
  }, [open, data, form]);

  // ⭐ Submit Handler
  const onSubmit = async (formData: TUpdateServiceType) => {
    try {
      await updateServiceType({
        id: data._id as string,
        data: formData,
      }).unwrap();

      toast.success("Service Type updated successfully");
      onOpenChange(false);
      form.reset();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update service type");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle>Edit Service Type</DialogTitle>
          <DialogDescription>
            Update service type information
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 py-4"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter service type name" {...field} />
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
                  <FormLabel>Description (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter description"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Service Type"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
