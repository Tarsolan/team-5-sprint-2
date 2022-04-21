import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EditAccount = ({ user, onEdit }) => {
  const id = user.id;
  const cart = user.cart;
  const orders = user.orders;
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phone, setPhone] = useState(user.phone);
  const password = user.password;

  // Might be fun to add a pop-up window that includes a 'confirm password to confirm changes' prompt.
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [prov, setProv] = useState(user.prov);
  const [postal, setPostal] = useState(user.postal);

  const navigate = useNavigate();
  const goToAccountDetail = () => navigate("/AccDetails");

  // On Submit, save values to localstorage (to represent saving them to a server)
  const editData = (e) => {
    e.preventDefault();
    onEdit({
      id,
      email,
      firstName,
      lastName,
      phone,
      password,
      address,
      city,
      prov,
      postal,
      cart,
      orders,
    });

    alert(`Edit confirmed. Changes have been saved.`);
    goToAccountDetail();
  };

  return (
    <div className="account-section">
      <h2 className="create-acc-heading">Edit Account Details</h2>
      <form className="create-account-form" onSubmit={editData}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputFirstName4">First Name</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName4"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLastName4">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="inputLastName4"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={lastName}
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputAddress2">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
          />
        </div>
        <hr />
        <div>
          <h3>Shipping Information</h3>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">Province</label>
            <select
              id="inputState"
              className="form-control"
              onChange={(e) => {
                setProv(e.target.value);
              }}
              value={prov}
            >
              <option></option>
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
            <input
              type="text"
              className="form-control"
              id="inputZip"
              onChange={(e) => {
                setPostal(e.target.value);
              }}
              value={postal}
            />
          </div>
        </div>
        <hr />
        <div className="detailsRow">
          <button type="submit" className="btn btn-primary">
            Confirm Edit
          </button>
          <Link to="/AccDetails" style={{ fontSize: "12pt" }}>
            Cancel Changes
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditAccount;
