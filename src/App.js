import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import BackAnimate from "./components/home/BackAnimate";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Gallery from "./components/media/Media";
import Sweet from "./components/sweet/Sweet";
import Portfolio from "./components/works/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import CommentContextProvider from "./components/context/CommentContextProvider";
import CommentList from "./components/comments/CommentsList";
function App() {
  return (
    <>
      {/* <CommentContextProvider> */}
      <Header />
      <BackAnimate />
      <main className="main__links">
        <Home />
        <About />
        {/* <Skills /> */}
        <Gallery />
        <Sweet />
        {/* <Portfolio /> */}
        {/* <CommentList /> */}
        <Contact />
        <Footer />
      </main>
      {/* </CommentContextProvider> */}
    </>
  );
}

export default App;
