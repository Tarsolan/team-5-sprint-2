import React, { useState } from "react";

export const Mixed = ({ products, addItemToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const sendDataToCart = (e, product) => {
    e.preventDefault();
    if (quantity === 0) {
      alert("Error. Quantity must be greater than 0.");
      return;
    }

    addItemToCart(quantity, product);
  };

  let Mixed = products.filter((item) => {
    return item.categories.includes("c4");
  });

  return (
    <div className="catContainer">
      <h1>Mixed Flowers</h1>
      <hr />

      <div className="catGridContainer">
        {Mixed.map((item) => {
          return (
            <div className="itemRow" key={item.id}>
              <figure>
                <img src={item.image} alt="A Mixed Basket" />
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

                <button type="submit" className="catCartBtn">
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

export default Mixed;
