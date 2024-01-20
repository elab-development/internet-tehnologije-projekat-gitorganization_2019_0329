import React, { useState } from 'react';
import OneCard from './OneCard';
import './cards.css';
import Images from './imagesPacked';

const Card = () => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleConfirm = () => {
    
    console.log('Korisnik je uneo:', userAnswer);
   
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
          <OneCard key={card.id} imageSrc={card.imageSrc} soundSrc={card.soundSrc} title={card.title} />
        ))}
      </div>
      <div className="card-container">
        <input type="text" value={userAnswer} onChange={handleInputChange} placeholder="Unesite odgovor" />
        <button onClick={handleConfirm}>Potvrdi</button>
      </div>
    </>
  );
};

export default Card;
