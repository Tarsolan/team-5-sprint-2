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

function App() {
  return (
    <Router>
      <header>
        <Navigation />
      </header>

      <div>
        <Routes>
          <Route path="/home" element={<></>}></Route>
          <Route path="/changePass" element={<ChangePassword />}></Route>
          <Route path="/createAcc" element={<CreateAccount />}></Route>
          <Route path="/AccDetails" element={<AccountDetails />}></Route>
          <Route path="/login" element={<Login />}></Route>
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
