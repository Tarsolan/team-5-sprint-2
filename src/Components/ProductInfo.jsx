import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ product, addItemToCart }) => {
  const { id, title, description, price, image } = product;
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();
  const goToShoppingCart = () => navigate("/cart");

  const sendDataToCart = (e) => {
    e.preventDefault();
    if (quantity === 0) {
      alert("Error. Quantity must be greater than 0.");
      return;
    }

    addItemToCart(quantity, product);
    goToShoppingCart();
  };

  return (
    <div className="info-container">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <div className="info-price-box">
        <p className="price">
          {new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD",
          }).format(price / 100)}
        </p>
        <p>Product ID: {id}</p>
      </div>
      <form className="addToCart" onSubmit={sendDataToCart}>
        <input
          type="number"
          name="quantity"
          id="quantity"
          onChange={(e) => setQuantity(e.target.value)}
          min="0"
        />
        <button type="submit" className="addToCartBtn">
          <i className="fas fa-cart-plus"></i> <span>Add to cart!</span>
        </button>
      </form>

      <hr />

      <div className="descrip-box">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
