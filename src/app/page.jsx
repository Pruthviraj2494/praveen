"use client";

import Image from "next/image";

import { useState } from "react";
import Slider from "react-slick";

import {
  reels1,
  slideContent4,
  slideContent5,
  sliderItems,
  clientsSlider,
} from "@/utils/data";

import Model from "@/app/components/Model";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./page.scss";
import { Fragment } from "react";
const isMobile = Window.innerWidth <= 678;

const LandingPage = () => {
  const [iframeData, setIframeData] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    pauseOnHover: false,
  };

  const clientsSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 6.6,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <div className="main">
      <div className="landing-page-main">
        <Slider {...settings} className="custom-slider">
          {sliderItems.map((videoData, idx) => {
            return (
              <div
                className="slide-item"
                key={idx}
                onClick={() => setIframeData(videoData)}
              >
                <video
                  style={{ width: "100vw" }}
                  width="auto"
                  height="auto"
                  autoPlay
                  muted
                  loop
                >
                  <source src={videoData.videoUrl} type="video/mp4" />
                </video>
                <div className="video-desc">
                  <div className="video-dec-head">{videoData.header}</div>
                  <div className="video-dec-foot">{videoData.footer}</div>
                </div>
              </div>
            );
          })}
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
        <div className="show-case">
          Every brand has a unique story to tell, and we’re here to bring it to
          life. Through innovative ideas and thoughtful execution, we transform
          concepts into experiences that leave a mark.
        </div>
        <div className="mario-videos">
          <div className="mario-videos-sub">
            <video
              style={{ width: "48vw" }}
              width="auto"
              height="auto"
              autoPlay
              muted
              loop
              onClick={() =>
                setIframeData({
                  iframeUrl: "https://www.youtube.com/embed/TPbyrTAW3hc",
                  header: "Mario",
                })
              }
            >
              <source
                src="https://storage.googleapis.com/praveen_shivanna/Resilia%20Bed%20Ad%20Web%20.mp4 "
                type="video/mp4"
              />
            </video>
            <video
              style={{ width: "48vw" }}
              width="auto"
              height="auto"
              autoPlay
              muted
              loop
              onClick={() =>
                setIframeData({
                  iframeUrl: "https://www.youtube.com/embed/-x8GMVJfjSU",
                  header: "Mario",
                })
              }
            >
              <source
                src="https://storage.googleapis.com/praveen_shivanna/Barbeque%20Nation%20Web.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="mario-videos-sub">
            <video
              style={{ width: "48vw" }}
              width="auto"
              height="auto"
              autoPlay
              muted
              loop
              onClick={() =>
                setIframeData({
                  iframeUrl: "https://www.youtube.com/embed/_vxo4Ural8I",
                  header: "Mario",
                })
              }
            >
              <source
                src="https://storage.googleapis.com/praveen_shivanna/Kurl-on.mp4"
                type="video/mp4"
              />
            </video>
            <video
              style={{ width: "48vw" }}
              width="auto"
              height="auto"
              autoPlay
              muted
              loop
              onClick={() =>
                setIframeData({
                  iframeUrl: "https://www.youtube.com/embed/5UhDI24Mvow",
                  header: "Mario",
                })
              }
            >
              <source
                src="https://storage.googleapis.com/praveen_shivanna/Deep%20rooted.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="reels-header">
          <div>Reels & Shorts</div>
        </div>
        <div className="works-reels">
          {reels1.map((reel, idx) => {
            return (
              <Fragment key={idx}>
                <video
                  style={
                    !isMobile
                      ? {
                          width: "24%",
                          paddingTop: "64px",
                          cursor: "pointer",
                        }
                      : {
                          width: "24%",
                          paddingTop: "12px",
                          cursor: "pointer",
                        }
                  }
                  width="auto"
                  height="auto"
                  autoPlay
                  muted
                  loop
                  onClick={() => setIframeData(reel)}
                >
                  <source src={reel.videoUrl} type="video/mp4" />
                </video>
              </Fragment>
            );
          })}
        </div>

        <div className="client-section">
          <div className="client-header">Our Clients</div>
          <Slider {...clientsSettings} className="client-slider">
            {clientsSlider.map((clientData, idx) => {
              return (
                <div className="client-slide-item" key={idx}>
                  <Image
                    src={clientData.imageUrl}
                    alt={clientData.client}
                    height={isMobile ? 50 : 200}
                    width={isMobile ? 50 : 200}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {iframeData && (
        <Model
          onClose={() => {
            setIframeData(null);
          }}
        >
          <iframe
            src={iframeData.iframeUrl}
            className="iframe"
            title={iframeData.header}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Model>
      )}
    </div>
  );
};

export default LandingPage;
