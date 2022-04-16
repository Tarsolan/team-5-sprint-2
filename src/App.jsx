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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [authenticated, setAuthentication] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);

  // Gets Products once, pass it to the main display component
  useEffect(() => {
    // const getProducts = async () => {
    //   const productsFromServer = await fetchProducts();
    //   setProducts(productsFromServer);
    // };
    // getProducts();
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };
    getUsers();
  }, []);

  // Fetch Products from server
  // const fetchProducts = async () => {
  //   const res = await fetch("http://localhost:5000/products");
  //   const data = await res.json();
  //   console.log(data);

  //   return data;
  // };

  // Fetch Users from server
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    console.log(data);

    return data;
  };

  // Fetch a single User from server
  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`);
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
      const res = await fetch("http://localhost:5000/users", {
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

    const res = await fetch(`http://localhost:5000/users/${userData.id}`, {
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
    await fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" });
  };

  // Changes Password
  const updatePassword = async (id, newPass) => {
    const userToEdit = await fetchUser(id);
    const updPass = { ...userToEdit, password: newPass };

    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updPass),
    });

    const data = await res.json();
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
    alert("Logging out. Thank you for visiting.");
    setCurrentUser([]);
  };

  // Handle which product is selected in main.js to pass to info.js
  const handleSelect = (product) => {
    console.log(product);
    setCurrentProduct(product);
  };

  // Adds item to shopping cart

  return (
    <Router>
      <header>
        <Navigation
          loginCheck={loggedIn}
          logOut={logOut}
          name={currentUser.firstName}
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
          <Route path="/cart" element={<ShoppingCart />} />
          <Route
            path="/createAcc"
            element={<CreateAccount onAdd={addUser} />}
          ></Route>
          <Route
            path="/info"
            element={<ProductInfo product={currentProduct} />}
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
            element={<Main products={products} handleSelect={handleSelect} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
