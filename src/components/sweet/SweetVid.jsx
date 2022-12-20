import React, { useState } from "react";
import SweetItems from "./SweetItems";
import { JaneVideo } from "../media/DataMedia";
import { Pagination } from "@mui/material";
import "./Sweet.css";

const SweetVid = () => {
  const [videoJane, setVideoJane] = useState([]);
  const [page, setPage] = useState(1);
  const poemsItem = 4;
  const count = Math.ceil(JaneVideo.length / poemsItem);

  const handlePage = (e, i) => {
    setPage(i);
  };

  function currentData() {
    const begin = (page - 1) * poemsItem;
    const end = begin + poemsItem;
    return JaneVideo.slice(begin, end);
  }

  return (
    <div>
      <div className="sweet__container container grid">
        {videoJane ? (
          currentData().map((item) => {
            return <SweetItems item={item} key={item.id} />;
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <div className="work__pagination-wrapper">
        <Pagination
          count={count}
          page={page}
          onChange={handlePage}
          variant="outlined"
          color="secondary"
        />
      </div>
    </div>
  );
};

export default SweetVid;
