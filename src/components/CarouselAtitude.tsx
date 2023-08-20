"use client";
import React from "react";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import Image from "next/image";
import { imagesAtitude } from "@/utils/images";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import "@splidejs/react-splide/css";

export default function CarouselAtitude() {
  return (
    <div id="gallery" className="w-full justify-center items-center mx-auto  flex-col mt-10 md:pt-4 padding-x flex relative text-primary-blue-400 z-20">
      <Splide
        aria-label="Atitude Records Gallery"
        className="w-full h-[550px] flex  overflow-hidden justify-center items-center -mt-10 "
        options={{
          type: "loop",
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
          drag: "free",
          perPage: 3,
          breakpoints: {
            3000: {
              perPage: 4,
            },
            2560: {
              perPage: 3,
            },
            640: {
              perPage: 3,
            },
            400: {
              perPage: 1,
            },
          },

          lazyLoad: "nearby",
        }}>
        {imagesAtitude.map((image: { src: string | StaticImport; alt: string }, index: any) => (
          // eslint-disable-next-line react/jsx-no-undef
          <SplideSlide key={index} className="flex mx-auto justify-center items-center">
            <div className="relative w-[280px] h-[300px] mx-1 shadow-xl justify-center items-center">
              <Image src={image.src} fill alt={image.alt} className="object-cover mx-auto pl-3 " />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
