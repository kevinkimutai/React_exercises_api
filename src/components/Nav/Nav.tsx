import React from "react";
import NavItem from "../NavItems/NavItem";
import Search from "../Search/Search";

import "./Nav.css";

const Nav = () => {
  return (
    <section className="nav-section section__shadow">
      <h1 className="logo">GYMIFY</h1>
      <Search />
      <NavItem />
    </section>
  );
};

export default Nav;
