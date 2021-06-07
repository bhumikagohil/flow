import React, { useState } from "react";

import Header from "./Header";
import Body from "./Body";

function Main() {
  const [dark, setDark] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [blur, setBlur] = useState(true);

  const [thoughts, setThoughts] = useState([
    { createdAt: "", thought: "hello" },
  ]);

  const handleKeyDown = (event) => {
    let now = new Date().toLocaleString();
    if (event.key === "Enter") {
      setThoughts((prevState) => [
        ...prevState,
        { createdAt: now, thought: inputValue },
      ]);
      setInputValue("");
    }
  };
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const changeTheme = () => {
    setDark(!dark);
  };

  const clearThoughts = () => {
    setThoughts([]);
  };

  const toggleBlur = () => {
    setBlur(!blur);
  };
  return (
    <div className={dark ? "light" : "dark"}>
      <Header
        changeTheme={changeTheme}
        clearThoughts={clearThoughts}
        toggleBlur={toggleBlur}
      />
      <Body
        thoughts={thoughts}
        inputValue={inputValue}
        blur={blur}
        changeInputValue={changeInputValue}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Main;
