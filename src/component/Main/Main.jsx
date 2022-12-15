import React from "react";
import Wish from "../Wish/Wish";
import "./Main.scss";

function Main() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const nowDate = `${year}년 ${month}월 ${date}일`;

  const userName = "예은";
  return (
    <div className="mainWrap">
      <p className="todayDate">{nowDate}</p>
      <p className="greeting">{userName}님, 안녕하세요:)</p>
      <Wish />
    </div>
  );
}

export default Main;
