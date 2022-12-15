import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

function Menu() {
  return (
    <nav className="menuNav">
      <ul>
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/todo">TODO</Link>
        </li>
        <li>
          <Link to="/memo">MEMO</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
