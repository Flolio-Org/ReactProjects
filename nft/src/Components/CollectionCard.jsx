import React from "react";
import weth from "../assets/weth.png";

function CollectionCard({ id, name, traits, image, handleClick }) {
  return (
    <div className="collectionCard">
      <img src={image} alt={id} onClick={handleClick} />
      <div className="details">
        <div className="name">
          {name} <div className="id">.#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} className="wethImage" alt="" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
