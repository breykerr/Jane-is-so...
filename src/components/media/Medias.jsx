import React, { useState } from "react";
import MediaItems from "./MediaItems";
import { JaneMedia } from "./DataMedia";
import { Pagination } from "@mui/material";
const Medias = () => {
  const [page, setCountPage] = useState(1);
  const janePhoto = 4;
  const count = Math.ceil(JaneMedia.length / janePhoto);

  const handlePage = (e, i) => {
    setCountPage(i);
  };

  function currentData() {
    const begin = (page - 1) * janePhoto;
    const end = begin + janePhoto;
    return JaneMedia.slice(begin, end);
  }

  return (
    <>
      <div className="media__container container grid">
        {JaneMedia ? (
          currentData().map((item) => {
            return <MediaItems item={item} key={item.id} />;
          })
        ) : (
          <h3 style={{ color: "white", fontSize: "var(--h1-font-size)" }}>
            Loading...wait please
          </h3>
        )}
      </div>
      <div className="work__pagination-wrapper">
        <Pagination
          count={count}
          page={page}
          onChange={handlePage}
          variant="outlined"
          shape="rounded"
          // disabled="false"
        />
      </div>
    </>
  );
};

export default Medias;
