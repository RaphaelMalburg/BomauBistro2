import Link from "next/link";
import React from "react";
import atitudelogo from "../../public/assets/atitude.png";
import Image from "next/image";
const ButtonAtitude = () => {
  return (
    <button
      type="button"
      className=" rounded-full
      border-primary-blue-400 bg-primary-blue/80 letter-shadow px-4 py-4 border-2 h-12 font-bold text-primary-blue-400 text-[10px] md:text-[13px] w-36 md:flex justify-center items-center hidden ">
      <Link href={"/atitude-records"}>CHECK OUT OUR RECORD STORE</Link>
    </button>
  );
};

export default ButtonAtitude;
