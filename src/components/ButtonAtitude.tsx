import Link from "next/link";
import React from "react";
import atitudelogo from "../../public/assets/atitude.png";
import Image from "next/image";
const ButtonAtitude = () => {
  return (
    <button
      type="button"
      className=" rounded-full
      border-bblue-700  letter-shadow px-4 py-2 border-2 h-10 font-bold text-bblue-700 text-[10px] w-36 flex justify-center items-center">
      <Link href={"/atituderecord "}>CHECK OUT OUR RECORD STORE</Link>
    </button>
  );
};

export default ButtonAtitude;
