"use client";

import "./styles.scss";

import Image from "next/image";
import appLogo from "@/images/applogo.png";
import whatsApp from "@/images/whatsapp.svg";
import gmail from "@/images/gmail.svg";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="social-links">
        <div className="social-links-header">Contact Us</div>
        <div className="social-item">
          <div>
            <Image src={gmail} alt="gmail" height={25} width={25} />
          </div>
          <div>: Postscriptpixels@gmail.com</div>
        </div>
        <div className="social-item">
          <div>
            <Image src={whatsApp} alt="whatsApp" height={25} width={25} />
          </div>
          <div>: +91 8892293393</div>
        </div>
      </div>
      <div className="footer-logo-container">
        <Image src={appLogo} alt="appLogo" height={100} width={100} />
        <div>Post Script</div>
      </div>
      <div className="social-links">
        <div className="social-links-header">Follow us</div>
        <div>
          <a href="https://www.instagram.com/postscript.pixels/">Instagram</a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/company/postscript-pixels/"
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
