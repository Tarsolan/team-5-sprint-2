import React from "react";

export const Lilies = ({ products }) => {
  return (
    <div className="background">
      <div className="mainContainer">
        <h1>Weapons... of love</h1>
        <hr />

        <div className="gridContainer">
          {products.map((item) => {
            if === item["c2"] return (
              <div
                className="mainGrid"
                key={item.id}
                onClick={goToAccountDetail}
              >
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
