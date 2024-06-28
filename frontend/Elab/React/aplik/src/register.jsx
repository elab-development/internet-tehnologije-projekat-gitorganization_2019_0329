import React, { useState } from "react";
import "./login.css";

const RegisterForm = ({ onBack }) => {
  const [memberId, setMemberId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const RegisterForm = ({ onBack }) => {
    const [memberId, setMemberId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  
    const handleRegister = (e) => {
      e.preventDefault();
  
      const memberData = {
        memberId,
        firstName,
        lastName,
      };
  
      axios.post('/api/members', memberData)
        .then(response => {
          console.log('Member registered successfully:', response.data);
          // Handle success actions, e.g., clearing the form, showing a success message, etc.
        })
        .catch(error => {
          console.error('Error during member registration:', error);
          // Handle error actions, e.g., showing an error message, etc.
        });
    };
  
    const handleUpdateMember = (e) => {
      e.preventDefault();
  
      const memberData = {
        firstName,
        lastName,
      };
  
      axios.put(`/api/members/${memberId}`, memberData)
        .then(response => {
          console.log('Member updated successfully:', response.data);
          // Handle success actions, e.g., showing a success message, etc.
        })
        .catch(error => {
          console.error('Error during member update:', error);
          // Handle error actions, e.g., showing an error message, etc.
        });
    };
  
    const handleDeleteMember = (e) => {
      e.preventDefault();
  
      axios.delete(`/api/members/${memberId}`)
        .then(response => {
          console.log('Member deleted successfully:', response.data);
          // Handle success actions, e.g., clearing the form, showing a success message, etc.
        })
        .catch(error => {
          console.error('Error during member deletion:', error);
          // Handle error actions, e.g., showing an error message, etc.
        });
    };
  
  
  
  
  };
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
