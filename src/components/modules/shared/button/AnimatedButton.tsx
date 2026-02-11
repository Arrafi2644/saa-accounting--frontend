"use client"

import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"

export function AnimatedButton() {
  return (
    <Button
      className="
        group flex items-center gap-2
        !px-6 py-6.5 font-semibold
        text-white rounded-lg
        bg-linear-to-r from-[#4E5CAD] to-[#56CDF5]
        shadow-md
        transition-all duration-300
        hover:bg-linear-to-l
        hover:shadow-lg hover:scale-105
        cursor-pointer w-full xl:w-auto text-base
        border
      "
    >
      <span>Join as a Client</span>
      <MoveRight className="w-4 h-4 arrow-animate" />
    </Button>
  )
}
