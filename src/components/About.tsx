import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import Link from "next/link";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

const About = () => {
  return (
    <section id="about" className=" max-w-[1440px] justify-center items-center mx-auto  mt-[70px] md:pt-4 padding-x flex flex-col relative gap-4 text-primary-blue-400  ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5 place-content-center">
        <div className="text-[28px] md:text-5xl  md:col-span-3">
          <h1 className="bg-gradient-to-l from-primary-blue-285 via-primary-blue-300 to-primary-blue-400 text-transparent bg-clip-text font-extrabold pb-4  ">
            Traditional Asian Ingredients
          </h1>
          <h2 className="flex justify-between">
            With a Modern Twist{" "}
            <span className="hidden md:flex ">
              <BsArrowRight className="w-20 h-10 ms-8 text-gray-700 my-auto " />
            </span>
          </h2>
        </div>
        <p className="text-primary-blue-300 md:text-xl pt-4 letter-shadow pb-4 text-sm md:col-span-2 ">
          Our menu is inspired by the traditional Asian ingredients and cooking techniques.Our menu is inspired by the traditional Asian ingredients and cooking techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full ">
        <div className="relative  xl:w-[570px] mx-2 xs1:w-full  xl:h-[450px] w-[320px] -ms-2 justify-center  my-auto h-[320px] z-0  ">
          <Image
            src="/mango.jpeg"
            fill
            alt="fish photo"
            className="object-cover  border-slate-400/60 border-[12px] rounded-ss-[80px] rounded-se-[150px] rounded-ee-[80px] rounded-es-[150px]"
          />
        </div>
        <div className="flex flex-col pl-4  gap-10 justify-center pt-4">
          <h1 className="bg-gradient-to-b from-primary-blue-300 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text font-extrabold text-[24px] md:text-4xl flex flex-col ">
            ABOUT <span className="text-[28px] md:text-5xl">BOMAU</span>
          </h1>
          <p className=" letter-shadow pb-4 text-sm md:text-lg">
            We are a trendy eatery offers an extensive menu featuring elevated street food and familiar classics inspired by the Far East including Thailand, China, and Singapore,
            among others. With an extensive wine menu, craft beers, sake, and signature cocktails, there&apos;s something for everyone here.
          </p>
          <Link
            href="/menu"
            className="bg-gradient-to-r from-primary-blue-285 via-primary-blue-300 to-primary-blue-400 rounded-full px-20 py-5 tracking-wider font-bold text-primary-blue-100 w-fit">
            MENU
          </Link>
        </div>{" "}
        <div className="absolute xl:-top-14 md:right-1/3 scale-125 right-0 bg-about-bg top-0  object-fill bg-no-repeat bg-cover  -z-10 w-full xl:h-screen h-[590px] overflow-hidden " />
      </div>
    </section>
  );
};

export default About;
