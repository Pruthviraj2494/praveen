"use client";

import "./styles.scss";

import Image from "next/image";

import aboutUs from "@/images/aboutUs.png";
import connect from "@/images/connect.png";

import award1 from "@/images/awards/award1.png";
import award2 from "@/images/awards/award2.png";

import { team, reviews } from "@/utils/data";

const About = () => {
  return (
    <div className="about-main">
      <div className="about">
        <div className="about-left">
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
      <div className="postscript-img-container">
        <Image
          src={connect}
          alt="postscript"
          height="auto"
          width="auto"
          className="postscript-img"
        />
      </div>
      <div style={{ textAlign: "center", fontSize: "48px", padding: "32px" }}>
        Our team
      </div>
      <div>
        {team.map((member, idx) => {
          return (
            <div
              className="about"
              key={idx}
              style={idx === 1 ? { flexDirection: "row-reverse" } : {}}
            >
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
      <div style={{ textAlign: "center", fontSize: "48px", padding: "32px" }}>
        Awards
      </div>
      <div className="award-list">
        <div className="award">
          <div className="awards">
            <div>
              WASHINGTON.D.C - 2022 <br />
              Best Narrative Film Award
              <br />
              The Echo Short
              <br />
              Our Heritage Our Planet Film Week
              <br />
            </div>
            <br />
            <div className="awards">
              BENGALURU - 2022 <br />
              Best Short Film Award
              <br />
              The Echo Short
              <br />
              Our Earth Award
              <br />
            </div>
          </div>

          <div>
            <Image src={award2} alt="award1" height={300} width={200} />
          </div>
        </div>
        <div className="award">
          <div>
            BENGALURU - 2022 <br />
            Best Film Editing Award
            <br />
            The AHK Short
            <br />
            BIFFS
            <br />
          </div>
          <Image src={award1} alt="award1" height={300} width={200} />
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: "48px", padding: "32px" }}>
        Actual Customer Reviews
      </div>
      <div className="review-list">
        {reviews.map((member, idx) => {
          return (
            <div className="review-main" key={idx}>
              <div className="review">{member.review}</div>
              <div className="reviewer-img-container">
                <div className="hr-divider" />
                <div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="client-image"
                  />
                </div>
              </div>
              <div>{member.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
