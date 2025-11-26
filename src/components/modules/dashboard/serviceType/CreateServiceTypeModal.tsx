"use client";

import { useId, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useCreateServiceTypeMutation } from "@/redux/features/serviceType/serviceType.api";


const serviceTypeSchema = z.object({
  name: z.string().min(2, "Service type name must be at least 2 characters"),
  description: z.string().min(2, "Service type description must be at least 2 characters"),
});

type ServiceTypeValues = z.infer<typeof serviceTypeSchema>;


export default function CreateServiceTypeModal() {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [createServiceType, { isLoading }] = useCreateServiceTypeMutation();

  const form = useForm<ServiceTypeValues>({
    resolver: zodResolver(serviceTypeSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: ServiceTypeValues) => {
    try {
      const res = await createServiceType(data).unwrap();

      if (res.success) {
        toast.success("Service type created successfully!");
        form.reset();
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to create service type");
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-0 h-4 w-4" />
          Add Service Type
        </Button>
      </DialogTrigger>

      <DialogContent className="space-y-4 min-w-[280px]">
        <div className="flex flex-col items-center gap-2">
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              Create Service Type
            </DialogTitle>
            <p className="text-sm text-muted-foreground sm:text-center">
              Add a new service type to your system.
            </p>
          </DialogHeader>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={`${id}-name`}>Service Type Name</FormLabel>
                  <FormControl>
                    <Input
                      id={`${id}-name`}
                      placeholder="Ex: Plumbing, Electrical, Cleaning"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={`${id}-description`}>
                    Description (optional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      id={`${id}-description`}
                      placeholder="Short description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Service Type"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
