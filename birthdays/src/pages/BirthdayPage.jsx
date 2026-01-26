// src/pages/BirthdayPage.jsx
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

// Import Components
import Confetti from '../components/Confetti';
import Hero from '../components/Hero';
import Message from '../components/Message';

import FinalWish from '../components/FinalWish';
import SurprisePopup from '../components/SurprisePopup';

// Import CSS
import './BirthdayPage.css';

const BirthdayPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const [showSurprise, setShowSurprise] = useState(false);
  
  const birthdayDate = 'February 2nd, 2025';

  useEffect(() => {
    // Show content animation
    setTimeout(() => setShowContent(true), 300);
    
    // Hide confetti after 8 seconds (لإعطاء وقت أطول للترحيب)
    setTimeout(() => setShowConfetti(false), 8000);
  }, []);

  const handleSurpriseClick = () => {
    setShowSurprise(true);
  };

  const handleCloseSurprise = () => {
    setShowSurprise(false);
  };

  return (
    <div className="birthday-page">
      {/* Confetti Animation */}
      {showConfetti && <Confetti />}
      
      {/* Hero Section - مع صفحة الترحيب */}
      <Hero 
        birthdayDate={birthdayDate} 
        showContent={showContent} 
      />

      {/* Message Section */}
      <Message />

      {/* Final Wish Section */}
      <FinalWish onSurpriseClick={handleSurpriseClick} />

      {/* Surprise Popup مع الموسيقى */}
      {showSurprise && <SurprisePopup onClose={handleCloseSurprise} />}

      {/* Footer */}
      <footer className="birthday-footer">
        <p className="footer-message">  I   LoVe   YoU    Amare 💕</p>
        <p className="footer-date">{birthdayDate}</p>
        <div className="footer-hearts">
          <Heart className="w-6 h-6 fill-white heart-1" />
          <Heart className="w-6 h-6 fill-white heart-2" />
          <Heart className="w-6 h-6 fill-white heart-3" />
        </div>
      </footer>
    </div>
  );
};

export default BirthdayPage;