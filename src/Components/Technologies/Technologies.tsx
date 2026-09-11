import React, { use } from "react";
import type { TechnologiesType } from "../Types";

interface TechnologiesProps {
  technogiesPromise: Promise<TechnologiesType[]>;
}
const Technologies = ({ technogiesPromise }: TechnologiesProps) => {
  const technologies = use(technogiesPromise);
  console.log(technologies);
  return (
    <div>
      <div className="space-y-3">
        <h1 className="text-4xl text-[#0F172A] font-bold">
          Explore the
          <span className="text-[#EC4899]">Technologies</span>
        </h1>
        <p className="text-[16px]font-normal text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
    </div>
  );
};

export default Technologies;
