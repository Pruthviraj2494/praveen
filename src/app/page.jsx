"use client";

import { useRouter } from "next/navigation";
import Slider from "react-slick";

import {
  reels1,
  slideContent1,
  slideContent2,
  slideContent3,
  slideContent4,
  slideContent5,
} from "@/utils/data";

import Navbar from "@/app/components/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./page.scss";
import { Fragment } from "react";

const LandingPage = () => {
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div className="main">
      <Navbar />
      <div className="landing-page-main">
        <Slider {...settings} className="custom-slider">
          <div className="slide-item">
            <video
              style={{ width: "100vw" }}
              width="auto"
              height="auto"
              autoPlay
              muted
              loop
            >
              <source src={slideContent1} type="video/mp4" />
            </video>
            <div className="video-desc">
              <div className="video-dec-head">Vicks</div>
              <div className="video-dec-foot">Commercial</div>
            </div>
          </div>
          <div className="slide-item">
            <video
              style={{ width: "100vw" }}
              width="auto"
              height="auto"
              autoPlay
              muted
              loop
            >
              <source src={slideContent2} type="video/mp4" />
            </video>
            <div className="video-desc">
              <div className="video-dec-head">SRT Groceries</div>
              <div className="video-dec-foot">Commercial</div>
            </div>
          </div>
          <div className="slide-item">
            <video
              style={{ width: "100vw" }}
              width="auto"
              height="auto"
              autoPlay
              muted
              loop
            >
              <source src={slideContent3} type="video/mp4" />
            </video>
            <div className="video-desc">
              <div className="video-dec-head">EAK Official</div>
              <div className="video-dec-foot">Title Teaser</div>
            </div>
          </div>

          <div className="slide-item">
            <video
              style={{ width: "100vw" }}
              width="auto"
              height="auto"
              autoPlay
              muted
              loop
            >
              <source src={slideContent4} type="video/mp4" />
            </video>
            <div className="video-desc">
              <div className="video-dec-head">Karavali Official </div>
              <div className="video-dec-foot">Film Teaser</div>
            </div>
          </div>
          <div className="slide-item">
            <video
              style={{ width: "100vw" }}
              width="auto"
              height="auto"
              autoPlay
              muted
              loop
            >
              <source src={slideContent5} type="video/mp4" />
            </video>
            <div className="video-desc">
              <div className="video-dec-head"> Bellbottom </div>
              <div className="video-dec-foot">Film Teaser 2019</div>
            </div>
          </div>
        </Slider>
        <div className="landing-page-desc">
          <div className="desc">
            At Postscript, we create video production and post-production that
            transforms ideas into lasting stories. Combining creativity with
            technical expertise, we bring visions to life in a way that
            resonates and inspires.
          </div>
          <div className="desc">
            Our mission is to craft meaningful stories with precision,
            imagination, and impact. With a focus on innovation and
            collaboration, we’re your partner in shaping unforgettable
            narratives. Let’s make your story live on.
          </div>
        </div>
        <div className="works-one">
          <div className="works-one-left">
            <video
              style={{ width: "50vw" }}
              width="auto"
              height="auto"
              autoPlay
              muted
              loop
            >
              <source
                src="https://storage.googleapis.com/praveen_shivanna/Wellbi%20Square%20.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="works-one-right">
            <video
              style={{ width: "50vw" }}
              width="auto"
              height="auto"
              autoPlay
              muted
              loop
            >
              <source src={slideContent5} type="video/mp4" />
            </video>
            <video
              style={{ width: "50vw" }}
              width="auto"
              height="auto"
              autoPlay
              muted
              loop
            >
              <source src={slideContent4} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="reels-header">
          <div>Wellbi</div>
          <div className="reels-desc">Fashion and Apparel</div>
        </div>
        <div className="works-reels">
          {reels1.map((reel, idx) => {
            return (
              <Fragment key={idx}>
                <video
                  style={{ width: "24%", paddingTop: "64px" }}
                  width="auto"
                  height="auto"
                  autoPlay
                  muted
                  loop
                >
                  <source src={reel} type="video/mp4" />
                </video>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
