import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import BackAnimate from "./components/home/BackAnimate";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Gallery from "./components/media/Media";
import Portfolio from "./components/works/Work";
import MainLinks from "./MainLinks";

function App() {
  return (
    <>
      <Header />
      <BackAnimate />
      <MainLinks />
      {/* <main className="main__links">
          <Home />
          <About />
          <Skills />
          <Gallery />
          <Portfolio />
        </main> */}
    </>
  );
}

export default App;
