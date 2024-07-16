import React, { useState, useEffect } from 'react';
import './cards.css';
import Images from './imagesPacked';

const OneCard = ({ imageSrc, soundSrc, title, playSound }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(title);

    playSound(u);

    return () => {
      synth.cancel();
    };
  }, [title, playSound]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;
    synth.speak(new SpeechSynthesisUtterance(title));

    setIsPlaying(true);
  };

  return (
    <div className="one-card">
      <img src={imageSrc} alt="Slika" className="one-cardp" />
      <button className={`sound-button ${isPlaying ? 'playing' : ''}`} onClick={handlePlay}>
        🎵
      </button>
      <p className="pitanje">{title}</p>
    </div>
  );
};

export default OneCard;
