import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <main className="relative w-full h-fit bg-white">
      <Image src={"/menu1.png"} width={500} height={1000} alt="menu" className=" object-contain" />

      <Image src={"/menu2.png"} width={500} height={1000} alt="menu" className=" object-contain" />
    </main>
  );
};

export default Menu;
