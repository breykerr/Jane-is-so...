import React from "react";
import "./Sweet.css";
import BackAnimate from "../home/BackAnimate";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { JaneVideo } from "../media/DataMedia";
const Sweet = () => {
  return (
    <>
      {/* <BackAnimate /> */}
      <section
        className="sweet section"
        // style={{ padding: "2rem 0 1rem" }}
      >
        <h2 className="section__title">❤❤❤</h2>
        {/* <span className="section__subtitle">Jarkyn</span> */}
        <Swiper
          className="comment__container"
          loop={true}
          grabCursor={true}
          spaceBetween={34}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {JaneVideo.map((item, index) => {
            return (
              <SwiperSlide className="comment__card" key={index}>
                <video
                  title="cuteee"
                  alt="Poems"
                  controls
                  className="sweet__video"
                >
                  <source src={item.videos} />
                </video>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Sweet;
