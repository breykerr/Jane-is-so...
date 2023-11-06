import React, { useRef } from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact</h2>
        {/* <span className="section__subtitle">Contact me</span> */}

        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>
            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bxl-telegram contact__card-icon"></i>
                <h3 className="contact__card-title">Telegram</h3>
                <span className="contact__card-data">@zholdubaevva</span>
                <a
                  href="https://t.me/zholdubaevva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__button"
                >
                  Write me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
              <div className="contact__card">
                <i className="bx bxl-instagram contact__card-icon"></i>
                <h3 className="contact__card-title">Instagram</h3>
                <span className="contact__card-data">@zholdubaevva</span>
                <a
                  href="https://www.instagram.com/zholdubaevva/"
                  className="contact__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Write me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
              <div className="contact__card">
                <i className="bx bx-sitemap contact__card-icon"></i>
                <h3 className="contact__card-title">JaneIsMine</h3>
                <span className="contact__card-data">Mistress</span>
                <a
                  href="https://thaddeusss.github.io/Mistress/"
                  className="contact__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
