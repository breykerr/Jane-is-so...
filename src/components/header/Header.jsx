import React, { useState } from "react";
import "./header.css";
const Header = () => {
  const [toggleState, showMenuSetState] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Jane
          </a>
          <div className={toggleState ? "nav__menu show__menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon"></i> H
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link active-link">
                  <i className="uil uil-user nav__icon"></i> Abt
                </a>
              </li>
              {/* <li className="nav__item">
                <a href="#skills" className="nav__link active-link">
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a>
              </li> */}
              <li className="nav__item">
                <a href="#media" className="nav__link active-link">
                  <i className="uil uil-scenery nav__icon"></i>G
                </a>
              </li>
              {/* <li className="nav__item">
                <a href="#portfolio" className="nav__link active-link">
                  <i className="uil uil-scenery nav__icon"></i> Portfolio
                </a>
              </li> */}
              <li className="nav__item">
                <a href="#contact" className="nav__link active-link">
                  <i className="uil uil-message nav__icon"></i> C
                </a>
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
