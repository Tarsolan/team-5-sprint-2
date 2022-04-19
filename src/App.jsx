import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useHistory,
} from "react-router-dom";
import { useEffect, useState } from "react";

import CreateAccount from "./Components/CreateAccount";
import AccountDetails from "./Components/AccountDetails";
import ChangePassword from "./Components/ChangePassword";
import Login from "./Components/Login";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";
import EditAccount from "./Components/EditAccount";
import ProductInfo from "./Components/ProductInfo";
import ShoppingCart from "./Components/ShoppingCart";
import products from "./data/products.json";
import Lilies from "./Components/Lilies";
import Roses from "./Components/Roses";
import Carnations from "./Components/Carnations";
import Mixed from "./Components/Mixed";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  // const [authenticated, setAuthentication] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("");
  const [cartID, updateCartID] = useState(0);

  // Gets Products & Users once, pass it to the main display component
  useEffect(() => {
    // const getProducts = async () => {
    //   const productsFromServer = await fetchProducts();
    //   setProducts(productsFromServer);
    // };
    // getProducts();
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
      setCurrentUser(usersFromServer[0]);
      // This line sets the cart id to the guest checkout id - ideally it will actually reset the value to 0 but we'll do that later
      try {
        console.log(
          usersFromServer[0].cart[usersFromServer[0].cart.length - 1]
            .cartItemID + 1
        );
        updateCartID(
          usersFromServer[0].cart[usersFromServer[0].cart.length - 1]
            .cartItemID + 1
        );
      } catch (error) {
        console.log("User has no shopping cart... yet.");
      }
    };
    getUsers();
  }, []);

  // Fetch Products from server
  // const fetchProducts = async () => {
  //   const res = await fetch("http://localhost:5002/products");
  //   const data = await res.json();
  //   console.log(data);

  //   return data;
  // };

  // Fetch Users from server
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5002/users");
    const data = await res.json();
    console.log(data);

    return data;
  };

  // Fetch a single User from server
  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:5002/users/${id}`);
    const data = await res.json();
    console.log(data);

    return data;
  };

  // Set current user
  const chooseCurrentUser = () => {};

  // Add User
  const addUser = (user) => {
    console.log(user);

    // Save new User to list of users
    const addNewUser = async (user) => {
      const res = await fetch("http://localhost:5002/users", {
        method: `POST`,
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      setUsers([...users, data]);

      // Sets new user as current user
      setCurrentUser(data);
      console.log("Current ID:", data.id);
      setLoggedIn(true);
    };
    addNewUser(user);
  };

  // Edit User
  const editUser = async (userData) => {
    const userToEdit = await fetchUser(userData.id);
    const updUser = { ...userData };

    const res = await fetch(`http://localhost:5002/users/${userData.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updUser),
    });

    const data = await res.json();
    setUsers(users.map((user) => (user.id === userData.id ? data : user)));
    setCurrentUser(data);
  };

  //Delete User - NEEDS UPDATE
  const deleteUser = async (id) => {
    await fetch(`http://localhost:5002/users/${id}`, { method: "DELETE" });
  };

  // Changes Password
  const updatePassword = async (id, newPass) => {
    const userToEdit = await fetchUser(id);
    const updPass = { ...userToEdit, password: newPass };

    const res = await fetch(`http://localhost:5002/users/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updPass),
    });

    const data = await res.json();

    // Updates current user in current session
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, password: data.password } : user
      )
    );
    setCurrentUser(data);
  };

  // Logs a user in
  const logIn = (email, password) => {
    let user_found = false;
    users.map((user) => {
      if (user.email === email && user.password === password) {
        setCurrentUser(user);
        setLoggedIn(true);
        user_found = true;

        // This line fetches the most recent cartID, and will use it when creating new cart items
        try {
          console.log(user.cart[user.cart.length - 1].cartItemID + 1);
          updateCartID(user.cart[user.cart.length - 1].cartItemID + 1);
        } catch (error) {
          console.log("User has no shopping cart... yet.");
        }
        alert(`Welcome ${user.firstName}.`);
        return;
      }
    });
    if (user_found === false) {
      alert(
        "No users found with those credentials. Please check your username and password and try again."
      );
      return;
    }
  };

  // Logs a user out
  const logOut = () => {
    setLoggedIn(false);
    alert(`Logging you out, ${currentUser.firstName}. Thank you for visiting.`);
    setCurrentUser([]);
    updateCartID(0);
  };

  // Handle which product is selected in main.js to pass to info.js
  const handleSelect = (product) => {
    console.log(product);
    setCurrentProduct(product);
  };

  // Adds item to shopping cart
  const addItemToCart = async (quantity, product) => {
    // if (!loggedIn) {
    //   alert("Prompt to login or go as guest.");
    //   return;
    // }
    alert("Item added to cart.");
    const userToEdit = await fetchUser(currentUser.id);
    const updCart = {
      ...userToEdit,
      cart: [
        ...userToEdit.cart,
        {
          cartItemID: cartID,
          quantity: quantity,
          productId: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.image,
        },
      ],
    };

    const res = await fetch(`http://localhost:5002/users/${currentUser.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updCart),
    });

    const data = await res.json();

    // Updates user data states for current session
    setUsers(
      users.map((user) =>
        user.id === currentUser.id ? { ...user, cart: data.cart } : user
      )
    );
    setCurrentUser(data);
    updateCartID(data.cart[data.cart.length - 1].cartItemID + 1);

    console.log("New cart:", currentUser.cart);
    console.log(quantity, product);
  };

  // Delete item from cart
  const removeItemFromCart = async (userID, cartItemID) => {
    const userToEdit = await fetchUser(userID);
    console.log("user to have cart item deleted:", userToEdit);

    // Filters the cart to no longer include the selected item
    const newCart = {
      ...userToEdit,
      cart: userToEdit.cart.filter((item) => {
        return item.cartItemID !== cartItemID;
      }),
    };
    console.log(newCart.cart);

    const res = await fetch(`http://localhost:5002/users/${userID}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newCart),
    });

    const data = await res.json();

    // Updates current user in current session
    setUsers(
      users.map((user) =>
        user.id === userID ? { ...user, cart: data.cart } : user
      )
    );
    setCurrentUser(data);
  };

  return (
    <Router>
      <header>
        <Navigation
          loginCheck={loggedIn}
          logOut={logOut}
          name={currentUser.firstName}
          cart={currentUser.cart}
        />
      </header>

      <div>
        <Routes>
          <Route path="/home" element={<></>}></Route>
          <Route
            path="/changePass"
            element={
              <ChangePassword
                currentUser={currentUser}
                updatePass={updatePassword}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <ShoppingCart
                userInfo={currentUser}
                products={products}
                onDelete={removeItemFromCart}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/createAcc"
            element={<CreateAccount onAdd={addUser} />}
          ></Route>
          <Route
            path="/info"
            element={
              <ProductInfo
                product={currentProduct}
                addItemToCart={addItemToCart}
              />
            }
          ></Route>
          {/* Kind of a security thing, to prevent account details from being accessed if no one is logged in */}
          {loggedIn ? (
            <Route
              path="/AccDetails"
              element={<AccountDetails user={currentUser} logOut={logOut} />}
            ></Route>
          ) : (
            <Route path="/AccDetails" element={<Login logIn={logIn} />}></Route>
          )}
          <Route
            path="/EditAcc"
            element={<EditAccount user={currentUser} onEdit={editUser} />}
          ></Route>

          {/* Not sure if this was the right way to handle this - once logged in, the login path leads to the account details page */}
          {loggedIn ? (
            <Route
              path="/login"
              element={<AccountDetails user={currentUser} logOut={logOut} />}
            ></Route>
          ) : (
            <Route path="/login" element={<Login logIn={logIn} />}></Route>
          )}

          <Route
            path="/main"
            element={<Main handleSelect={handleSelect} />}
          ></Route>
          <Route
            path="/lilies"
            element={
              <Lilies
                products={products}
                handleSelect={handleSelect}
                addItemToCart={addItemToCart}
              />
            }
          ></Route>
          <Route
            path="/mixed"
            element={
              <Mixed
                products={products}
                handleSelect={handleSelect}
                addItemToCart={addItemToCart}
              />
            }
          ></Route>
          <Route
            path="/carnations"
            element={
              <Carnations
                products={products}
                handleSelect={handleSelect}
                addItemToCart={addItemToCart}
              />
            }
          ></Route>
          <Route
            path="/roses"
            element={
              <Roses
                products={products}
                handleSelect={handleSelect}
                addItemToCart={addItemToCart}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
