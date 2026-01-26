// src/components/SurprisePopup.jsx (نسخة YouTube)
import React from 'react';
import { Music } from 'lucide-react';
import './SurprisePopup.css';

const SurprisePopup = ({ onClose }) => {
  // استخرج YouTube Video ID من الرابط
  // https://youtu.be/Q3Ug94p5JT0 → ID = Q3Ug94p5JT0
  const youtubeVideoId = "Q3Ug94p5JT0";

  return (
    <div className="surprise-overlay">
      <div className="surprise-container">
        <button
          onClick={onClose}
          className="surprise-close"
        >
          ×
        </button>

        <div className="surprise-content">
          <div className="surprise-emoji">🎁✨</div>
          
          <h3 className="surprise-title">
            Your Special Surprise!
          </h3>
          
          <p className="surprise-text">
            This is just the beginning of an amazing year ahead! I've planned something special for us to celebrate together. Get ready for an unforgettable experience! 🎉
          </p>
          
          <div className="surprise-box">
            <Music className="w-12 h-12 text-pink-500 surprise-box-icon" />
            <p className="surprise-quote">
              "The best is yet to come..." 💖
            </p>
          </div>

          {/* YouTube Embed Player */}
          <div className="youtube-player">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&loop=1&playlist=${youtubeVideoId}`}
              title="Birthday Song"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: '1rem',
                marginTop: '1.5rem'
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurprisePopup;