"use client";

import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonAtitude from "@/components/ButtonAtitude";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import NavbarAtitude from "@/components/NavbarAtitude";
import CarouselAtitude from "@/components/CarouselAtitude";

const AtitudeRecords = () => {
  return (
    <main className="max-w-[1440px] padding-x overflow-hidden w-full padding-y h-full">
      <NavbarAtitude />
      <section className="flex flex-col items-center justify-center h-full gap-4 -mb-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-extrabold tracking-wider text-center text-primary-blue-atitude ">Atitude Records</h1>
          <h2 className="text-xl font-bold text-center text-primary-300">A new way to listen to music</h2>
          <p className="text-lg font-bold text-center text-primary-300">
            ATITUDE RECORDS - is a record store in the heart of Lisbon with a carefully selected stock of used and new records, a cozy listening area and music magazines. In the
            selection, music lovers will find records of different genres and musical eras, with a focus on electronic, unique sound and jazz.
          </p>{" "}
        </div>
      </section>
      <CarouselAtitude />
    </main>
  );
};

export default AtitudeRecords;
