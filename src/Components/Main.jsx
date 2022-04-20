import React from "react";
import products from "../data/products.json";
import { useNavigate } from "react-router-dom";

const Main = ({ handleSelect }) => {
  // Bring you to ProductInfo.jsx when you click of products
  const navigate = useNavigate();
  const goToAccountDetail = () => navigate("/info");

  const navigateTo = (a) => {
    handleSelect(a);
    goToAccountDetail();
  };

  // Categorie 1 Roses Product Filter
  let Roses = products.filter((item) => {
    return item.categories.includes("c1");
  });

  // Categorie 2 Lilie Product Filter
  let Lilies = products.filter((item) => {
    return item.categories.includes("c2");
  });

  // Categorie 3 Carnations Filter
  let Carnations = products.filter((item) => {
    return item.categories.includes("c3");
  });

  // Categorie 4 Mixed Filter
  let Mixed = products.filter((item) => {
    return item.categories.includes("c4");
  });

  return (
    <div className="mainContainer">
      <h1>Weapons... of love</h1>
      <hr />

      <div className="gridContainer">
        {/* <Roses products={products} navigateTo={navigateTo} /> */}
        <>
          {Roses.map((item) => {
            return (
              <div
                className="itemBox"
                key={item.id}
                onClick={() => navigateTo(item)}
              >
                <figure>
                  <img src={item.image} alt="product" />
                </figure>
                <h2>{item.title}</h2>
                <p>
                  {new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD",
                  }).format(item.price / 100)}
                </p>
              </div>
            );
          })}
        </>

        {/* <Lilies products={products} navigateTo={navigateTo} /> */}
        <>
          {Lilies.map((item) => {
            return (
              <div
                className="itemBox"
                key={item.id}
                onClick={() => navigateTo(item)}
              >
                <figure>
                  <img src={item.image} alt="product" />
                </figure>
                <h2>{item.title}</h2>
                <p>
                  {new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD",
                  }).format(item.price / 100)}
                </p>
              </div>
            );
          })}
        </>

        {/* <Carnations products={products} navigateTo={navigateTo} /> */}
        <>
          {Carnations.map((item) => {
            return (
              <div
                className="itemBox"
                key={item.id}
                onClick={() => navigateTo(item)}
              >
                <figure>
                  <img src={item.image} alt="product" />
                </figure>
                <h2>{item.title}</h2>
                <p>
                  {new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD",
                  }).format(item.price / 100)}
                </p>
              </div>
            );
          })}
        </>

        {/* <Mixed products={products} navigateTo={navigateTo} /> */}
        <>
          {Mixed.map((item) => {
            return (
              <div
                className="itemBox"
                key={item.id}
                onClick={() => navigateTo(item)}
              >
                <figure>
                  <img src={item.image} alt="product" />
                </figure>
                <h2>{item.title}</h2>
                <p>
                  {new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD",
                  }).format(item.price / 100)}
                </p>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default Main;
