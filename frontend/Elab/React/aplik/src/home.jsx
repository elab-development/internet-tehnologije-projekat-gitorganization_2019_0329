import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import MyButton from "@ant-design/icons";

const AuthenticationAndRandomData = ({ addToken, token }) => {
  let navigate = useNavigate();

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
      .then((response) => {
        window.sessionStorage.setItem("auth_token", null);
        window.sessionStorage.removeItem("role");
        window.sessionStorage.removeItem("auth_token");
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
    let newMemberData = memberData;
    newMemberData[e.target.name] = e.target.value;
    setMemberData(newMemberData);
  }

    axios.request(config)
      .then((response) => {
        alert("Successfully deleted member!");
      })
      .catch((error) => {
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
      .then((response) => {
        alert("Successfully updated member!");
      })
      .catch((error) => {
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
      .then((response) => {
        alert("Successfully inserted member!");
      })
      .catch((error) => {
        alert("Error while inserting member");
      });
  }

  return (
    <div>
      {window.sessionStorage.getItem("auth_token") === null ? (
        <Login addToken={addToken} />
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
      
          </div>
        </div>
      )}
    </div>
  );
;

export default AuthenticationAndRandomData;
