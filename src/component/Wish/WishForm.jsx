import React from "react";

function WishForm() {
  return (
    <form className="wishForm">
      <input type="text" className="wishInput" placeholder="today wish!" />
      <button type="button">입력</button>
    </form>
  );
}

export default WishForm;
