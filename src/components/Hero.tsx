"use client";

import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";
import { CustomButton } from "@/components";
import Link from "next/link";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero  text-primary-blue-100">
      <div className="flex-[1.5] padding-x grid gap-6">
        <div className="flex flex-grow flex-col xl:text-6xl mt:48 text-[28px] font-bold tracking-wide lg:tracking-wider letter-shadow  h-2/3   lg:mt-60">
          <h1>
            <span className="bg-gradient-to-r from-primary-blue-300 via-primary-blue-275 to-primary-blue-300 text-transparent bg-clip-text rounded-md  py-2 hover:bg-blue-600 hover:text-white transition pr-2">
              Dive
            </span>
            Into The Flavours
          </h1>
          <h1>
            Of Our
            <span className="bg-gradient-to-r from-primary-blue-300 via-primary-blue-275 to-primary-blue-300 text-transparent bg-clip-text rounded-md px-4 py-2 hover:bg-blue-600 hover:text-white transition">
              Asian Cuisine
            </span>
          </h1>
        </div>

        <h3 className="text-primary-blue-300 letter-shadow pb-4 text-lg ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, molestias.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, molestiasdsds.
        </h3>
        <div className="flex items-center ">
          <button
            type="button"
            className="bg-gradient-to-l from-primary-blue-275 via-primary-blue-300 to-primary-blue-400 rounded-full px-8 py-5 tracking-wider font-bold text-primary-blue-100">
            BOOK A TABLE
          </button>
          <BsArrowRight className="w-14 h-10 ms-8 text-gray-700" />
        </div>
      </div>
      <div className="hero__image-container ">
        <div className="hero__image ">
          <Image
            src="/salad.png"
            alt="hero"
            fill
            className="object-cover rounded-ss-[80px] rounded-se-[80px] rounded-ee-[80px] rounded-es-[300px] border-slate-400/60 border-[12px]"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
