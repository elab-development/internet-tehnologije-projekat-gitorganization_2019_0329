import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

const Login = ({ onLoginSuccess }) => {
  const [userData, setUserData] = useState({
    usernameEmail: '',
    password: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Zaustavlja podrazumevano ponašanje forme, tj ne refresuje stranicu 
    
    const loginData = {
      usernameEmail: userData.usernameEmail,
      password: userData.password,
    };
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
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="login-content">
          <div className="form-group">
            <label htmlFor="usernameEmail" className="password-label">Username or Email</label>
            <input
              type="text"
              id="usernameEmail"
              name="usernameEmail"
              placeholder="Enter your username or email"
              className="login-input"
              value={userData.usernameEmail}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="password-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="login-input"
              value={userData.password}
              onChange={handleInput}
            />
          </div>
          <div className="button-container">
            <button type="submit" className="login-button">Login</button>
            <button className="signin-button">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
