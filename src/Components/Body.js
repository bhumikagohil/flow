import React, { useState } from "react";
import Thoughts from "./Thoughts";
const Body = ({
  thoughts,
  handleKeyDown,
  inputValue,
  changeInputValue,
  blur,
}) => {
  return (
    <div className="flow-body">
      <div>
        <h2>Today</h2>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={inputValue}
          onChange={changeInputValue}
          onKeyDown={handleKeyDown}
          className="thought-input"
        />
      </div>
      <hr></hr>
      <Thoughts thoughts={thoughts} blur={blur} />
    </div>
  );
};

export default Body;
