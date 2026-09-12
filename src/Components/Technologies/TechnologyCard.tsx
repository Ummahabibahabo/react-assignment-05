import React, { useState } from "react";
import type { TechnologiesType } from "../Types";
import SymbolImg from "../../assets/Symbol.png";
interface TechnologyCardType {
  technology: TechnologiesType;
}
const TechnologyCard = ({ technology }: TechnologyCardType) => {
  const [selectedTechnology, setSelectedTechnology] = useState<boolean>(false);
  const handleSelectedButton = () => {
    setSelectedTechnology(true);
  };
  return (
    <div className="flex justify-between gap-5">
      <div className="border-2 border-gray-300 p-10 mt-10 rounded-xl space-y-5">
        <div className="flex justify-between items-center">
          <div className="w-[80px] h-[80px] rounded-full bg-gray-200 shadow-md flex justify-center items-center">
            <img
              className="w-[40px] h-[40px] object-contain"
              src={technology.icon}
              alt={technology.name}
            />
          </div>
          <button className="bg-[#E0F2FE] text-[#0EA5E9] px-5 py-1 rounded-2xl font-semibold">
            {technology.badge}
          </button>
        </div>
        <h1 className="text-[18px] font-bold text-[#0F172A]">
          {technology.name}
        </h1>
        <p className="font-normal text-[12px] text-[#64748B]">
          {technology.description}
        </p>
        <div className="font-semibold text-[12px] text-[#64748B] rounded-xl flex">
          <button className="bg-gray-100 px-5 py-2 rounded-xl">
            {technology.category}
          </button>
          <button className="bg-white px-5 py-1 rounded-xl">
            Beginner-Friendly
          </button>
          <button className="bg-white px-5 py-1 rounded-xl flex justify-center items-center gap-2">
            <img
              className="w-[15px] h-[15px] object-contain"
              src={SymbolImg}
              alt="rating"
            />
            <span>{technology.rating}</span>
          </button>
        </div>
        <button
          onClick={handleSelectedButton}
          className={
            selectedTechnology
              ? "bg-gray-300 text-black text-[15px] rounded-xl px-5 py-3 w-full font-medium"
              : "bg-black text-white text-[15px] rounded-xl px-5 py-3 w-full font-medium"
          }
        >
          {selectedTechnology ? "Selected" : " Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
