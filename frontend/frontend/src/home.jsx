import React, { useState } from 'react';
//import axios from 'axios';
import axios from './axiosConfig';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
//kad se popune podaci sa forme upisuju se u ovu promenljivu 
//tokeni sprecavaju napade, tj da neki drugi korisnik predstavi kao admin
const LoginForm = ({ onLoginSuccess }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });


//  const axiosInstance = axios.create();



  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
  //  console.log(e);
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;//sta gd da je upisano on ce da prosledi 
    const { name, value } = e.target;
   setUserData({
      ...userData,
      [name]: value
    });

 // console.log(newUserData);
  }

  function handleLogin(e) {
  
  e.preventDefault();
  //ovde saljemo zahtve ako se izvrsi 
    axios.post('/api/login', userData)
      .then(res => {console.log(res.data);
     const token = res.data.csrf_token;
        const role = res.data.role;
        window.sessionStorage.setItem("auth_token", token);
        window.sessionStorage.setItem("role", role);
       // onLoginSuccess(token);
        navigate('/cards');
     })
      .catch(error => {
        console.error('Greška tokom prijave:', error);
     //   setError('Pogrešan mail ili lozinka');
        setSuccessMessage('');
      });
      
  };

  
  function handleChangePassword(e){
  
    e.preventDefault();
  
    axios.post('/api/forgot/password', userData)
  
      .then((res) => {
  
        navigate("/");
  
        alert("Password has been changed");
  
      })
  
      .catch((error) => {
  
        alert("Error! Try again.");
  
      });
  
  }
   

  function handleLogout() {
    
    let myUrl=null;
    if(window.sessionStorage.getItem("role")==="admin"){
      myUrl="api/admin/logout";
    }else{
      myUrl="api/logout";
    }
    let config = {
      method: "post",
      url: myUrl,
      headers: {

        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      }
    };
    axios.request(config)
      .then((res) => {
        console.log(JSON.stringify(res.data));
        
        window.sessionStorage.setItem("auth_token", null);
        window.sessionStorage.removeItem("role");
        window.sessionStorage.removeItem("auth_token");
        window.sessionStorage.removeItem("csrfToken");
        navigate("/");
      })
      
      .catch((error) => {
        console.log(error);
      });
    }

  return (
    <div className="login-container">
      <h2 className="login-title">Prijava</h2>
      <form onSubmit={handleLogin}>
        <div className="login-content">
          <div className="form-group">
            <label htmlFor="email" className="password-label">Korisničko ime ili email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Unesite korisničko ime ili email"
              className="login-input"
              value={userData.email}
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
          <div className="d-flex align-items-center justify-content-center pb-4">
               <p className="mb-0 me-2">Promenite lozinku</p>
               <button className="login-button" onClick={handleChangePassword}>Promeni</button>
           </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
