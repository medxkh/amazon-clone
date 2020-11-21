import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-ZTdjZDU2MDct-w1500._CB417584538_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product title="lopsdkd" img="" rating="" />
          <Product title="lopsdkd" img="" rating="" />
        </div>
        <div className="home__row">
          <Product title="lopsdkd" img="" rating="" />
          <Product title="lopsdkd" img="" rating="" />
          <Product title="lopsdkd" img="" rating="" />
        </div>
        <div className="home__row">
          <Product title="lopsdkd" img="" rating="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
