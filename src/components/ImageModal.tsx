import React from "react";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

export function ImageModal({ src, alt, onClose }: any) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className=" relative max-w-2xl w-full h-5/6 p-4 bg-white rounded-lg shadow-lg" onClick={onClose}>
        <Image src={src} alt={alt} fill className="object-cover mx-auto" />
        <button onClick={onClose} className="mt-4  absolute bg-primary-blue-50 rounded-full hover:bg-primary-blue-100 focus:outline-none">
          <AiFillCloseCircle size={40} color={"#324163"} />
        </button>
      </div>
    </div>
  );
}
