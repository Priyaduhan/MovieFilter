import React from "react";
import heroBg from "../assets/hero-bg.png";
import search from "../assets/search.svg";
import logo from "../assets/logo.png";
import hero from "../assets/hero.png";

const Hero = ({ searchTerm, setsearchTerm }) => {
  return (
    <div
      className=" flex flex-col items-center justify-center gap-3  "
      
    >
      <img
        src={logo}
        alt=""
        className=" w-14 mx-10 my-5 sm:w-20 md:w-24 lg:w-28 "
      />
      <img
        src={hero}
        alt=""
        className="w-75 mx-10 sm:w-2/4 md:w-[400px] lg:w-[500px]"
      />
      <p className="max-w-3xl text-white text-3xl mx-10 font-[500] mb-3  text-center sm:text-4xl md:text6xl lg:text-4xl xl:text-7xl">
        Find <span className="text-purple-400 font-[700] ">Movies</span> You'll
        Love Without Hassle.
      </p>
      <div className="flex relative  justify-center  items-center mb-5 tracking-normal w-3/5">
        <img
          src={search}
          alt=""
          className="absolute top-2 left-2 md:left-3 lg:left-4 xl:left-28"
        />
        <input
          type="text"
          id=""
          placeholder="Search through 300+ movies online"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          className="bg-gray-800 w-full h-8 text-white pl-9 pr-2 text-[12px] rounded-[12px] border sm:w-120 md:w-150 lg:w-170 sm:text-[14px] lg:h-9"
        />
      </div>
    </div>
  );
};

export default Hero;
