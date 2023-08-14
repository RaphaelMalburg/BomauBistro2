import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section className="pt-10 md:pt-4">
      <div>
        <div>
          <h1>Traditional Asian Ingredients</h1>
          <h2>
            With a Modern Twist{" "}
            <span>
              <BsArrowRight className="w-14 h-10 ms-8 text-gray-700" />
            </span>
          </h2>
        </div>

        <p>Our menu is inspired by the traditional Asian ingredients and cooking techniques. We are committed to providing our guests with the best quality food and service.</p>
      </div>

      <div>
        <div className="relative  xl:w-[570px] mx-2 xs1:w-full  xl:h-[450px] xs1:mt-56 w-[350px]  justify-center  my-auto h-[380px] z-0  ">
          <Image src="/fish.png" fill alt="fish photo" className="object-cover rounded-ss-[80px] rounded-se-[200px] rounded-ee-[80px] rounded-es-[200px]" />
        </div>
        <div>
          <h1>
            ABOUT <span>BOMAU</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quo ea alias tempora molestiae sequi fugit assumenda aliquam ab atque.Commodi quo ea alias tempora
            molestiae sequi fugit assumenda aliquam ab atque.
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
