import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import MyButton from "@ant-design/icons";

const AuthenticationAndRandomData = () => {
  const [token, setToken] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const storedToken = window.sessionStorage.getItem("auth_token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLoginSuccess = () => {
    const storedToken = window.sessionStorage.getItem("auth_token");
    setToken(storedToken);
  };

  function handleLogout() {
    let myUrl = window.sessionStorage.getItem("role") === "admin" ? "api/admin/logout" : "api/logout";

    let config = {
      method: "post",
      url: myUrl,
      headers: {
        Authorization: "Bearer " + token,
      }
    };

    axios.request(config)
      .then(() => {
        window.sessionStorage.removeItem("auth_token");
        window.sessionStorage.removeItem("role");
        setToken(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [randomQuestion, setRandomQuestion] = useState('');
  const generateRandomQuestion = () => {
    const url = 'https://opentdb.com/api.php?amount=1';
    axios.get(url)
      .then(response => {
        const question = response.data.results[0].question;
        setRandomQuestion(question);
      })
      .catch(error => {
        console.log('Error while fetching question');
      });
  };

  const [randomFact, setRandomFact] = useState('');
  const generateRandomFact = () => {
    const apiUrl = 'http://numbersapi.com/random/trivia';
    axios.get(apiUrl)
      .then(response => setRandomFact(response.data))
      .catch(error => {
        console.log('Error while fetching fact');
      });
  };

  useEffect(() => {
    generateRandomFact();
  }, []);

  // State za upravljanje članovima
  const [memberData, setMemberData] = useState({
    id: "",
    first_name: "",
    last_name: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setMemberData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  function deleteMember() {
    let config = {
      method: 'delete',
      url: 'api/members/' + memberData.id + '/delete',
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      }
    };

    axios.request(config)
      .then(() => {
        alert("Successfully deleted member!");
      })
      .catch(() => {
        alert("Error while deleting member");
      });
  }

  function updateMember() {
    let data = JSON.stringify({
      "first_name": memberData.first_name,
      "last_name": memberData.last_name
    });
    let config = {
      method: 'put',
      url: 'api/members/' + memberData.id + '/update',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
      data: data
    };

    axios.request(config)
      .then(() => {
        alert("Successfully updated member!");
      })
      .catch(() => {
        alert("Error while updating member");
      });
  }

  function insertMember() {
    let data = JSON.stringify({
      "first_name": memberData.first_name,
      "last_name": memberData.last_name
    });
    let config = {
      method: 'post',
      url: 'api/members/insert',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
      data: data
    };

    axios.request(config)
      .then(() => {
        alert("Successfully inserted member!");
      })
      .catch(() => {
        alert("Error while inserting member");
      });
  }

  // State za resetovanje lozinke
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const resetPassword = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    let config = {
      method: 'post',
      url: 'api/reset-password',
      data: {
        email: email
      }
    };

    axios.request(config)
      .then(() => {
        alert("An email with instructions has been sent to your email address.");
      })
      .catch(() => {
        alert("Failed to send reset password email. Please try again later.");
      });
  };

  return (
    <div>
      {token === null ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          <p>Random question: <span dangerouslySetInnerHTML={{ __html: randomQuestion }} /></p>
          <MyButton label={"Random question:"} disabled={false} onClick={generateRandomQuestion}></MyButton>
          <p>{randomFact}</p>
          <MyButton label={"Logout"} onClick={handleLogout} />

          <div>
            <h2>Manage Members</h2>
            <input type="text" name="id" placeholder="ID" onChange={handleInput} />
            <input type="text" name="first_name" placeholder="First Name" onChange={handleInput} />
            <input type="text" name="last_name" placeholder="Last Name" onChange={handleInput} />
            <MyButton label={"Insert member"} disabled={false} onClick={insertMember}></MyButton>
            <MyButton label={"Update member"} disabled={false} onClick={updateMember}></MyButton>
            <MyButton label={"Delete member"} disabled={false} onClick={deleteMember}></MyButton>
          </div>

          <div>
            <h2>Forgot Password?</h2>
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
            <MyButton label={"Reset Password"} onClick={resetPassword}></MyButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthenticationAndRandomData;
