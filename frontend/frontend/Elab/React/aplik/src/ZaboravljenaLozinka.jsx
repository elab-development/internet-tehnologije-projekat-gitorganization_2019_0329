import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();

    axios.post('/api/reset-password', { email })
      .then(response => {
        setSuccessMessage('Link za resetovanje lozinke je poslat na vaš email.');
        setError('');
      })
      .catch(error => {
        console.error('Greška tokom slanja email-a:', error);
        setError('Došlo je do greške. Molimo pokušajte ponovo.');
        setSuccessMessage('');
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Zaboravili ste lozinku?</h2>
      <form onSubmit={handleResetPassword}>
        <div className="login-content">
          <div className="form-group">
            <label htmlFor="email" className="password-label">Unesite vaš email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Vaš email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <div className="button-container">
            <button type="submit" className="signin-button">Pošalji</button>
            <Link to="/" className="signin-button">Nazad na prijavu</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
