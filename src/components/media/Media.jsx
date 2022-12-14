import React from "react";
import Sweet from "../sweet/Sweet";
import "./Media.css";
import Medias from "./Medias";
const Media = () => {
  return (
    <>
      <section className="media section" id="media">
        <h2 className="section__title">Gallery</h2>
        <span className="section__subtitle">Мy memories</span>

        <Medias />
        <Sweet />
      </section>
    </>
  );
};

export default Media;
