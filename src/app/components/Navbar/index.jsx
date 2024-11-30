"use client";

import "./styles.scss";

import Image from "next/image";
import appLogo from "@/images/applogo.png";

const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="nav-left">
        <Image
          src={appLogo}
          alt="appLogo"
          height={120}
          width={120}
          className="applogo"
        />
        <div>THE STORY LIVES ON</div>
      </div>
      <div className="nav-right"></div>
    </div>
  );
};

export default Navbar;
