import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { commentContext } from "../context/CommentContextProvider";

const AddContact = () => {
  const { addComments } = useContext(commentContext);
  //   console.log(addContact);

  const [review, setReview] = useState({
    name: "",
    desc: "",
  });

  const handleInp = (e) => {
    let obj = {
      ...review,
      [e.target.name]: e.target.value,
    };

    setReview(obj);
  };

  return (
    <>
      <form className="comment__form">
        <div className="contact__form-div ">
          <label className="contact__from-tag">
            <i className="bx bx-user"></i> Name
          </label>
          <input
            type="text"
            name="name"
            className="contact__form-input"
            placeholder="Insert your name"
            onChange={handleInp}
            value={review.name || ""}
          />
        </div>
        <div className="contact__form-div contact__form-area ">
          <label className="contact__from-tag">Comment</label>
          <textarea
            name="desc"
            cols="30"
            rows="10"
            className="contact__form-input"
            placeholder="Write your comment"
            onChange={handleInp}
            value={review.desc || ""}
          ></textarea>
        </div>
        <button
          className="button button__flex"
          type="button"
          onClick={() => {
            addComments(review);
            setReview({ name: "", desc: "" });
          }}
        >
          Add a comment
        </button>
      </form>
    </>
  );
};

export default AddContact;
