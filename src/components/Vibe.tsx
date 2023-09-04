import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Vibe = () => {
  return (
    <section className=" max-w-[1440px] justify-center items-center mx-auto  mt-20 md:pt-4 padding-x flex flex-col relative gap-4 text-primary-blue-400  ">
      <div className="grid grid-cols-1 gap-2 order-last md:grid-cols-5 place-content-center">
        <div className="text-[28px] md:text-5xl  md:col-span-3">
          <h1 className="bg-gradient-to-b from-primary-blue-300 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text font-extrabold   ">Great Music</h1>
          <h2 className="flex justify-between bg-gradient-to-b from-primary-blue-300 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text ">
            Great Vibes
            <span className="hidden md:flex ">
              <BsArrowRight className="w-20 h-10  text-gray-700 my-auto " />
            </span>
          </h2>
        </div>
        <p className="text-primary-blue-300 md:text-xl my-auto pt-4 letter-shadow pb-4 md:col-span-2 ">
          We have DJ on the floor every Friday and Saturday night. Tops sets from 8pm to 11pm.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full ">
        <div className="relative order-2 xl:w-[570px] mx-2 xs1:w-full  xl:h-[450px] w-[320px] -ms-2 justify-center  my-auto h-[320px] z-0  ">
          <Image src="/bomau4.jpeg" fill alt="fish photo" className=" border-slate-400/60 border-[1px] rounded-sm object-cover" />
        </div>
        <div className="flex flex-col pl-4  gap-10 justify-center pt-4">
          <h1 className="bg-gradient-to-b from-primary-blue-300 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text font-extrabold text-[24px] md:text-4xl flex flex-col ">
            COCKTAILS &<span className="text-[28px] md:text-5xl">ORGANIC WINE</span>
          </h1>
          <p className=" letter-shadow pb-4 mr-10   md:text-lg">
            Best cocktails in town. Our organic wine selection is carefully chosen to pair with our dishes. We have a wide selection of wines from all over the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vibe;
