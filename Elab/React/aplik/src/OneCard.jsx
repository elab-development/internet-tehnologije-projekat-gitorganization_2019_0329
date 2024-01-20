import React, { useState, useEffect } from 'react';
import './cards.css';
import ResponsiveVoice from 'responsivevoice';

const OneCard = ({ imageSrc, soundSrc, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const[utterance,setUtterance]=useState(null);

  const handlePlay = () => {
    const synth = window.speechSynthesis;
    synth.speak(utterance);

    setIsPlaying(true);
  };
  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(title);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [title]);

const playSound = () => {
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
