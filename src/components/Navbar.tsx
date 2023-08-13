"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import CustomButton from "./CustomButton";
import ButtonAtitude from "./ButtonAtitude";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent text-primary-blue-400">
        <Link href="/" className="flex justify-center items-center min-w-[100px] md:min-w-[160px]">
          <Image src="/logo.svg" alt="logo" width={210} height={18} className="object-contain logo-shadow" />
        </Link>

        <ul
          className={`md:items-center w-full absolute top-0 md:static ${
            menuOpen ? "block" : "hidden"
          }  space-y-2 md:space-y-0 md:flex md:space-x-2  md:bg-transparent font-semibold bg-primary-blue-250/90 text-md text-center  lg:text-lg right-0 text-bblue-100 md:w-auto grid lg:gap-8  gap-8 place-content-center md:h-fit h-screen col-start-3  col-span-3 z-40 letter-shadow`}
          onClick={toggleMenu}>
          {/* Navigation items */}
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/menu">MENU</Link>
          </li>
          <li>
            <Link href="/gallery">GALLERY</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden col-start-6 col-span-1">
          <button onClick={toggleMenu}>
            <FiMenu className="w-10 h-10 text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center md:col-start-6 col-start-1  xs2:pe-14 scale-90 md:scale-100 md:ps-8 col-span-2 place-content-center ">
          <ButtonAtitude />
          <div className="relative w-[70px] h-[70px] ">
            <Link href="/atitudeRecord">
              <Image src={"/atitude.png"} fill alt="atitude logo" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
