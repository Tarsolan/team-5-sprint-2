import React, { useState } from "react";
import products from "../data/products.json";

const ProductInfo = ({
  id,
  image,
  title,
  description,
  price,
  discontinued,
  categories,
  product,
}) => {
  const [quantity, setQuantity] = useState();
  return (
    <div>
      <img src={image} alt="" />
      <p>I am a {title}</p>
      <p>{description}</p>
      <p>
        {new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
        }).format(price / 100)}
      </p>
      <p>{product.title}</p>
    </div>
  );
};

export default ProductInfo;

ProductInfo.defaultProps = {
  id: "1",
  image: products[0].image,
  title: "Red Rose Bouquet",
  description:
    "Nothing speaks of love so much as a bouquet of beautiful red roses. Arranged with seeded eucalyptus in a classic glass vase, this bouquet is a gift to her heart from yours.",
  price: 9999, // 100 dollars.
  discontinued: false,
  categories: ["c1"],
};
