import React from "react";
import SweetVid from "./SweetVid";
import "./Sweet.css";
import BackAnimate from "../home/BackAnimate";
const Sweet = () => {
  return (
    <>
      <BackAnimate />
      <section className="sweet section" style={{ padding: "2rem 0 1rem" }}>
        <h2 className="section__title">❤❤❤</h2>
        <span className="section__subtitle">Jarkyn</span>

        <SweetVid />
      </section>
    </>
  );
};

export default Sweet;
