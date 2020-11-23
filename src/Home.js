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
          <Product title="the lean strat app" price={19.99} img="" rating={3} />
          <Product title="lopsdkd" price={17.8} img="" rating="" />
        </div>
        <div className="home__row">
          <Product title="lopsdkd" price={565.5} img="" rating="" />
          <Product title="lopsdkd" price={50.7} img="" rating="" />
          <Product title="lopsdkd" price={999} img="" rating="" />
        </div>
        <div className="home__row">
          <Product title="lopsdkd" price={290.9} img="" rating="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
