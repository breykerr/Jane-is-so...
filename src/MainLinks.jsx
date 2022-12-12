import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import { Route, Routes } from "react-router-dom";
const MainLinks = () => {
  const ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/about",
      element: <About />,
      id: 2,
    },
    {
      link: "/skills",
      element: <Skills />,
      id: 3,
    },
  ];
  return (
    <Routes>
      {ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainLinks;
