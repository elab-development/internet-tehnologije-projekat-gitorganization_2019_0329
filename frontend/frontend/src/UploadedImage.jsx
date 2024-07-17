import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Uvoz CSS datoteke

function useImgCounter(initialNumber) {
  const [countImg, setCountImg] = useState(initialNumber);

  const increment = () => {
    setCountImg(countImg + 1);
  };

  return [countImg, increment];
}

const UploadImage = () => {
  const [countImg, incrementCount] = useImgCounter(0);
  const [selectedFile, setSelectedFile] = useState(null);

  let navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      incrementCount();

      let config = {
        method: 'post',
        url: 'api/upload',
        data: formData
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          alert(response.data.message);
          incrementCount();
          console.log('Current number of images: ' + countImg);
          // navigate("/teams");
        })
        .catch((error) => {
          alert('Data not found');
          navigate('/');
        });
    } else {
      alert('Please select an image before uploading.');
    }
  };

  return (
    <div className="login-container">
      <p className="header-title">Podelite sa nama fotografije sa jezičkih radionica!</p>
      <input type="file" onChange={handleFileChange} accept="image/*" className="login-input" />
      <button className="login-button" onClick={handleUpload}>
        Ubaci
      </button>

      {selectedFile && (
        <div>
          <h2>Postavi fotografiju</h2>
          <div>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt={`Uploaded Image`}
              style={{ width: '400px', height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
