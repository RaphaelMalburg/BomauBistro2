"use client";
import React from "react";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import Image from "next/image";
import images from "@/utils/images";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import "@splidejs/react-splide/css";

export default function Carousel() {
  return (
    <div className="max-w-[1440px] justify-center items-center mx-auto  mt-20 md:pt-4 padding-x flex relative text-primary-blue-400 z-20">
      <Splide
        aria-label="Bomau Bistro"
        className="w-full h-[500px] flex  overflow-hidden justify-center items-center "
        options={{
          type: "loop",
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
          drag: "free",
          perPage: 3,
          breakpoints: {
            2560: {
              perPage: 4,
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
        {images.map((image: { src: string | StaticImport; alt: string }, index: any) => (
          // eslint-disable-next-line react/jsx-no-undef
          <SplideSlide key={index} className="flex">
            <div className="relative w-[280px] h-[300px] mx-1 shadow-xl">
              <Image src={image.src} fill alt={image.alt} className="object-cover " />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
