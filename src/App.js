import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { useEffect, useState } from "react";

import CreateAccount from "./Components/CreateAccount";
import AccountDetails from "./Components/AccountDetails";
import ChangePassword from "./Components/ChangePassword";
import Login from "./Components/Login";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  // Gets Products once, pass it to the main display component
  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
    };
    getProducts();
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };
    getUsers();
  }, []);

  // Fetch Products from server
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    console.log(data);

    return data;
  };

  // Fetch Users from server
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
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

  //Delete User
  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" });
  };

  // Changes Password
  const updatePassword = (id, newPass) => {
    console.log(id, newPass);
  };

  return (
    <Router>
      <header>
        <Navigation loginCheck={loggedIn} />
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
            path="/createAcc"
            element={<CreateAccount onAdd={addUser} />}
          ></Route>
          <Route
            path="/AccDetails"
            element={<AccountDetails user={currentUser} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/main" element={<Main products={products} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Old Nav
{
  /* <nav>
          <ul>
            <li id="storeName">Store Name</li>
            <li>Flowers</li>
            <li>Cart</li>
            <li>Login</li>
            <li>Account Management</li>
          </ul>
        </nav> */
}
