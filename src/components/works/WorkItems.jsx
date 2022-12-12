import React from "react";
import "./Works.css";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      {/* <img src={item.img} alt="Poems" className="work__video" /> */}
      <video
        // style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
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
