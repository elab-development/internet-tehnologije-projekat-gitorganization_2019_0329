import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const RegisterAdmin = () => {
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleInsertUser = (e) => {
    e.preventDefault();

    const userData = {
      userId,
      firstName,
      lastName,
    };

    axios.post('/api/users', userData, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`
      }
    })
      .then(response => {
        console.log('Korisnik uspešno dodat:', response.data);
      })
      .catch(error => {
        console.error('Greška tokom dodavanja korisnika:', error);
      });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
    };

    axios.put(`/api/users/${userId}`, userData, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`
      }
    })
      .then(response => {
        console.log('Korisnik uspešno ažuriran:', response.data);
      })
      .catch(error => {
        console.error('Greška tokom ažuriranja korisnika:', error);
      });
  };

  const handleDeleteUser = (e) => {
    e.preventDefault();

    axios.delete(`/api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`
      }
    })
      .then(response => {
        console.log('Korisnik uspešno obrisan:', response.data);
      })
      .catch(error => {
        console.error('Greška tokom brisanja korisnika:', error);
      });
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem("auth_token");
    window.sessionStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Upravljanje Korisnicima</h2>
      <form onSubmit={handleInsertUser}>
        <div className="login-content">
          <div className="form-group">
            <label htmlFor="userId">ID korisnika:</label>
            <input
              type="text"
              id="userId"
              className="login-input"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
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
              Dodaj Korisnika
            </button>
            <button type="button" className="signin-button" onClick={handleUpdateUser}>
              Ažuriraj Korisnika
            </button>
            <button type="button" className="signin-button" onClick={handleDeleteUser}>
              Obriši Korisnika
            </button>
            <button type="button" className="signin-button" onClick={handleLogout}>
              Logout
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
