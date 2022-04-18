import React from "react";
import products from "../data/products.json";
import Roses from "./Roses";
import Lilies from "./Lilies";
import Carnations from "./Carnations";
import Mixed from "./Mixed";

const Main = ({ handleSelect }) => {
  return (
    <div className="background">
      <div className="mainContainer">
        <h1>Weapons... of love</h1>
        <hr />

        <div className="gridContainer">
          <Roses products={products} handleSelect={handleSelect} />
          <Lilies products={products} handleSelect={handleSelect} />
          <Carnations products={products} handleSelect={handleSelect} />
          <Mixed products={products} handleSelect={handleSelect} />
        </div>
      </div>
    </div>
  );
};

export default Main;
