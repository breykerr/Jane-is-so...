import React from "react";
import BackAnimate from "../home/BackAnimate";
import Works from "./Works";
const Work = () => {
  return (
    <>
      {/* <BackAnimate /> */}
      <section className="works section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My creative soul outpouring</span>

        <Works />
      </section>
    </>
  );
};

export default Work;
