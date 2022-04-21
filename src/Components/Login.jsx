import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ logIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, toggleRemember] = useState(false);

  const confirmLogin = (e) => {
    e.preventDefault();
    logIn(email, password, remember);
  };

  return (
    <div className="account-section-login">
      <h2>Log In</h2>
      <form className="login-form" onSubmit={confirmLogin}>
        <div className="form-group">
          <label htmlFor="username">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-light">
            Forgot your email?
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword2">Password</label>
          <input
            type="password"
            className="form-control"
            id="InputPassword2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <small id="passwordHelp" className="form-text text-light">
            Forgot your password?
          </small>
        </div>
        <br />
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="gridCheck"
            onChange={() => {
              toggleRemember(!remember);
            }}
          />
          <label className="form-check-label" htmlFor="gridCheck">
            Remember Me
          </label>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <br />
      <div className="login-new-user">
        <div>New User?</div>
        <div>
          <Link to="/createAcc">Create an account!</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
