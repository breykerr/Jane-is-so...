import React from "react";
import "./Media.css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { JanePhotos } from "./DataMedia";
import "../comments/Comment.css";
const Media = () => {
  return (
    <>
      <section className="media section" id="media">
        <h2 className="section__title">Gallery</h2>
        <span className="section__subtitle">Мy memories</span>
        <p className="media__desc">
          Проведите пальцем по фотографии, чтобы открыть новые очаровательные
          снимки прекрасной девушки, в которую я влюблен всеми своими фибрами
          души(≧◡≦) ♡→
        </p>
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
          {JanePhotos.map((item, index) => {
            return (
              <SwiperSlide className="comment__card" key={index}>
                <img
                  title="cutee"
                  src={item.images}
                  alt="Jane photo"
                  className="media__img"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Media;
