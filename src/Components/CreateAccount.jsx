import React from "react";

const CreateAccount = () => {
  return (
    <div className="account-section">
      <h2 className="create-acc-heading">Create Account</h2>
      <form className="create-account-form">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputFirstName4">First Name</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName4"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLastName4">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="inputLastName4"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputEmail4">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputPassword5"> Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword5"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">Province</label>
            <select id="inputState" className="form-control">
              <option disabled>Choose...</option>
              <option>NL</option>
              <option>PE</option>
              <option>NS</option>
              <option>PB</option>
              <option>QC</option>
              <option>ON</option>
              <option>MB</option>
              <option>SK</option>
              <option>AB</option>
              <option>BC</option>
              <option>YT</option>
              <option>NT</option>
              <option>NU</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Postal Code</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              I don't do anything yet, but check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Account!
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
