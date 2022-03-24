import React from "react";

const Input = ({ setCity }) => {
  return (
    <input
      onChange={(e) => setCity(e.target.value)}
      className="form-control my-3"
    ></input>
  );
};

export default Input;
