import React from "react";

export const Lilies = ({ products, handleSelect }) => {
  let Lilies = products.filter((item) => {
    return item.categories.includes("c2");
  });

  return (
    <>
      <h2 className="category-head">Lillies</h2>
      <div className="gridContainer">
        {Lilies.map((item) => {
          return (
            <div
              className="mainGrid"
              key={item.id}
              onClick={() => handleSelect(item)}
            >
              <figure>
                <img
                  src={item.image}
                  alt="image-JPG"
                  style={{ width: "200px" }}
                />
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
      </div>
    </>
  );
};

export default Lilies;
