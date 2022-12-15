import React from "react";
import { useLocation } from "react-router-dom";
import "./Title.scss";

function Title() {
  const name = useLocation();
  const urlName = name.pathname.split("/")[1].toUpperCase();

  return (
    <nav className="titleNav">
      <h1>{urlName}</h1>
      <div className="titleLine">
        <div className="line"></div>
        <div className="empty"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Title;
