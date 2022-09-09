import React from "react";

import { MdOutlineSearch } from "react-icons/md";
import { motion } from "framer-motion";

import "./Search.css";

const Search = () => {
  return (
    <div className="search-container">
      <motion.input
        whileFocus={{ backgroundColor: "#431d3299", color: "#fefefe" }}
        placeholder="Search name of workout eg Lat Pulldown"
        type="text"
      />
      <MdOutlineSearch className="search-icon" />
    </div>
  );
};

export default Search;
