import React from "react";
import products from "../data/products.json";
import Roses from "./Roses";
import Lilies from "./Lilies";
import Carnations from "./Carnations";
import Mixed from "./Mixed";
import { useNavigate } from "react-router-dom";

const Main = ({ handleSelect }) => {
  // Bring you to ProductInfo.jsx when you click of products
  const navigate = useNavigate();
  const goToAccountDetail = () => navigate("/info");

  const navigateTo = (a) => {
    handleSelect(a);
    goToAccountDetail();
  };

  return (
    <div className="background">
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
    </div>
  );
};

export default Main;
