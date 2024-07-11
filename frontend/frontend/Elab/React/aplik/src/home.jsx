import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const LoginForm = ({ onLoginSuccess }) => {
  const [userData, setUserData] = useState({
    usernameEmail: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      usernameEmail: userData.usernameEmail,
      password: userData.password,
    };

    axios.post('/api/login', loginData)
      .then(response => {
        const token = response.data.token;
        const role = response.data.role;
        window.sessionStorage.setItem("auth_token", token);
        window.sessionStorage.setItem("role", role);
        onLoginSuccess(token);
        navigate('/cards');
      })
      .catch(error => {
        console.error('Greška tokom prijave:', error);
        setError('Pogrešan mail ili lozinka');
        setSuccessMessage('');
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Prijava</h2>
      <form onSubmit={handleLogin}>
        <div className="login-content">
          <div className="form-group">
            <label htmlFor="usernameEmail" className="password-label">Korisničko ime ili email</label>
            <input
              type="text"
              id="usernameEmail"
              name="usernameEmail"
              placeholder="Unesite korisničko ime ili email"
              className="login-input"
              value={userData.usernameEmail}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="password-label">Lozinka</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Lozinka"
              className="login-input"
              value={userData.password}
              onChange={handleInput}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <div className="button-container">
            <button type="submit" className="signin-button">Prijavi se</button>
            <Link to="/register" className="signin-button">Registruj se</Link>
          </div>
          <div className="forgot-password">
            <Link to="/forgot-password" className="forgot-password-link">Zaboravili ste lozinku? Kliknite ovde</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
