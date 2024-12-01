"use client";

import "./styles.scss";

import Image from "next/image";
import appLogo from "@/images/applogo.png";

const Footer = () => {
  return (
    <div className="footer-main">
      <div></div>
      <div className="footer-logo-container">
        <Image src={appLogo} alt="appLogo" height={100} width={100} />
        <div>Post Script</div>
      </div>
      <div className="social-links">
        <div className="social-links-header">Follow</div>
        <div>
          <a href="https://www.instagram.com/prove_it_2/">Instagram</a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/praveen-shivanna-93b007325/"
            target="blank"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
