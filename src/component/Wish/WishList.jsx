import React from "react";
import "./WishList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function WishList() {
  return (
    <div className="wishListWrap">
      <span className="whistItem">행복해지기</span>
      <button className="wishDeleteBtn">
        <FontAwesomeIcon icon={faTrashCan} color="#464ea3" />
      </button>
    </div>
  );
}

export default WishList;
