import React, { useState } from "react";
import "./login.css";

const RegisterForm = ({ onBack }) => {
  const [memberId, setMemberId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="login-container">
      <h2 className="login-title">Register</h2>
      <form>
        <div className="login-content">
          <div className="form-group">
            <label htmlFor="memberId">Member ID:</label>
            <input
              type="text"
              id="memberId"
              className="login-input"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              className="login-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              className="login-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button type="button" className="login-button">
              Insert Member
            </button>
            <button type="button" className="signin-button">
              Update Member
            </button>
            <button type="button" className="signin-button">
              Delete Member
            </button>
            <button type="button" className="signin-button" onClick={onBack}>
              Back to Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
