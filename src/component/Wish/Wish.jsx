import React from "react";
import "./Wish.scss";
import WishForm from "./WishForm";
import WishList from "./WishList";

function Wish() {
  return (
    <div className="wishWrap">
      <p className="wishP">오늘의 소원을 적어보세요!</p>
      <WishForm />
      <WishList />
    </div>
  );
}

export default Wish;
