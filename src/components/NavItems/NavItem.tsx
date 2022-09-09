import React, { useState } from "react";

import {
  MdAccountBox,
  MdCall,
  MdOutlineHelp,
  MdMoreVert,
} from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import "./NavItem.css";

const NavItem = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <AnimatePresence>
      <ul className="nav-item__container">
        <li className="nav-item">
          <MdCall className="nav-icon" />
          Contact
        </li>
        <li className="nav-item">
          <MdOutlineHelp className="nav-icon" />
          Help
        </li>
        <li className="nav-item">
          <MdAccountBox className="nav-icon" />
          Profile
        </li>
      </ul>

      {showMenu && (
        <motion.ul
          initial={{ x: "150%" }}
          animate={{ x: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          className="nav-item__container--sm section__shadow"
        >
          <li className="nav-item--sm">
            <MdCall className="nav-icon" />
            Contact
          </li>
          <li className="nav-item--sm">
            <MdOutlineHelp className="nav-icon" />
            Help
          </li>
          <li className="nav-item--sm">
            <MdAccountBox className="nav-icon" />
            Profile
          </li>
        </motion.ul>
      )}

      <button
        className="nav-menu__btn section__shadow"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <MdMoreVert className="nav-menu__burger-icon" />
      </button>
    </AnimatePresence>
  );
};

export default NavItem;
