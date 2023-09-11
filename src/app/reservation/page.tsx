import Link from "next/link";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const Reservation = () => {
  return (
    <div className="h-screen bg-white">
      <Link href="/">
        <BsArrowLeftShort size={50} />
      </Link>
      <iframe
        src="https://tableagent.com/iframe/bomau-bistro/"
        sandbox="allow-forms allow-modals allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        className="h-[700px] w-full"></iframe>
    </div>
  );
};

export default Reservation;
