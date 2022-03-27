import { useState } from "react";
import classNames from "classnames";
import { IconMenu2 } from "@tabler/icons";
import { IconX } from "@tabler/icons";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={classNames("menu", showMenu ? "menu-open" : "")}>
      <a
        className={classNames("menu-btn", showMenu && "fixed top-4 left-4")}
        onClick={() => setShowMenu(!showMenu)}>
        {!showMenu ? <IconMenu2 size={28} /> : <IconX color="red" size={28} />}
      </a>
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#" className="menu-link">
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            About
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
