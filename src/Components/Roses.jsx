import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Roses = ({ handleSelect, product, products, addItemToCart }) => {
  const [quantity, setQuantity] = useState();

  const sendDataToCart = (e) => {
    e.preventDefault();

    addItemToCart(quantity, product);
  };

  const navigate = useNavigate();
  const goToAccountDetail = () => navigate("/cart");

  const navigateTo = (a) => {
    handleSelect(a);
    goToAccountDetail();
  };

  let Roses = products.filter((item) => {
    return item.categories.includes("c1");
  });

  return (
    <div className="catContainer">
      <h1>Roses</h1>
      <hr />

      <div className="catGridContainer">
        {Roses.map((item) => {
          return (
            <div className="itemRow" key={item.id}>
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
              <form className="catQuantity" onSubmit={sendDataToCart}>
                <input
                  type="number"
                  name="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                />

                <button
                  type="submit"
                  className="catCartBtn"
                  onClick={() => navigateTo(item)}
                >
                  <i className="fas fa-cart-plus"> Add to Cart</i>
                </button>
                <hr />
              </form>
              <div className="descrip">
                <i>
                  <h3>Description:</h3>
                </i>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roses;
