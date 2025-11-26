"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useUpdateTestimonialMutation } from "@/redux/features/testimonial/testimonial.api";
import type { ITestimonial } from "@/types";

interface ApprovalToggleProps {
  testimonial: ITestimonial;
}

const ApprovalToggle: React.FC<ApprovalToggleProps> = ({ testimonial }) => {
  const [updateTestimonial, { isLoading }] = useUpdateTestimonialMutation();
  const [approved, setApproved] = useState(testimonial.isApproved);

  const handleToggle = async (value: boolean) => {
    setApproved(value); // Optimistic UI update
    try {
      const res = await updateTestimonial({
        id: testimonial._id as string,
        data: { isApproved: value },
      }).unwrap();

      if (res.success) {
        toast.success(
          `Testimonial ${value ? "approved" : "disapproved"} successfully`
        );
      }
    } catch (err) {
      setApproved(!value); // Revert on error
      toast.error("Failed to update approval");
    }
  };

  return (
    <Switch
      checked={approved}
      onCheckedChange={handleToggle}
      disabled={isLoading}
    />
  );
};

export default ApprovalToggle;
