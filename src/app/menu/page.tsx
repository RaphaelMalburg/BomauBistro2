import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { getData } from "../../../sanity/sanity-utils";

const Menu = async () => {
  const data = (await getData()).bomauMenu[0];
  return (
    <main className="relative w-full h-fit bg-white ">
      {" "}
      <Link href="/" className="z-50 absolute top-2 left-5">
        <BsArrowLeftShort size={40} />
      </Link>
      <div className="flex flex-col md:flex-row">
        <Image src={data.img1} width={600} height={1000} alt="menu" className=" object-center  " />
        <Image src={data.img2} width={600} height={1000} alt="menu" className=" object-center" />
      </div>
    </main>
  );
};

export default Menu;
