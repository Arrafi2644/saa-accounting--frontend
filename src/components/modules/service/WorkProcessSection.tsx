import React from "react";
import { ProcessStepItem } from "./ProcessStepItem";
import { IProcessStep } from "@/types";

type Props = {
  steps: IProcessStep[];
};

export default function WorkProcessSection ({steps}: Props) {


  return (
    <section className="w-full bg-[#FBFBFC] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          {/* <div className="inline-block text-[#64D3F8] text-sm font-medium px-4 py-2 rounded-full mb-2 ">
           YOUR DEFENSE STRATEGY
          </div> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a52] leading-tight">
            Our {steps.length}-Step <span className="text-[#4D5CAC]">Process</span> 
          </h2>
        </div>

        <div className="relative">
          {steps.map((step, index) => (
            <ProcessStepItem
              key={index}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}