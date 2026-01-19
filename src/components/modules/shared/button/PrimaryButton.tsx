"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
}) => {
  return (
    <Button
      size="lg"
      className={`box-border group text-base rounded-xl font-semibold cursor-pointer transition-all duration-300 active:scale-95 !px-10 py-7 text-[#002047] border flex items-center justify-center ${className}`}
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  );
};
