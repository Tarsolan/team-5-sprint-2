import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const Lilies = ({ products, addItemToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const sendDataToCart = (e, product) => {
    e.preventDefault();
    if (quantity === 0) {
      alert("Error. Quantity must be greater than 0.");
      return;
    }

    addItemToCart(quantity, product);
  };

  let Lilies = products.filter((item) => {
    return item.categories.includes("c2");
  });

  // Keeping this useNavigate in case we want to use it for some other purpose
  // // Bring you to ProductInfo.jsx when you click of products
  // const navigate = useNavigate();
  // const goToAccountDetail = () => navigate("/info");

  // const navigateTo = (a) => {
  //   handleSelect(a);
  //   goToAccountDetail();
  // };

  return (
    <div className="catContainer">
      <h1>Lilies</h1>
      <hr />

      <div className="catGridContainer">
        {Lilies.map((item) => {
          return (
            <div className="itemRow" key={item.id}>
              <figure>
                <img src={item.image} alt="A Lily" />
              </figure>
              <h2>{item.title}</h2>
              <p>
                {new Intl.NumberFormat("en-CA", {
                  style: "currency",
                  currency: "CAD",
                }).format(item.price / 100)}
              </p>
              <form
                className="catQuantity"
                onSubmit={(e) => sendDataToCart(e, item)}
              >
                <input
                  type="number"
                  name="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  min="0"
                />

                <button
                  type="submit"
                  className="catCartBtn"
                  //onClick={() => navigateTo(item)}
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

export default Lilies;
