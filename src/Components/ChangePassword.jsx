import React, { useState } from "react";

const ChangePassword = ({ currentUser, updatePass }) => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPassConfirm, setNewPassConfirm] = useState("");

  const changePass = (e) => {
    e.preventDefault();

    console.log(oldPass);
    console.log(currentUser.password);

    if (oldPass !== currentUser.password) {
      alert(
        "Invalid entry. You failed to correctly confirm your current password. Please try again."
      );
    } else if (newPass !== newPassConfirm) {
      alert(
        "Invalid entry. Your new password does not match the confirmation. Please try again."
      );
    } else {
      updatePass(currentUser.id, newPass);
    }
  };

  return (
    <div className="account-section-password">
      <h2>Change Password</h2>
      <form className="change-password-form" onSubmit={changePass}>
        <div className="form-group">
          <label htmlFor="currentPass1">Confirm Current Password</label>
          <input
            type="password"
            className="form-control"
            id="currentPass1"
            aria-describedby="passwordHelp"
            placeholder="Enter current password"
            onChange={(e) => {
              setOldPass(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword1">New Password</label>
          <input
            type="password"
            className="form-control"
            id="InputPassword1"
            placeholder="New Password"
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword2">Confirm New Password</label>
          <input
            type="password"
            className="form-control"
            id="InputPassword2"
            placeholder="Confirm New Password"
            onChange={(e) => {
              setNewPassConfirm(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Change Password!
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
