/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useUpdateTestimonialMutation } from "@/redux/features/testimonial/testimonial.api";
import type { ITestimonial } from "@/types";

interface FeaturedToggleProps {
  testimonial: ITestimonial;
}

const FeaturedToggle: React.FC<FeaturedToggleProps> = ({ testimonial }) => {
  const [updateTestimonial, { isLoading }] = useUpdateTestimonialMutation();
  const [featured, setFeatured] = useState(testimonial.isFeatured);

  const handleToggle = async (value: boolean) => {
    setFeatured(value);

    try {
      const res = await updateTestimonial({
        id: testimonial._id as string,
        data: { isFeatured: value },
      }).unwrap();

      if (res.success) {
        await fetch("/api/revalidate/testimonials", { method: "POST" });
        toast.success(
          `Testimonial ${value ? "featured" : "unfeatured"} successfully`
        );
      }
    } catch (err) {
      setFeatured(!value);
      toast.error("Failed to update featured status");
    }
  };

  return (
    <Switch
      checked={featured}
      onCheckedChange={handleToggle}
      disabled={isLoading}
    />
  );
};

export default FeaturedToggle;
