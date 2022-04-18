import React from "react";
import { useNavigate } from "react-router-dom";

export const Lilies = ({ products, handleSelect }) => {
  let Lilies = products.filter((item) => {
    return item.categories.includes("c2");
  });

  // Bring you to ProductInfo.jsx when you click of products
  const navigate = useNavigate();
  const goToAccountDetail = () => navigate("/info");

  const navigateTo = (a) => {
    handleSelect(a);
    goToAccountDetail();
  };

  return (
    <>
      {Lilies.map((item) => {
        return (
          <div
            className="itemBox"
            key={item.id}
            onClick={() => navigateTo(item)}
          >
            <figure>
              <img src={item.image} alt="image-JPG" />
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
  );
};

export default Lilies;
