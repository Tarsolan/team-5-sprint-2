import React from "react";
import { Link } from "react-router-dom";

const AccountDetails = ({ user, logOut }) => {
  const { firstName, lastName, email, phone, address, city, prov, postal } =
    user;
  return (
    <div className="account-section">
      <h2>Account Details</h2>

      <h3>Contact Information</h3>
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
          <span>{phone}</span>
        </div>
      </div>

      <hr />

      <h3>Shipping Information</h3>
      {/* Address */}
      <div>
        <div className="detailsRow">
          <label>Street Address:</label>
          <span>{address}</span>
        </div>

        {/* City, Province, Postal */}
        <div className="detailsRow">
          <label>City:</label>
          <span>{city}</span>
        </div>
        <div className="detailsRow">
          <label>Province:</label>
          <span>{prov}</span>
        </div>
        <div className="detailsRow">
          <label>Postal Code:</label>
          <span>{postal}</span>
        </div>
      </div>
      <hr />
      <br />
      <div className="detailBottom">
        <div>
          <Link to="/changePass">Change Password</Link>
        </div>
        {/* <div>
          <Link to="/changePass">Order History?</Link>
        </div> */}
        <br />
        <div className="detailsRow">
          <div>
            <Link to="/Login" onClick={logOut}>
              <button className="logout-btn">
                <i className="fas fa-user-alt-slash"></i> Log Out
              </button>
            </Link>
          </div>
          <div>
            <Link to="/editAcc">
              <button className="editAccount">
                <i className="fas fa-user-edit"></i> Edit Account Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
