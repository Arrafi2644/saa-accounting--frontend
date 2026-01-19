"use client";

import { Button } from "@/components/ui/button";
import React from "react";

type SecondaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <Button
      size="lg"
      variant="outline"
      onClick={onClick}
      className={`cursor-pointer rounded-xl font-semibold text-base px-10 py-7 border-[#002047] border-2 text-[#002047] hover:text-white bg- hover:bg-[#002047] transition-all duration-200 active:scale-95 ${className}`}
    >
      {children}
    </Button>
  );
};
