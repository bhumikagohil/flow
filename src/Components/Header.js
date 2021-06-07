import React, { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import Menu from "./Menu";

const Header = ({ changeTheme, clearThoughts, toggleBlur }) => {
  const [openMenu, setOpenMenu] = useState("");

  return (
    <div className="header">
      <ul className="header-list">
        <li className="header-logo list-item">
          <FaReact className="header-icon" />
        </li>
        <li
          className="header-menu list-item"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <HiMenuAlt3 className="header-icon" />
        </li>
      </ul>
      {openMenu ? (
        <Menu
          changeTheme={changeTheme}
          clearThoughts={clearThoughts}
          toggleBlur={toggleBlur}
        />
      ) : null}
    </div>
  );
};

export default Header;
