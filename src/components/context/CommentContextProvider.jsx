import axios from "axios";
import React, { createContext, useReducer } from "react";

export const commentContext = createContext();

const INIT_STATE = {
  reviews: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_REVIEWS":
      return { ...state, reviews: action.payload };

    default:
      return state;
  }
};

const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addComments = async (newContact) => {
    await axios.post("http://localhost:8000/reviews", newContact);
    getComments();
  };

  const getComments = async () => {
    let { data } = await axios("http://localhost:8000/reviews");
    dispatch({
      type: "GET_REVIEWS",
      payload: data,
    });
  };

  return (
    <commentContext.Provider
      value={{
        addComments: addComments,
        getComments: getComments,

        reviews: state.reviews,
      }}
    >
      {children}
    </commentContext.Provider>
  );
};

export default ContactContextProvider;
