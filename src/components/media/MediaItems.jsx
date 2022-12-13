import React from "react";

const MediaItems = ({ item }) => {
  return (
    <div className="media__card" key={item.id}>
      <img
        title="cutee"
        src={item.images}
        alt="Jane photo"
        className="media__img"
      />
    </div>
  );
};

export default MediaItems;
