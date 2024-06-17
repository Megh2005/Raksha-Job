import React from "react";
import SearchForm from "./SearchForm";
import { jobType } from "@/types/jobTypes";

interface HeroProps {
  jobs: jobType[];
}

const Hero = ({ jobs }: HeroProps) => {
  return (
    <div
      id="home"
      className="bg-[url('/hero.png')] h-screen relative w-full bg-cover mt-[-70px]"
    >
      <div className="flex flex-col h-full items-center justify-center pt-[82px] gap-20 w-[90%] mx-auto max-w-[1450px]">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-extrabold text-black leading-normal">
            Empowering The{" "}
            <span className="text-purple-600 font-extrabold">Nation </span>
            By Empowering The Spine Of The{" "}
            <span className="text-purple-600 font-extrabold">Women</span>
          </h1>
          <span className="font-md text-xl capitalize">
            An Initiative To sail for The journey of going Beyond the parda to
            the positive aura of actual modernity
          </span>
        </div>
        <SearchForm jobs={jobs} />
      </div>
    </div>
  );
};

export default Hero;
