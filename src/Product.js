import React from "react";
import "./Product.css";

function Product({ title, img, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.5</strong>
        </p>
        <div classname="product__rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://image.shutterstock.com/image-photo/retro-interior-design-living-room-600w-1656451228.jpg"
        alt=""
      ></img>
      <button>add to basket</button>
    </div>
  );
}

export default Product;
