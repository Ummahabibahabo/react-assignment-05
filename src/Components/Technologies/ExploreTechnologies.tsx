import React from "react";
import type { TechnologiesType } from "../Types";
import TechnologyCard from "./TechnologyCard";
interface ExploreTechnologiesProps {
  technologies: TechnologiesType[];
}
const ExploreTechnologies = ({ technologies }: ExploreTechnologiesProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
      {/* Technology Cards */}
      <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {technologies.map((technology: TechnologiesType) => {
          return <TechnologyCard key={technology.id} technology={technology} />;
        })}
      </div>

      {/* Your Stack */}
      <div className="border-2 border-gray-300 p-6 lg:p-10 mt-0 lg:mt-10 rounded-xl space-y-5 h-fit">
        <h2 className="font-bold text-[#0F172A] text-[16px]">Your Stack</h2>

        <p className="text-sm text-[#94A3B8]">No technologies selected yet.</p>

        <div className="border border-dashed rounded-xl text-center text-[12px] text-[#94A3B8] py-5">
          Your stack is empty.
        </div>
      </div>
    </div>
  );
};

export default ExploreTechnologies;
