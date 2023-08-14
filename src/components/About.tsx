import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section className="pt-10 md:pt-4 padding-x flex flex-col gap-4 text-primary-blue-400">
      <div className="flex flex-col gap-4">
        <div className="text-[28px] md:text-5xl">
          <h1 className="bg-gradient-to-l from-primary-blue-285 via-primary-blue-300 to-primary-blue-400 text-transparent bg-clip-text font-extrabold ">
            Traditional Asian Ingredients
          </h1>
          <h2>
            With a Modern Twist{" "}
            <span className="hidden md:block">
              <BsArrowRight className="w-20 h-10 ms-8 text-gray-700" />
            </span>
          </h2>
        </div>

        <p>Our menu is inspired by the traditional Asian ingredients and cooking techniques.</p>
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
        </div>
      </div>
    </section>
  );
};

export default About;
