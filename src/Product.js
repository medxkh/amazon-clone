import React from "react";
import "./Product.css";

function Product({ title, price, img, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p> {title} </p>
        <p className="product__price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div classname="product__rating" style={{ display: "flex" }}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt=""></img>
      <button>add to basket</button>
    </div>
  );
}

export default Product;
