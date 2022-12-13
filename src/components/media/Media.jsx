import React from "react";
import "./Media.css";
import Medias from "./Medias";
const Media = () => {
  return (
    <>
      <section className="media section">
        <h2 className="section__title">Gallery</h2>
        <span className="section__subtitle">Мy memories</span>

        <Medias />
      </section>
    </>
  );
};

export default Media;
