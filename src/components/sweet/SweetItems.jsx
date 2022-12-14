import React from "react";
import "./Sweet.css";

const SweetItems = ({ item }) => {
  return (
    <div className="sweet__card" key={item.id}>
      <video alt="Poems" controls className="sweet__video">
        <source src={item.videos} />
      </video>
    </div>
  );
};

export default SweetItems;
