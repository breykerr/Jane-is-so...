import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import BackAnimate from "./components/home/BackAnimate";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Gallery from "./components/media/Media";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Header />
      {/* <BackAnimate /> */}
      <main className="main__links">
        <Home />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
