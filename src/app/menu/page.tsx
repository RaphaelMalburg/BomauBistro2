import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <main className="relative w-full h-[1640px] bg-white">
      <div className="relative  w-full h-full">
        <Image src={"/menu1.png"} fill alt="menu" className=" object-contain" />
      </div>
      <div className="relative  w-full h-full ">
        <Image src={"/menu2.png"} fill alt="menu" className=" object-contain" />
      </div>
    </main>
  );
};

export default Menu;
