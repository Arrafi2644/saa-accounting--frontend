import React, { JSX } from "react";
import { ProblemSolutionClient } from "./ProblemSolutionClient";

export function ProblemSolution(): JSX.Element {
  return (
    <section className="py-20 md:28 lg:py-32 w-full bg-white">
      <div className="container mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
        <ProblemSolutionClient />
      </div>
    </section>
  );
}
