import React from "react";
import "./Main.scss";

function Main() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const nowDate = `${year}/${month}/${date}`;
  return (
    <div className="mainWrap">
      <p className="todayDate">{nowDate}</p>
    </div>
  );
}

export default Main;
