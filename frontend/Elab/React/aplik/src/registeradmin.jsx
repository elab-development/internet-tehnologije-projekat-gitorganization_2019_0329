import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css";

const RegisterAdmin = () => {
  const [memberId, setMemberId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleInsertMember = (e) => {
    e.preventDefault();

    const memberData = {
      memberId,
      firstName,
      lastName,
    };

    axios.post('/api/members', memberData, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`
      }
    })
      .then(response => {
        console.log('Član uspešno dodat:', response.data);
      })
      .catch(error => {
        console.error('Greška tokom dodavanja člana:', error);
      });
  };

  const handleUpdateMember = (e) => {
    e.preventDefault();

    const memberData = {
      firstName,
      lastName,
    };

    axios.put(`/api/members/${memberId}`, memberData, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`
      }
    })
      .then(response => {
        console.log('Član uspešno ažuriran:', response.data);
      })
      .catch(error => {
        console.error('Greška tokom ažuriranja člana:', error);
      });
  };

  const handleDeleteMember = (e) => {
    e.preventDefault();

    axios.delete(`/api/members/${memberId}`, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`
      }
    })
      .then(response => {
        console.log('Član uspešno obrisan:', response.data);
      })
      .catch(error => {
        console.error('Greška tokom brisanja člana:', error);
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Upravljanje Članovima</h2>
      <form onSubmit={handleInsertMember}>
        <div className="login-content">
          <div className="form-group">
            <label htmlFor="memberId">ID člana:</label>
            <input
              type="text"
              id="memberId"
              className="login-input"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">Ime:</label>
            <input
              type="text"
              id="firstName"
              className="login-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Prezime:</label>
            <input
              type="text"
              id="lastName"
              className="login-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button type="submit" className="login-button">
              Dodaj Člana
            </button>
            <button type="button" className="signin-button" onClick={handleUpdateMember}>
              Ažuriraj Člana
            </button>
            <button type="button" className="signin-button" onClick={handleDeleteMember}>
              Obriši Člana
            </button>
            <Link to="/" className="signin-button">
              Nazad na Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterAdmin;
