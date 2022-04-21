import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = ({ onAdd, users }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [prov, setProv] = useState("");
  const [postal, setPostal] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const [remember, setRemember] = useState(false);
  const cart = [];
  const orders = [];

  const navigate = useNavigate();
  const goToAccountDetail = () => navigate("/AccDetails");

  // On Submit, save values to localstorage (to represent saving them to a server)
  const submitData = (e) => {
    let returnFlag = false;
    e.preventDefault();

    // Validate what needs to be validated before saving anything!
    users.map((user) => user.email === email && (returnFlag = true));

    if (returnFlag) {
      alert(
        "Sorry, that email address is already in use. Please use another email."
      );
      return;
    }

    if (!captcha) {
      alert(
        "You, my friend, are a robot. We don't take kindly to your kind around here."
      );
      return;
    }
    if (password !== passwordConfirm) {
      alert("Invalid entry. The two passwords do not match.");
      return;
    }

    onAdd(
      {
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
      },
      remember
    );

    goToAccountDetail();
  };

  return (
    <div className="account-section">
      <h2 className="create-acc-heading">Create Account</h2>
      <form className="create-account-form" onSubmit={submitData}>
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
          <div className="form-group col-md-4">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputPassword5"> Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword5"
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
              value={passwordConfirm}
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
            />
          </div>
        </div>
        <hr />
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              onChange={() => {
                setCaptcha(!captcha);
              }}
            />
            <label className="form-check-label" htmlFor="gridCheck">
              I am not a robot!
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck2"
              onChange={() => {
                setRemember(!remember);
              }}
            />
            <label className="form-check-label" htmlFor="gridCheck2">
              Log me in automatically!
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
