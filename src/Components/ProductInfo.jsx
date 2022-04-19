import React, { useState } from "react";
import products from "../data/products.json";

const ProductInfo = ({
  // id,
  // image,
  // title,
  // description,
  // price,
  // discontinued,
  // categories,
  product,
  addItemToCart,
}) => {
  const { id, title, description, price, image } = product;
  const [quantity, setQuantity] = useState();

  const sendDataToCart = (e) => {
    e.preventDefault();

    addItemToCart(quantity, product);
  };

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt="" />
      <p>{description}</p>
      <p>
        {new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
        }).format(price / 100)}
      </p>
      <form className="addToCart" onSubmit={sendDataToCart}>
        <input
          type="number"
          name="quantity"
          id="quantity"
          onChange={(e) => setQuantity(e.target.value)}
          min="0"
        />
        <button type="submit" className="addToCartBtn">
          <i className="fas fa-cart-plus"></i> Add to cart!
        </button>
      </form>
    </div>
    // <div>
    //   <img src={image} alt="" />
    //   <p>I am a {title}</p>
    //   <p>{description}</p>
    //   <p>
    //     {new Intl.NumberFormat("en-CA", {
    //       style: "currency",
    //       currency: "CAD",
    //     }).format(price / 100)}
    //   </p>
    //   <p>{product.title}</p>
    // </div>
  );
};

export default ProductInfo;

// ProductInfo.defaultProps = {
//   id: "1",
//   image: products[0].image,
//   title: "Red Rose Bouquet",
//   description:
//     "Nothing speaks of love so much as a bouquet of beautiful red roses. Arranged with seeded eucalyptus in a classic glass vase, this bouquet is a gift to her heart from yours.",
//   price: 9999, // 100 dollars.
//   discontinued: false,
//   categories: ["c1"],
// };
