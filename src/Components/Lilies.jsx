import React from "react";

export const Lilies = ({ products, handleSelect }) => {
  let Lilies = products.filter((item) => {
    return item.categories === "c2";
  });

  return (
    <div className="background">
      <div className="mainContainer">
        <div className="gridContainer">
          {Lilies.map((item) => {
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
        </div>
      </div>
    </div>
  );
};

export default Lilies;
