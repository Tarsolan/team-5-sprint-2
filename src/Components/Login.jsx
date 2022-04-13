import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="account-section-login">
      <h2>Log In</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword2">Password</label>
          <input type="password" className="form-control" id="InputPassword2" />
        </div>
        <br />
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" htmlFor="gridCheck">
            I am not a robot
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
          <Link to="/createAcc">Create an account now!</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
