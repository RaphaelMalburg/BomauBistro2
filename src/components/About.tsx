import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { getData } from "../../sanity/sanity-utils";

const About = async () => {
  const data = (await getData()).bomauAbout[0];

  return (
    <section id="about" className="max-w-[1440px] justify-center items-center mx-auto  md:pt-4 padding-x flex flex-col relative gap-4 text-primary-blue-400">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5 place-content-center"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="relative xl:w-[570px] mx-2 xs1:w-full xl:h-[450px] w-[320px] -ms-2 justify-center my-auto h-[320px] z-0">
          <Image src={data.aboutSectionImage} fill alt="fish photo" className="object-cover border-slate-400/60 border-[1px] rounded-sm" />
        </div>
        <div className="flex flex-col pl-4 gap-10 justify-center pt-4">
          <p className="letter-shadow pb-4 text-sm md:text-lg">{data.aboutSectionSecondDescription[0].children[0].text}</p>
          <Link
            href="/menu"
            className="bg-gradient-to-r from-primary-blue-285 via-primary-blue-300 to-primary-blue-400 rounded-full px-20 py-5 tracking-wider font-bold text-primary-blue-100 w-fit">
            {data.aboutButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
