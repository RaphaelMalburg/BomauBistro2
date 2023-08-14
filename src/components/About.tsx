import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

const About = () => {
  return (
    <section className="mt-20 md:pt-4 padding-x flex flex-col relative gap-4 text-primary-blue-400  ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5 place-content-center">
        <div className="text-[28px] md:text-5xl  md:col-span-3">
          <h1 className="bg-gradient-to-l from-primary-blue-285 via-primary-blue-300 to-primary-blue-400 text-transparent bg-clip-text font-extrabold pb-4 ">
            Traditional Asian Ingredients
          </h1>
          <h2 className="flex justify-between">
            With a Modern Twist{" "}
            <span className="hidden md:flex ">
              <BsArrowRight className="w-20 h-10 ms-8 text-gray-700 my-auto " />
            </span>
          </h2>
        </div>
        <p className="text-primary-blue-300 md:text-xl pt-4 letter-shadow pb-4 md:col-span-2 ">
          Our menu is inspired by the traditional Asian ingredients and cooking techniques.Our menu is inspired by the traditional Asian ingredients and cooking techniques.Our menu
          is inspired by the traditional Asian ingredients and cooking techniques.
        </p>
      </div>

      <div>
        <div className="relative  xl:w-[570px] mx-2 xs1:w-full  xl:h-[450px] xs1:mt-56 w-[280px] -ms-2 justify-center  my-auto h-[320px] z-0  ">
          <Image src="/fish.png" fill alt="fish photo" className="object-cover rounded-ss-[80px] rounded-se-[150px] rounded-ee-[80px] rounded-es-[150px]" />
        </div>
        <div className="flex flex-col gap-4 pt-4">
          <h1 className="bg-gradient-to-l from-primary-blue-285 via-primary-blue-300 to-primary-blue-400 text-transparent bg-clip-text font-extrabold text-[28px] md:text-5xl ">
            ABOUT <span>BOMAU</span>
          </h1>
          <p className=" letter-shadow pb-4 text-lg">
            Bomau is a restaurant that serves Asian cuisine. We are committed to providing our guests with the best quality food and service.
          </p>
          <button
            type="button"
            className="bg-gradient-to-r from-primary-blue-285 via-primary-blue-300 to-primary-blue-400 rounded-full px-8 py-5 tracking-wider font-bold text-primary-blue-100">
            BOOK A TABLE
          </button>
        </div>{" "}
        <div className="absolute xl:-top-14 xl:-right-1/2 right-0 bg-about-bg top-0  object-fill bg-no-repeat bg-cover  -z-10 w-full xl:h-screen h-[590px] overflow-hidden " />
      </div>
    </section>
  );
};

export default About;
