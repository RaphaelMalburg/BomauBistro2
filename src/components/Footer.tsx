import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { getData } from "../../sanity/sanity-utils";

const Footer = async () => {
  const data = (await getData()).bomauFooter[0];
  return (
    <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100 relative overflow-hidden ">
      <div className="grid grid-cols-1 md:grid-cols-[repeat(6,auto)] place-content-center justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-center md:items-start gap-6">
          <Link href={"/"}>
            <Image src="/logobomau.png" alt="logo" width={118} height={18} className="object-contain" />
          </Link>
        </div>
        <div className="grid w-fit bg-gradient-to-r grid-cols-2 md:grid-cols-1 from-primary-blue-285 via-primary-blue-300 to-primary-blue-400 text-transparent bg-clip-text font-extrabold md:border-r-2 border-primary-blue-300 pr-6 ">
          <div className=" gap-4  grid bg-gradient-to-r from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text">
            <Link href={"/#about"}>ABOUT</Link>
            <Link href={"/#gallery"}>GALLERY</Link>
            <Link href={"/menu"}>MENU</Link>
          </div>

          <div className=" gap-4  grid md:hidden ">
            <h3>{data.footerSecondSection.footerWorkingHoursTitle}</h3>
            <p className="text-base bg-gradient-to-r from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text">
              {data.footerSecondSection.footerWorkingdays}
            </p>
            <p className="text-base bg-gradient-to-b from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text">
              {" "}
              {data.footerSecondSection.footerWorkingHours}
            </p>
          </div>
        </div>
        <div className=" gap-4  bg-gradient-to-r from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text font-extrabold hidden md:grid md:border-r-2 pr-6 border-primary-blue-300">
          <h3> {data.footerSecondSection.footerWorkingHoursTitle}</h3>
          <p className="text-base bg-gradient-to-r from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text">
            {data.footerSecondSection.footerWorkingdays}
          </p>
          <p className="text-base bg-gradient-to-b from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text">
            {" "}
            {data.footerSecondSection.footerWorkingHours}
          </p>
        </div>
        <div className="grid gap-4 bg-gradient-to-r grid-cols-1 md:grid-cols-1 from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text font-extrabold md:border-r-2 border-primary-blue-300 pr-3">
          <h3 className="hidden md:block">CONTACT</h3>
          <p className="text-base whitespace-nowrap  ">{data.footerThirdSection.footerPhone}</p>
          <p className="text-base">{data.footerThirdSection.footerEmail}</p>
        </div>{" "}
        <div className="grid gap-4 bg-gradient-to-r grid-cols-2 md:grid-cols-1 from-primary-blue-400 via-primary-blue-285 to-primary-blue-400 text-transparent bg-clip-text font-extrabold place-content-center">
          {" "}
          <Link href={"https://www.instagram.com/bomau_bistro/"} className="mx-auto my-auto">
            <AiFillInstagram size={50} color={"#324163"} />
          </Link>
        </div>{" "}
        <div className=" ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12453.600849606648!2d-9.1515071!3d38.7086196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1935e1515c4bff%3A0x8435742c73629a4d!2sBomau%20Bistr%C3%B4!5e0!3m2!1sen!2spt!4v1692462616035!5m2!1sen!2spt"
            width="600"
            height="450"
            loading="lazy"
            className="w-full h-fit"></iframe>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 mx-auto  sm:px-16 px-6 py-10">
        <p>@2023 Bomau. All rights reserved</p>
      </div>{" "}
    </footer>
  );
};

export default Footer;
