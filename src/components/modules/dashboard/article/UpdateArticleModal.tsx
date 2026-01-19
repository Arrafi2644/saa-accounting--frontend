"use client";

import { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
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
import { toast } from "sonner";
import { useUpdateArticleMutation } from "@/redux/features/article/article.api";
import { IArticle } from "@/types";

const articleUpdateSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(10, "Description is required"),
  category: z.string().min(1, "Category is required"),
  icon: z.string().min(1, "Icon is required"),
  readTime: z
    .number()
    .min(1, "Read time must be at least 1 minute"),
});

type UpdateArticleFormValues = z.infer<typeof articleUpdateSchema>;

interface UpdateArticleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  article: IArticle;
}

export default function UpdateArticleModal({
  open,
  onOpenChange,
  article,
}: UpdateArticleModalProps) {
  const [updateArticle, { isLoading }] = useUpdateArticleMutation();

  const form = useForm<UpdateArticleFormValues>({
    resolver: zodResolver(articleUpdateSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      icon: "",
      readTime: 1,
    },
  });

  // Reset form when modal opens or article changes
  useEffect(() => {
    if (open && article) {
      form.reset({
        title: article.title,
        description: article.description,
        category: article.category,
        icon: article.icon,
        readTime: article.readTime,
      });
    }
  }, [article, open, form]);

  const onSubmit = async (data: UpdateArticleFormValues) => {
    try {
      const payload = {
        ...data,
        readTime: Number(data.readTime), // ensure number
      };
      const res = await updateArticle({ id: article._id, data: payload }).unwrap();
      if (res.success) {
        await fetch("/api/revalidate/articles", { method: "POST" });
        toast.success("Article updated successfully");
        onOpenChange(false);
      }
    } catch (err) {
      toast.error("Failed to update article");
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md space-y-4">
        <DialogHeader>
          <DialogTitle>Update Article</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Article title" />
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
                    <Input {...field} placeholder="Article description" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Category */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Article category" />
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

            {/* Read Time */}
            <FormField
              control={form.control}
              name="readTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Read Time (minutes)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={1}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      placeholder="Enter read time in minutes"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="pt-2">
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Updating..." : "Update Article"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
