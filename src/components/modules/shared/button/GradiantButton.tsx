"use client";

import React, { ReactNode } from "react";
import { MoveRight } from "lucide-react";

type GradientButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "outline"; // Button type
};

const GradientButton = ({
  children,
  icon,
  onClick,
  disabled= false,
  className = "",
  variant = "primary",
}: GradientButtonProps) => {
  const baseClasses =
    "group relative px-8 py-4 flex items-center gap-2 font-semibold overflow-hidden text-sm transition-all duration-500 !rounded-[8px]";

  const variantClasses =
    variant === "primary"
      ? "simple-gradient-btn"
      : "outline-gradient-btn";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      disabled={disabled}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon ? (
          icon
        ) : (
          <MoveRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
        )}
      </span>
    </button>
  );
};

export default GradientButton;
