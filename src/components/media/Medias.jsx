import React, { useState } from "react";
import MediaItems from "./MediaItems";
import { JanePhotos } from "./DataMedia";
import { Pagination } from "@mui/material";

const Medias = () => {
  const [page, setCountPage] = useState(1);
  const janePhoto = 4;
  const count = Math.ceil(JanePhotos.length / janePhoto);

  const handlePage = (e, i) => {
    setCountPage(i);
  };

  function currentData() {
    const begin = (page - 1) * janePhoto;
    const end = begin + janePhoto;
    return JanePhotos.slice(begin, end);
  }

  return (
    <>
      <div className="media__container container grid">
        {JanePhotos ? (
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
        />
      </div>
    </>
  );
};

export default Medias;
