import React, { useState, useEffect } from "react";

const ShoppingCart = ({ userInfo, products }) => {
  const {
    email,
    address,
    firstName,
    lastName,
    phone,
    city,
    postal,
    prov,
    cart,
  } = userInfo;
  const { id, title, description, price, image } = products;
  const [total, setTotal] = useState();
  // let productList = cart.map((item) => {
  //   products.map((product) => {
  //     if (item.productId === product.Id) {
  //       <h2>{product.title}</h2>;
  //     }
  //   });
  // });

  useEffect(() => {
    let orderTotal = 0;
    cart.map((item) => {
      orderTotal += item.price;
    });
    setTotal(orderTotal);
  }, [userInfo]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <hr />
      {cart.map((item) => {
        return (
          <div key={item.productId} className="cart-item">
            <img src={item.image} alt="Flower Image" />
            <h3>{item.title}</h3>
            <h4>
              {new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
              }).format(item.price / 100)}
            </h4>
          </div>
        );
      })}
      <hr />
      <p>
        Total:{" "}
        {new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
        }).format(total / 100)}
      </p>
    </div>
  );
};

export default ShoppingCart;

// Default Props for Guest Checkout
ShoppingCart.defaultProps = {
  userInfo: {
    email: "notaperson@gmail.com",
    firstName: "Guest",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    prov: "",
    postal: "",
    cart: {},
  },
};
