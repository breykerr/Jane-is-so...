import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/zholdubaevva/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://t.me/zholdubaevva"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-telegram"></i>
      </a>
      <a
        href="https://www.tiktok.com/@zholdubaevva"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-tiktok"></i>
      </a>
      <a
        href="https://www.youtube.com/@zholdubaevva"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-youtube"></i>
      </a>
    </div>
  );
};

export default Social;
