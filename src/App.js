import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
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

  //Delete User - NEEDS UPDATE
  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" });
  };

  // Changes Password - NEEDS UPDATE
  const updatePassword = (id, newPass) => {
    console.log(id, newPass);
  };

  // Logs a user in
  const logIn = (email, password) => {
    console.log("email:", email);
    console.log("password:", password);
    let user_found = false;
    users.map((user) => {
      if (user.email === email && user.password === password) {
        setCurrentUser(user);
        setLoggedIn(true);
        user_found = true;
        alert(`Welcome ${user.firstName}.`);
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

  return (
    <Router>
      <header>
        <Navigation loginCheck={loggedIn} logOut={logOut} />
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
          <Route path="/login" element={<Login logIn={logIn} />}></Route>
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
