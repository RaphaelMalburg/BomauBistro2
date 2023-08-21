import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const Menu = () => {
  return (
    <main className="relative w-full h-fit bg-white ">
      {" "}
      <Link href="/" className="z-50 absolute top-2 left-5">
        <BsArrowLeftShort size={40} />
      </Link>
      <Image src={"/menu1.png"} width={500} height={1000} alt="menu" className=" object-contain" />
      <Image src={"/menu2.png"} width={500} height={1000} alt="menu" className=" object-contain" />
    </main>
  );
};

export default Menu;
