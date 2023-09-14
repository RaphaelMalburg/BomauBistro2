"use client";
import { getData } from "../../sanity/sanity-utils";
import Image from "next/image";
import { motion } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";

import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSanity = async () => {
      const sanityData: any = (await getData()).bomauHero;
      setData(sanityData[0]);
    };

    fetchSanity();
  }, []);

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="flex lg:flex-row flex-col-reverse gap-5 relative z-0 max-w-[1440px] justify-center items-center mx-auto   text-primary-blue-300 h-fit mb-52 md:mb:0">
      <div className="flex-[1.5] padding-x grid gap-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-grow  flex-col xl:text-6xl mt:48 text-[30px] md:text-5xl  font-bold tracking-wide lg:tracking-wider letter-shadow  h-2/3   lg:mt-52">
          <motion.h1 variants={item}>{data.heroSectionFirstLine}</motion.h1>
          <motion.h1 variants={item}>{data.heroSectionSecondLine}</motion.h1>
        </motion.div>

        <motion.p variants={item} className="text-primary-blue-300 letter-shadow pb-4 md:text-xl text-sm ">
          {data.heroSectionDescription}
        </motion.p>
        <motion.div className="flex items-center cursor-pointer" variants={item}>
          <Link
            href="/"
            type="button"
            className="bg-gradient-to-r  from-primary-blue-285 via-primary-blue-300 to-primary-blue-400 rounded-full px-8 py-5 tracking-wider font-bold text-primary-blue-100">
            {data.heroButton}
          </Link>
          <BsArrowRight className="w-14 h-10 ms-8 text-gray-700" />
        </motion.div>
        <div className=" absolute bg-gradient-to-r from-primary-blue-285 via-primary-blue-300 to-primary-blue-400 rounded-full mx-4 md:mx:10 left-0 -bottom-12 py-2 md:w-full w-11/12   " />
      </div>
      <div className="xl:flex-1 flex justify-end items-end md:w-4/5 w-full lg:w-[480px] xl:h-fit md:mt-60 ">
        <div className="relative xl:w-[570px] mx-2 xs1:w-full  xl:h-[450px] xs1:mt-60 w-[350px]  justify-center mt-56 md:-mt-10 my-auto h-[320px] z-0 mr-10">
          <Image src={data.heroSectionImage} alt="hero" fill className="object-cover  border-slate-400/60 border-[1px] rounded-sm" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
