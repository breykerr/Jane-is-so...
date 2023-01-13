import React from "react";

const Info = () => {
  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
          <i className="bx bx-award"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">2 years of commercial work</span>
        </div>

        <div className="about__box">
          <i className="bx bx-briefcase-alt"></i>
          <h3 className="about__title">Published</h3>
          <span className="about__subtitle">15+ poems</span>
        </div>

        <div className="about__box">
          <i className="bx bx-crown"></i>
          <h3 className="about__title">President</h3>
          <a
            style={{
              display: "inline",
              borderBottom: "1.5px solid #1b2735",
            }}
            href="https://88.edubish.kg/o-nas/"
            target="_blank"
            rel="noopener noreferrer"
            className="about__subtitle"
          >
            School №88
          </a>
        </div>
      </div>
    </>
  );
};

export default Info;
