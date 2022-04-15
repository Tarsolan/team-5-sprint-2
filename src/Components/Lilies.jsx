import React from "react";

export const Lilies = ({ products, handleSelect }) => {
  let Lilies = products.filter((item) => {
    return item.categories.includes("c2");
  });

  return (
    <>
      {Lilies.map((item) => {
        return (
          <div
            className="mainGrid"
            key={item.id}
            onClick={() => handleSelect(item)}
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
