import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Menu from "./Menu/Menu";
import Title from "./Title/Title";

function Header() {
  return (
    <header className="headerWrap">
      <Menu />
      <Title />
    </header>
  );
}

export default Header;
