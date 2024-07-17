import React, { useState } from 'react';
<<<<<<< HEAD:frontend/frontend/Elab/React/aplik/src/Login.jsx
import './login.css';
import axios from 'axios';
=======
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
>>>>>>> 74568caf5cea147289e6564e0233ba952c9686b9:frontend/Elab/React/aplik/src/Login.jsx

const Login = ({ onLoginSuccess }) => {
  const [userData, setUserData] = useState({
    usernameEmail: '',
    password: ''
  });
<<<<<<< HEAD:frontend/frontend/Elab/React/aplik/src/Login.jsx
=======
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const navigate = useNavigate();
>>>>>>> 74568caf5cea147289e6564e0233ba952c9686b9:frontend/Elab/React/aplik/src/Login.jsx

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

<<<<<<< HEAD:frontend/frontend/Elab/React/aplik/src/Login.jsx
  const handleLogin = (e) => {
    e.preventDefault(); // Zaustavlja podrazumevano ponašanje forme, tj ne refresuje stranicu 
    
=======
  const handleForgotPasswordInput = (e) => {
    setForgotPasswordEmail(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

>>>>>>> 74568caf5cea147289e6564e0233ba952c9686b9:frontend/Elab/React/aplik/src/Login.jsx
    const loginData = {
      usernameEmail: userData.usernameEmail,
      password: userData.password,
    };
<<<<<<< HEAD:frontend/frontend/Elab/React/aplik/src/Login.jsx
//Funkcija handleLogin šalje podatke za prijavu na
// server koristeći axios.
// Ako prijava uspe, token se čuva u sessionStorage i poziva se onLoginSuccess funkcija. Ako prijava ne uspe, greška se prikazuje u konzoli.
    axios.post('/api/login', loginData)
      .then(response => {
        const token = response.data.token;
        window.sessionStorage.setItem("auth_token", token);
        onLoginSuccess(); // Poziv funkcije onLoginSuccess
      })
      .catch(error => {
        console.error('Error during login:', error);
=======

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
>>>>>>> 74568caf5cea147289e6564e0233ba952c9686b9:frontend/Elab/React/aplik/src/Login.jsx
      });
  };

  return (
    <div className="login-container">
<<<<<<< HEAD:frontend/frontend/Elab/React/aplik/src/Login.jsx
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="login-content">
          <div className="form-group">
            <label htmlFor="usernameEmail" className="password-label">Username or Email</label>
=======
      <h2 className="login-title">Prijava</h2>
      <form onSubmit={handleLogin}>
        <div className="login-content">
          <div className="form-group">
            <label htmlFor="usernameEmail" className="password-label">Korisničko ime ili email</label>
>>>>>>> 74568caf5cea147289e6564e0233ba952c9686b9:frontend/Elab/React/aplik/src/Login.jsx
            <input
              type="text"
              id="usernameEmail"
              name="usernameEmail"
<<<<<<< HEAD:frontend/frontend/Elab/React/aplik/src/Login.jsx
              placeholder="Enter your username or email"
=======
              placeholder="Unesite korisničko ime ili email"
>>>>>>> 74568caf5cea147289e6564e0233ba952c9686b9:frontend/Elab/React/aplik/src/Login.jsx
              className="login-input"
              value={userData.usernameEmail}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
<<<<<<< HEAD:frontend/frontend/Elab/React/aplik/src/Login.jsx
            <label htmlFor="password" className="password-label">Password</label>
=======
            <label htmlFor="password" className="password-label">Lozinka</label>
>>>>>>> 74568caf5cea147289e6564e0233ba952c9686b9:frontend/Elab/React/aplik/src/Login.jsx
            <input
              type="password"
              id="password"
              name="password"
<<<<<<< HEAD:frontend/frontend/Elab/React/aplik/src/Login.jsx
              placeholder="Password"
=======
              placeholder="Lozinka"
>>>>>>> 74568caf5cea147289e6564e0233ba952c9686b9:frontend/Elab/React/aplik/src/Login.jsx
              className="login-input"
              value={userData.password}
              onChange={handleInput}
            />
          </div>
<<<<<<< HEAD:frontend/frontend/Elab/React/aplik/src/Login.jsx
          <div className="button-container">
            <button type="submit" className="login-button">Login</button>
            <button className="signin-button">Register</button>
          </div>
        </div>
      </form>
=======
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
>>>>>>> 74568caf5cea147289e6564e0233ba952c9686b9:frontend/Elab/React/aplik/src/Login.jsx
    </div>
  );
}

export default Login;
