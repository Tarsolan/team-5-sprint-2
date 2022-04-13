import React from "react";
import { Products } from "./Products";
import { Logger, ConsoleLogger } from "react-console-logger";

Products.forEach(function (a) {
    let price = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
      a.price / 100
    );

function Main() {
  return (
    <div className="background">
      <div className="mainContainer">
          <h1>Weapons... of love</h1>
          <hr />

        Products.map((data) => (
        <div className="mainGrid" key={data.id}>
            <figure>data.image</figure>
            <h2>data.title</h2>
            <p>data.price</p>
        </div>
        ));
      </div>
    </div>
  );
}

export default Main;
