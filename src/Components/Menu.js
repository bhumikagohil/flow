import React from "react";
const Menu = ({ changeTheme, clearThoughts, toggleBlur }) => {
  return (
    <ul className="menu-list">
      <li className="menu-item" onClick={toggleBlur}>
        Toggle Blur
      </li>
      <li className="menu-item">Toggle Flow Mode</li>
      <li className="menu-item" onClick={changeTheme}>
        Toggle Theme
      </li>
      <li className="menu-item">Search Thoughts</li>
      <li className="menu-item" onClick={clearThoughts}>
        Clear Thoughts
      </li>
    </ul>
  );
};

export default Menu;
