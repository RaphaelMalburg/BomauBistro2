import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";

const NavbarAtitude = () => {
  return (
    <nav>
      <Link href="/">
        <BsArrowLeftShort size={50} />
      </Link>
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
        className="flex flex-col-reverse lg:flex-row items-center md:col-start-6 col-start-1  xs2:pe-14 md:pe-0 md:scale-115  col-span-2 place-content-center   ">
        <div className="relative w-[90px] h-[90px]  md:mr-0 mr-6">
          <Link href="/atitude-records">
            <Image src={"/atitude.png"} fill alt="atitude logo" />
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavbarAtitude;
