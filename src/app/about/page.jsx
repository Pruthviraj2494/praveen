"use client";

import "./styles.scss";

import Image from "next/image";

import aboutUs from "@/images/aboutUs.png";

import { team } from "@/utils/data";

const About = () => {
  return (
    <div className="about-main">
      <div className="about">
        <div className="about-left">
          <div className="header">About Us</div>
          <div className="footer">
            Postscript is a bold new creative agency launched in 2024 from the
            bustling hubs of Bangalore and Mysore. Combining the cinematic
            brilliance of Praveen Shivanna, renowned for his work with feature
            films and celebrities, with Maria Vivek’s sharp expertise in
            crafting impactful campaigns for top brands, we are redefining
            storytelling. Together with our visionary tech team, we transform
            ideas into unforgettable narratives that inspire, engage, and leave
            a lasting mark.
          </div>
        </div>
        <div className="about-right">
          <Image src={aboutUs} alt="aboutUs" height="auto" width="auto" />
        </div>
      </div>

      <div style={{ textAlign: "center", fontSize: "48px" }}>Our team</div>
      <div>
        {team.map((member, idx) => {
          return (
            <div className="about" key={idx}>
              <div className="about-left">
                <div className="header">{member.name}</div>
                <div className="footer">{member.about}</div>
              </div>
              <div className="about-right">
                <Image
                  src={member.image}
                  alt="aboutUs"
                  height="auto"
                  width="auto"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
