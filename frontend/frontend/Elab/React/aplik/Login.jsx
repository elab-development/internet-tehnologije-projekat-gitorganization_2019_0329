import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
  const [userData, setUserData] = useState({
    usernameEmail: '',
    password: ''
  });
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleForgotPasswordInput = (e) => {
    setForgotPasswordEmail(e.target.value);
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
        onLoginSuccess();
        navigate('/cards');
      })
      .catch(error => {
        setErrorMessage('Pogrešan email ili lozinka');
        console.error('Greška tokom prijave:', error);
      });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    axios.post('/api/forgot-password', { email: forgotPasswordEmail })
      .then(response => {
        setResetMessage('Proverite vaš email za dalje instrukcije');
        setErrorMessage('');
      })
      .catch(error => {
        setErrorMessage('Došlo je do greške, pokušajte ponovo');
        console.error('Greška tokom resetovanja lozinke:', error);
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="button-container">
            <button type="submit" className="login-button">Prijavi se</button>
            <Link to="/register" className="signin-button">Registruj se</Link>
          </div>
        </div>
      </form>
      <div className="forgot-password-container">
        <h3 className="forgot-password-title">Zaboravili ste lozinku?</h3>
        <p className="forgot-password-instructions">Ukucajte vaš email za promenu lozinke</p>
        <form onSubmit={handleForgotPassword}>
          <div className="form-group">
            <input
              type="email"
              id="forgotPasswordEmail"
              name="forgotPasswordEmail"
              placeholder="Unesite vaš email"
              className="login-input"
              value={forgotPasswordEmail}
              onChange={handleForgotPasswordInput}
            />
          </div>
          <button type="submit" className="login-button">Resetujte lozinku</button>
        </form>
        {resetMessage && <p className="reset-message">{resetMessage}</p>}
      </div>
    </div>
  );
}

export default Login;
