// src/components/FinalWish.jsx
import React from 'react';
import { Sparkles, Gift } from 'lucide-react';
import './FinalWish.css';

const FinalWish = ({ onSurpriseClick }) => {
  return (
    <section className="finalwish-section">
      <div className="finalwish-background"></div>
      
      <div className="finalwish-container">
        <Sparkles className="w-16 h-16 text-purple-500 finalwish-icon" />
        
        <p className="finalwish-text">
          May this year bring you happiness, success, and everything your heart wishes for 💫
        </p>

        {/* Surprise Button */}
        <button
          onClick={onSurpriseClick}
          className="finalwish-button"
        >
          <Gift className="w-8 h-8 gift-icon" />
          A Small Surprise
          <Sparkles className="w-6 h-6 sparkle-icon" />
        </button>
      </div>
    </section>
  );
};

export default FinalWish;