import React from "react";

const ChangePassword = () => {
  return (
    <div className="account-section-password">
      <h2>Change Password</h2>
      <form className="change-password-form">
        <div className="form-group">
          <label htmlFor="currentPass1">Confirm Current Password</label>
          <input
            type="password"
            className="form-control"
            id="currentPass1"
            aria-describedby="passwordHelp"
            placeholder="Enter current password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword1">New Password</label>
          <input
            type="password"
            className="form-control"
            id="InputPassword1"
            placeholder="New Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword2">Confirm New Password</label>
          <input
            type="password"
            className="form-control"
            id="InputPassword2"
            placeholder="Confirm New Password"
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
