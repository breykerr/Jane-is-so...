import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleState, showMenuSetState] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Jane is so...
          </a>
          <div className={toggleState ? "nav__menu show__menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <Link to="/" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon"></i> Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i> About
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/photovideo" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i>
                  Photo/Video
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i> Portfolio
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i> Contact
                </Link>
              </li>
            </ul>

            <i
              className="uil uil-times nav__close"
              onClick={() => showMenuSetState(!toggleState)}
            ></i>
          </div>

          <div
            className="nav__toggle"
            onClick={() => showMenuSetState(!toggleState)}
          >
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
