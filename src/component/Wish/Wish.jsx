import React from "react";
import "./Wish.scss";

function Wish() {
  return (
    <div className="wishWrap">
      <p className="wishP">오늘의 소원을 적어보세요!</p>
      <form className="wishForm">
        <input type="text" className="wishInput" placeholder="today wish!" />
        <button type="button">입력</button>
      </form>
    </div>
  );
}

export default Wish;
