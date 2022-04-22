import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShoppingCart = ({ userInfo, onDelete, onCheckout, loggedIn }) => {
  const { id, cart } = userInfo;
  const [total, setTotal] = useState();
  const [subTotal, setSubTotal] = useState();
  const [hst, setHST] = useState();

  useEffect(() => {
    let subTotal = 0;
    let hst = 0;
    cart.map((item) => (subTotal += item.price * item.quantity));
    setSubTotal(subTotal);
    hst = subTotal * 0.15;
    setHST(hst);

    setTotal(subTotal + hst);
  }, [cart]);

  const runCheckout = () => {
    alert("Checkout complete! Thanks for your order!");
    onCheckout({ subTotal, hst, total });
  };

  return (
    <div className="background">
      {loggedIn ? null : <h2 className="cart-header">Guest Checkout</h2>}
      <div className="shoppingCart">
        {cart.length === 0 ? (
          <div className="cart-empty">
            <h3>
              It looks like your cart is empty. Check out our list of products{" "}
              <Link to="/main">here</Link> and get shopping!
            </h3>
          </div>
        ) : (
          cart.map((item) => {
            return (
              <div key={item.cartItemID} className="cart-item">
                <img src={item.image} alt="Flower" />
                <div className="cart-item-text">
                  <h3>{item.title}</h3>
                  <div
                    className="delete-small"
                    onClick={() => onDelete(id, item.cartItemID)}
                  >
                    X
                  </div>
                  <div className="cart-item-price=container">
                    <span className="cart-item-quantity">{item.quantity}</span>
                    <span className="cart-item-x"> X </span>
                    <span className="cart-item-price">
                      {new Intl.NumberFormat("en-CA", {
                        style: "currency",
                        currency: "CAD",
                      }).format(item.price / 100)}
                    </span>
                  </div>
                </div>
                <div
                  className="cart-item-delete"
                  onClick={() => onDelete(id, item.cartItemID)}
                >
                  X
                </div>
              </div>
            );
          })
        )}

        <hr />
        <div className="total-background">
          <div className="total-container">
            <div>
              <div className="total-detail">
                <span>Subtotal: </span>
                <span>
                  {new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD",
                  }).format(subTotal / 100)}
                </span>
              </div>
              <div className="total-detail">
                <span>HST:</span>{" "}
                <span>
                  {new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD",
                  }).format(hst / 100)}
                </span>
              </div>
              <div className="total-detail">
                <span>Total: </span>
                <span>
                  {new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD",
                  }).format(total / 100)}
                </span>
              </div>
              <button className="checkout-btn-small" onClick={runCheckout}>
                <i className="fas fa-shopping-cart"></i> <span>Checkout!</span>
              </button>
            </div>
            <button className="checkout-btn" onClick={runCheckout}>
              <i className="fas fa-shopping-cart"></i> <span>Checkout!</span>
            </button>
          </div>
        </div>
      </div>
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
    cart: [],
  },
};
