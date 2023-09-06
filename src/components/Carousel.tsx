"use client";
import React, { useEffect } from "react";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import Image from "next/image";
import { images } from "@/utils/images";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import "@splidejs/react-splide/css";
import { useState } from "react";
import { ImageModal } from "./ImageModal";
import { getData } from "../../sanity/sanity-utils";

export default function Carousel() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchSanity = async () => {
      const sanityData: any = (await getData()).bomauGallery;
      setData(sanityData[0]);
    };

    fetchSanity();
  }, []);

  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };
  return (
    <div id="gallery" className="w-full justify-center items-center mx-auto  flex-col mt-10 md:pt-4 padding-x flex relative text-primary-blue-400 z-20">
      <h1 className="bg-gradient-to-r from-primary-blue-285 via-primary-blue-300 text-[24px] to-primary-blue-400 text-transparent bg-clip-text font-bold ">GALLERY</h1>
      <Splide
        aria-label="Bomau Bistro"
        className="w-full h-[450px] flex  overflow-hidden justify-center items-center -mt-10 "
        options={{
          type: "loop",
          autoplay: true,
          interval: 3500,
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
        {Object.keys(data).map((key, index) => {
          if (key.startsWith("image")) {
            return (
              <SplideSlide key={index} className="flex mx-auto justify-center items-center">
                <div className="relative w-[280px] h-[300px] mx-1 shadow-xl justify-center items-center cursor-pointer" onClick={() => openModal(data[key])}>
                  <Image src={data[key]} fill alt={`Image ${index + 1}`} className="object-cover mx-auto pl-3" />
                </div>
              </SplideSlide>
            );
          }
          return null;
        })}
      </Splide>
      {modalImage && <ImageModal src={modalImage} alt="" onClose={closeModal} />}
    </div>
  );
}
