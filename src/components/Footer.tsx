import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
    <div className="grid grid-cols-1 place-content-center justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-center md:items-start gap-6">
        <Link href={"/"}>
          <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
        </Link>
      </div>
      <div className="grid bg-gradient-to-r grid-cols-2 md:grid-cols-1 from-primary-blue-285 via-primary-blue-300 to-primary-blue-400 text-transparent bg-clip-text font-extrabold">
        <div className=" gap-4  grid bg-gradient-to-r from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text">
          <Link href={"/#about"}>ABOUT</Link>
          <Link href={"/#gallery"}>GALLERY</Link>
          <Link href={"/menu"}>MENU</Link>
        </div>

        <div className=" gap-4  grid md:hidden">
          <h3>WORKING HOURS</h3>
          <p className="text-base bg-gradient-to-r from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text">Monday - Friday</p>
          <p className="text-base bg-gradient-to-b from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text">13:00 - 22:00 </p>
        </div>
      </div>
      <div className=" bg-gradient-to-r from-primary-blue-285 via-primary-blue-300 to-primary-blue-400  w-full h-[3px] rounded-full" />
      <div className=" gap-4 bg-gradient-to-r from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text font-extrabold hidden md:grid">
        <h3>WORKING HOURS</h3>
        <p className="text-base bg-gradient-to-r from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text">Monday - Friday</p>
        <p className="text-base bg-gradient-to-b from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text">13:00 - 22:00 </p>
      </div>
      <div className="grid gap-4 bg-gradient-to-r grid-cols-2 md:grid-cols-1 from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text font-extrabold">
        <h3>CONTACT</h3>
        <p className="text-base whitespace-nowrap">+351 21 808 8841</p>
        <p className="text-base">bistrobomau@gmail.com</p>
      </div>{" "}
      <div className=" bg-gradient-to-r from-primary-blue-285 via-primary-blue-300 to-primary-blue-400  w-full h-[3px] rounded-full " />
      <div className="grid gap-4 bg-gradient-to-r grid-cols-2 md:grid-cols-1 from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text font-extrabold place-content-center">
        {" "}
        <Link href={"/"}>
          <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
        </Link>
        <Link href={"/atitude-records"} className="mx-auto my-auto">
          <Image src="/atitude.png" alt="atitude" width={60} height={18} className="object-contain" />
        </Link>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12453.600849606648!2d-9.1515071!3d38.7086196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1935e1515c4bff%3A0x8435742c73629a4d!2sBomau%20Bistr%C3%B4!5e0!3m2!1sen!2spt!4v1692462616035!5m2!1sen!2spt"
          width="600"
          height="450"
          loading="lazy"
          className="w-full h-fit"></iframe>
      </div>
    </div>
    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-primary-blue-400 sm:px-16 px-6 py-10">
      <p>@2023 Bomau. All rights reserved</p>
    </div>{" "}
    <div className="absolute  bottom-44 scale-150  -right-10 bg-about-bg   object-fill bg-no-repeat bg-cover  -z-10 w-full xl:h-screen h-[590px] overflow-hidden " />
  </footer>
);

export default Footer;

{
  /**
      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link key={link.title} href={link.url} className="text-gray-500">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>*/
}
