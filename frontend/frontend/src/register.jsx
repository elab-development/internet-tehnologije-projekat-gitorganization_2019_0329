
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
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
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };

    axios.post('http://127.0.0.1:8000/api/register', registerData)
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
            <label htmlFor="name">Ime:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="login-input"
              value={userData.name}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="login-input"
              value={userData.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Lozinka:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="login-input"
              value={userData.password}
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