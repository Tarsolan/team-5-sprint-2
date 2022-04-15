import React from "react";

export const Roses = ({ products, handleSelect }) => {
  let Roses = products.filter((item) => {
    return item.categories.includes("c1");
  });

  return (
    <>
      {Roses.map((item) => {
        return (
          <div className="mainGrid" key={item.id} onClick={handleSelect}>
            <figure>
              <img
                src={item.image}
                alt="image-JPG"
                style={{ width: "200px" }}
              />
              {console.log(item.image)}
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
