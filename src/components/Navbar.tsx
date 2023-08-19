"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";
import ButtonAtitude from "./ButtonAtitude";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-2 py-4 bg-transparent text-primary-blue-400">
        <Link href="/" className="flex justify-center  scale-95 xs1:scale-100 items-center min-w-[100px] md:min-w-[160px]">
          <Image src="/logo.svg" alt="logo" width={210} height={18} className="object-contain logo-shadow" />
        </Link>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className={`md:items-center w-full absolute top-0 md:static ${
            menuOpen ? "block" : "hidden"
          }  space-y-2 md:space-y-0 md:flex md:space-x-2  md:bg-transparent font-bold bg-primary-blue-200/90 text-md text-center  lg:text-lg right-0 text-primary-blue-400 md:w-auto grid lg:gap-4  gap-8 place-content-center tracking-wider md:h-fit h-screen col-start-3  col-span-3 z-40 letter-shadow [&_li]:bg-primary-blue-200/30 [&_li]:rounded-full [&_li]:px-2`}
          onClick={toggleMenu}>
          {/* Navigation items */}
          <motion.li variants={item}>
            <Link href="/">HOME</Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="/about">ABOUT</Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="/menu">MENU</Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="/gallery">GALLERY</Link>
          </motion.li>
        </motion.ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden mr-3 md:mr-0 col-start-6 col-span-1 order-1 md:order-none">
          <button onClick={toggleMenu}>
            <FiMenu className="w-10 h-10 text-gray-700" />
          </button>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 40,
          }}
          whileHover={{ scale: 1.05, rotate: 370 }}
          whileTap={{
            scale: 0.8,
            rotate: 380,
            borderRadius: "100%",
          }}
          className="flex flex-col-reverse lg:flex-row items-center md:col-start-6 col-start-1  xs2:pe-14 md:pe-0 md:scale-105  col-span-2 place-content-center  scale-75 ">
          <ButtonAtitude />
          <div className="relative w-[70px] h-[70px]  md:mr-0 mr-6">
            <Link href="/atitude-records">
              <Image src={"/atitude.png"} fill alt="atitude logo" />
            </Link>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default NavBar;
