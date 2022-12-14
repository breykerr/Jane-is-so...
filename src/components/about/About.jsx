import React from "react";
import "./About.css";
import JaneAboutMe from "../../assets/img/Luffy icon.jpg";
import Info from "./Info";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">my education</span>

        <div className="about__container container grid">
          <img src={JaneAboutMe} alt="photoJane" id="about__img"></img>
          <div className="about__data">
            <Info />
            <p className="about__desc">
              (some text) pumpie umpy umpkin pumpie umpy umpkin pumpie umpy
              umpkin pumpie umpy pumpie umpy umpkin pumpie umpy umpkin pumpie
            </p>
            {/* <a className="button button__flex">for fun</a> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
