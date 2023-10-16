import React from "react";
import "./About.css";
import JaneAboutMe from "../../assets/img/photoAbout.jpg";
import Info from "./Info";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">Anything</span>

        <div className="about__container container grid">
          <div id="about__img"></div>
          <div className="about__data">
            <Info />
            <p className="about__desc">
              Не прекращай сверкать улыбкой, она очаровательна! Ты просто
              впечатляешь🤍🤍
            </p>
            {/* <p className="about__desc">
              (some text) pumpie umpy umpkin pumpie umpy umpkin pumpie umpy
              umpkin pumpie umpy pumpie umpy umpkin pumpie umpy umpkin pumpie
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
