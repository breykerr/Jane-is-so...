import React from "react";
import "./Works.css";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <video
        src={item.video}
        alt="Poems"
        controls
        width="200"
        className="work__video"
      ></video>
    </div>
  );
};

export default WorkItems;
