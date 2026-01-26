// src/components/Confetti.jsx
import React from 'react';
import './Confetti.css';

const Confetti = () => {
  const pieces = Array.from({ length: 60 });
  
  return (
    <div className="confetti-container">
      {pieces.map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          {i % 3 === 0 ? '🎈' : i % 3 === 1 ? '✨' : '🎉'}
        </div>
      ))}
    </div>
  );
};

export default Confetti;