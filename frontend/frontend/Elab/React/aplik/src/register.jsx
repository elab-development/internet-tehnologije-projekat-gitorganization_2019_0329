import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Register = () => {
  const [userData, setUserData] = useState({
    ime: '',
    prezime: '',
    lozinka: ''
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const registerData = {
      ime: userData.ime,
      prezime: userData.prezime,
      lozinka: userData.lozinka,
    };

    axios.post('/api/register', registerData)
      .then(response => {
        console.log('Korisnik uspešno registrovan:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Greška tokom registracije:', error);
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Registracija</h2>
      <form onSubmit={handleRegister}>
        <div className="login-content">
          <div className="form-group">
            <label htmlFor="ime">Ime:</label>
            <input
              type="text"
              id="ime"
              name="ime"
              className="login-input"
              value={userData.ime}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prezime">Prezime:</label>
            <input
              type="text"
              id="prezime"
              name="prezime"
              className="login-input"
              value={userData.prezime}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lozinka">Lozinka:</label>
            <input
              type="password"
              id="lozinka"
              name="lozinka"
              className="login-input"
              value={userData.lozinka}
              onChange={handleInput}
            />
          </div>
          <div className="button-container">
            <button type="submit" className="login-button">Registruj se</button>
            <Link to="/" className="signin-button">Nazad na prijavu</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
