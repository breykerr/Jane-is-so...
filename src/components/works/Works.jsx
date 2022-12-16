import React, { useEffect, useState } from "react";
import { poemsData, poemsCat } from "./DataWorks";
import WorkItems from "./WorkItems";
import "./Works.css";
import { Pagination } from "@mui/material";

const Works = () => {
  const [type, setType] = useState({ name: "all" });

  const [poems, setPoems] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (type.name === "all") {
      setPoems(poemsData);
    } else {
      const newPoems = poemsData.filter((poems) => {
        return poems.category === type.name;
      });
      setPoems(newPoems);
    }
  }, [type]);

  const [page, setPage] = useState(1);
  const poemsItem = 4;
  const count = Math.ceil(poemsData.length / poemsItem);

  const handlePage = (e, i) => {
    setPage(i);
  };

  function currentData() {
    const begin = (page - 1) * poemsItem;
    const end = begin + poemsItem;
    return poemsData.slice(begin, end);
  }

  const handleClick = (e, index) => {
    setType({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      {/* <div className="work__filters">
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
      </div> */}

      <div className="work__container container grid">
        {poems ? (
          currentData().map((item) => {
            return <WorkItems item={item} key={item.id} />;
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      <div className="work__pagination-wrapper">
        <Pagination
          count={count}
          page={page}
          onChange={handlePage}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default Works;
