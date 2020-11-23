import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.kinabaluprintshop.com/images/product/124_117_banner1_copy_copy20.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title"> your shopping basket </h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
