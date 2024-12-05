"use client";

import "./styles.scss";

import Image from "next/image";
import appLogo from "@/images/applogo.png";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleOnClickNavItem = (item) => {
    if (item === "about") {
      router.push("/about");
    }
  };

  return (
    <div className="nav-main">
      <div className="nav-left">
        <Image
          src={appLogo}
          alt="appLogo"
          height={120}
          width={120}
          className="applogo"
          onClick={() => router.push("/")}
        />
        <div>THE STORY LIVES ON</div>
      </div>
      <div className="nav-right">
        <div
          className="right-nav-item"
          onClick={() => handleOnClickNavItem("about")}
        >
          About
        </div>
      </div>
    </div>
  );
};

export default Navbar;
