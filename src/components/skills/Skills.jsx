import React from "react";
import "./Skills.css";
import Right from "./Right";
import Left from "./Left";

const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My creative skills</span>

        <div className="skills__container container grid">
          <Right />
          <Left />
        </div>
      </section>
    </>
  );
};

export default Skills;
