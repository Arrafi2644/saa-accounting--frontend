import React from "react";
import { ProcessStepItem } from "./ProcessStepItem";
import { IProcessStep } from "@/types";
import AnimatedSectionHeader from "../animations/AnimatedSectionHeader";

type Props = {
  steps: IProcessStep[];
};

export default function WorkProcessSection ({steps}: Props) {


  return (
    <section className="w-full bg-[#FBFBFC] py-20  xl:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">


            <AnimatedSectionHeader
             tag="WORK PROCESS"
                heading={`Our ${steps.length}-Step Process `}
                >

                </AnimatedSectionHeader>

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