import React from "react";

export const Roses = ({ products, navigateTo }) => {
  let Roses = products.filter((item) => {
    return item.categories.includes("c1");
  });

  return (
    <>
      {Roses.map((item) => {
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

export default Roses;
