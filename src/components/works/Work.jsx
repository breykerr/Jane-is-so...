import React from "react";
import AddContact from "../comments/AddComment";
import BackAnimate from "../home/BackAnimate";
import Works from "./Works";
import CommentList from "../comments/CommentsList";
const Work = () => {
  return (
    <>
      <BackAnimate />
      <section className="works section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My creative soul outpouring</span>

        <Works />
        {/* <AddContact /> */}
        {/* <CommentList /> */}
      </section>
    </>
  );
};

export default Work;
