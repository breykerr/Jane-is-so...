import React, { useEffect, useState } from "react";
import { poemsData, poemsCat } from "./DataWorks";
import WorkItems from "./WorkItems";
import "./Works.css";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [poems, setPoems] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setPoems(poemsData);
    } else {
      const newPoems = poemsData.filter((poems) => {
        return poems.category === item.name;
      });
      setPoems(newPoems);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {poemsCat.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active__work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {poems.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
