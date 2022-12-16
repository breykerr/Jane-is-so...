import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jane</h1>
        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Poems
            </a>
          </li>
          {/* <li>
            <Link to="/secret" className="footer__link">
              Secret
            </Link>
          </li> */}
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/zholdubaevva/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://t.me/zholdubaevva"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-telegram"></i>
          </a>
          <a
            href="https://github.com/thaddeusss"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-tiktok"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Thaddeus</span>
      </div>
    </footer>
  );
};

export default Footer;
