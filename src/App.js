import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import BackAnimate from "./components/home/BackAnimate";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Gallery from "./components/media/Media";
import Portfolio from "./components/works/Work";
// import Sweet from "./components/sweet/Sweet";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <BackAnimate />
      <main className="main__links">
        <Home />
        <About />
        <Skills />
        <Gallery />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
