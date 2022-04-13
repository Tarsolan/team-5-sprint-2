import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AccountDetails = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  address1,
  address2,
  city,
  province,
  postalCode,
}) => {
  return (
    <div className="account-section">
      <h2>Account Details</h2>

      {/* Name, Email, Phone */}
      <div>
        <div className="detailsRow">
          <label>Full Name:</label>
          <span>
            {firstName} {lastName}
          </span>
        </div>
        <div className="detailsRow">
          <label>Email Address:</label>
          <span>{email}</span>
        </div>
        <div className="detailsRow">
          <label>Phone Number:</label>
          <span>{phoneNumber}</span>
        </div>
      </div>

      <h3>Shipping Information</h3>
      {/* Address */}
      <div>
        <div className="detailsRow">
          <label>Street Address Line 1:</label>
          <span>{address1}</span>
        </div>
        <div className="detailsRow">
          <label>Street Address Line 2:</label>
          <span>{address2}</span>
        </div>

        {/* City, Province, Postal */}
        <div className="detailsRow">
          <div className="subDetail">
            <label>City:</label>
            <span>{city}</span>
          </div>
          <div className="subDetail">
            <label>Province:</label>
            <span>{province}</span>
          </div>
          <div className="subDetail">
            <label>Postal Code:</label>
            <span>{postalCode}</span>
          </div>
        </div>
      </div>
      <hr />
      <br />
      <div className="detailBottom">
        <div>
          <Link to="/changePass">Change Password</Link>
        </div>
        <br />
        <div>
          <Link to="/createAcc">
            <button className="editAccount">Edit Account Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;

AccountDetails.defaultProps = {
  firstName: "Alex",
  lastName: "Ridgeley",
  email: "aridgeley@msn.com",
  phoneNumber: "(709) 567-0540",
  address1: "51A Amherst Heights",
  address2: "N/A",
  city: "St. John's",
  province: "NL",
  postalCode: "A1E 3J3",
};

// AccountDetails.propTypes = {
//   firstName: PropTypes.string,
//   city: PropTypes.string,
// };

{
  /* <div className="account-section">
      <h2 className="create-acc-heading">Account Details</h2>
      <div className="create-account-form">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputFirstName4" className="detailCategory">
              Full Name:
            </label>
            <span>
              {" "}
              {firstName} {lastName}
            </span>
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
      </div>
    </div> */
}
