import React, { useContext, useEffect } from "react";
import { commentContext } from "../context/CommentContextProvider";
import "./Comment.css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import AddContact from "./AddComment";

const ContactList = () => {
  const { reviews, getComments } = useContext(commentContext);

  useEffect(() => {
    getComments();
  }, []);

  return (
    <section className="comment container section">
      <h2 className="section__title">Comments</h2>
      <span className="section__subtitle">
        Write it short and smart (you can't delete your comment)
      </span>
      <AddContact />

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
        // className="mySwiper"
      >
        {reviews.map((item, index) => {
          return (
            <SwiperSlide className="comment__card" key={index}>
              <h3 className="comment__name">
                <i className="bx bx-user"></i>
                &nbsp;&nbsp;&nbsp;{item.name}&nbsp;:
              </h3>
              <p className="comment__desc">{item.desc}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ContactList;
