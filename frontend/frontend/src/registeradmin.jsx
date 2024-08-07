import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Tickets from "./tickets";

const RegisterAdmin = () => {
  const [id, setId] = useState("");
  const [kurs, setKurs] = useState("");
  const [opis, setOpis] = useState("");
  const navigate = useNavigate();

  const handleInsertCourse = (e) => {
    e.preventDefault();

    const userData = {
      id,
      kurs,
      opis,
    };

    axios.post('/api/courses', userData, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`
      }
    })
      .then(response => {
        console.log('Kurs uspesno dodat:', response.data);
      })
      .catch(error => {
        console.error('Greška tokom dodavanja kursa:', error);
      });
  };

  const handleUpdateCourse = (e) => {
    e.preventDefault();

    const userData = {
      kurs,
      opis,
    };

    axios.put(`/api/courses/${id}`, userData, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`
      }
    })
      .then(response => {
        console.log('Kurs uspešno ažuriran:', response.data);
      })
      .catch(error => {
        console.error('Greška tokom ažuriranja kursa:', error);
      });
  };

  const handleDeleteCourse = (e) => {
    e.preventDefault();

    axios.delete(`/api/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`
      }
    })
      .then(response => {
        console.log('Kurs uspešno obrisan:', response.data);
      })
      .catch(error => {
        console.error('Greška tokom brisanja kursa:', error);
      });
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem("auth_token");
    window.sessionStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">UPRAVLJANJE KURSEVIMA</h2>
      <form onSubmit={handleInsertCourse}>
        <div className="login-content">
          <div className="form-group">
            <label htmlFor="id">ID KURSA:</label>
            <input
              type="text"
              id="id"
              className="login-input"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Kurs">KURS:</label>
            <input
              type="text"
              id="kurs"
              className="login-input"
              value={kurs}
              onChange={(e) => setKurs(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">OPIS:</label>
            <input
              type="text"
              id="lastName"
              className="login-input"
              value={opis}
              onChange={(e) => setOpis(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button type="submit" className="login-button">
              Dodaj Kurs
            </button>
            <button type="button" className="signin-button" onClick={handleUpdateCourse}>
              Ažuriraj Kurs
            </button>
            <button type="button" className="signin-button" onClick={handleDeleteCourse}>
              Obriši Kurs
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
