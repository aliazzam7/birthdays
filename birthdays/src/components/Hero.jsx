// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Camera, Cake } from 'lucide-react';
import herImage from '../assets/images/memory.jpeg';

import './Hero.css';

const Hero = ({ birthdayDate, showContent }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [welcomeText, setWelcomeText] = useState('');
  const [titleText, setTitleText] = useState('');
  
  const welcomeMessage = "It's Alaa Kahloul's Birthday Today! 🎉";
  const fullTitle = 'Happy 21st Birthday 🎉';

  useEffect(() => {
    // Welcome text animation (letter by letter)
    let welcomeIndex = 0;
    const welcomeInterval = setInterval(() => {
      if (welcomeIndex <= welcomeMessage.length) {
        setWelcomeText(welcomeMessage.slice(0, welcomeIndex));
        welcomeIndex++;
      } else {
        clearInterval(welcomeInterval);
        // بعد ما يخلص الترحيب، انتظر 2 ثانية وروح للتصميم الأساسي
        setTimeout(() => {
          setShowWelcome(false);
          // ابدأ animation العنوان الأساسي
          let titleIndex = 0;
          const titleInterval = setInterval(() => {
            if (titleIndex <= fullTitle.length) {
              setTitleText(fullTitle.slice(0, titleIndex));
              titleIndex++;
            } else {
              clearInterval(titleInterval);
            }
          }, 100);
        }, 2000);
      }
    }, 80);

    return () => {
      clearInterval(welcomeInterval);
    };
  }, []);

  // صفحة الترحيب الأولى
  if (showWelcome) {
    return (
      <section className="hero-section">
        <div className="welcome-screen">
          <div className="welcome-content">
            <div className="welcome-icon">🎂✨</div>
            <h1 className="welcome-title">
              {welcomeText}
            </h1>
            <div className="welcome-sparkles">
              <Sparkles className="sparkle-1" />
              <Sparkles className="sparkle-2" />
              <Sparkles className="sparkle-3" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // التصميم الأساسي (بعد الترحيب)
  return (
    <section className="hero-section">
      <div className={`hero-content ${showContent ? 'show' : 'hide'}`}>
        
        {/* Birthday Date Badge */}
        <div className="date-badge">
          <div className="date-badge-inner">
            <Cake className="w-5 h-5 text-pink-500" />
            <span className="date-text">{birthdayDate}</span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="image-container">
          <div className="image-wrapper">
            <div className="image-glow"></div>
            <div className="image-frame">
              <div className="image-placeholder">
            <img
              src={herImage}
              alt="Her"
              className="w-full h-full"
              style={{
                objectFit: 'contain',
                backgroundColor: '#fff'
              }}
            />
            </div>
            </div>
            <div className="heart-icon">
              <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
            </div>
          </div>
        </div>

        {/* Title with Letter Animation */}
        <h1 className="title">
          {titleText}
        </h1>

        {/* Subtitle */}
        <p className="subtitle">
          To the one who makes every moment brighter... ✨
        </p>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="bounce-icon">
            <Sparkles className="w-8 h-8 text-pink-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;