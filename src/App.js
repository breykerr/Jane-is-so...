import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import MainLinks from "./MainLinks";
function App() {
  return (
    <>
      <Header />
      <MainLinks />
      {/* <main className="main"> */}
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Skills /> */}
      {/* </main> */}
    </>
  );
}

export default App;
