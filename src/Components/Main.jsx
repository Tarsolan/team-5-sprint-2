import React from "react";
import products from "../data/products.json";
import Roses from "./Roses";
import Lilies from "./Lilies";
import Carnations from "./Carnations";
import Mixed from "./Mixed";

const Main = ({ handleSelect }) => {
  return (
    <div className="mainContainer">
      <h1>Weapons... of love</h1>
      <hr />

      <div className="gridContainer">
        <Roses products={products} navigateTo={navigateTo} />
        <Lilies products={products} navigateTo={navigateTo} />
        <Carnations products={products} navigateTo={navigateTo} />
        <Mixed products={products} navigateTo={navigateTo} />
      </div>
    </div>
  );
};

export default Main;
