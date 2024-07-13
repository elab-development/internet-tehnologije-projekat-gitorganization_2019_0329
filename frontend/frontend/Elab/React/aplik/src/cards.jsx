import React, { useState } from 'react';
import OneCard from './OneCard';
import './cards.css';
import Images from './imagesPacked';
import axios from 'axios';
import React from 'react';


const Card = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleConfirm = () => {
    axios.post('/api/provera-odgovora', { odgovor: userAnswer })
      .then(response => {
        if (response.data.tacan_odgovor) {
          setFeedback('Tačan odgovor!');
        } else {
          setFeedback('Pogrešan odgovor! Pokušajte ponovo.');
        }
        setUserAnswer('');
      })
      .catch(error => {
        console.error('Greška prilikom provere odgovora:', error);
      });
  };

  const cards = [
    { id: 1, imageSrc: Images.mleko, title: 'du lait', soundSrc: 'putanja/do/zvuka1.mp3' },
    { id: 2, imageSrc: Images.casa, title: 'un verre', soundSrc: 'putanja/do/zvuka2.mp3' },
    { id: 3, imageSrc: Images.kasika, title: 'la cuillère', soundSrc: 'putanja/do/zvuka3.mp3' },
  ];

  return (
    <>
      <div className="naslov-card h4">
        <h4> POČNI SADA</h4>
      </div>
      <p className="pitanja">Šta je od ponuđenog "čaša" na francuskom jeziku?</p>
      <div className="card-imagel">
        {cards.map((card) => (
          <OneCard key={card.id} imageSrc={card.imageSrc} soundSrc={card.soundSrc} title={card.title} playSound={() => {}} />
        ))}
      </div>
      <div className="user-data">
        <input type="text" value={userAnswer} onChange={handleInputChange} placeholder="Unesite odgovor" />
        <button className="prijavi-se-btn" onClick={handleConfirm}>Potvrdi</button>
      </div>
      <p>{feedback}</p>
    </>
  );
};

export default Card;
