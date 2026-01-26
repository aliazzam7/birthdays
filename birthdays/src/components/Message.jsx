// src/components/Message.jsx
import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';
import './Message.css';

const Message = () => {
  return (
    <section className="message-section">
      <div className="message-container">
        <div className="message-card">
          
          {/* Header */}
          <div className="message-header">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500 animate-pulse" />
            <h2 className="message-title">A Message Just for You</h2>
            <Sparkles className="w-8 h-8 text-purple-500" />
          </div>

       {/* Message Content */}
<div className="message-content">
  <p className="message-quote">
    "أول عيد ميلاد إلك ونحنا سوا … وأجمل بداية لقصة قلبي معك 🤍"
  </p>

  <p>
    بهيدا اليوم المميز، بحب قلك قدّيش أنا محظوظ فيكي بحياتي.
    من وقت ما دخلتي على أيامي، تغيّر كل شي حواليّي،
    وصار للحياة طعم أطيب ومعنى أعمق.
  </p>

  <p>
    هيدا أول عيد ميلاد إلك ونحنا سوا،
    ويمكن ما بتعرفي قديش هالشي كبير عندي.
    اليوم مو بس يوم ميلادك،
    اليوم أجمل يوم بالعالم بالنسبة إلي،
    لأنو عم بحتفل بوجودك بحياتي.
  </p>

  <p>
    ضحكتك أمان، صوتك راحة،
    ووجودك حدّي نعمة ما بدي ياها تخلص.
    كل لحظة معك ذكرى حلوة،
    وكل ثانية بقربك هي عيد.
  </p>

  <p className="message-highlight">
  كل سنة وإنتِ قمري و قلبي ووردتي و روحي،
  وكل سنة وإنتِ أجمل شي صار بحياتي 💖🌹
</p>
</div>


          {/* Decorative Stars */}
          <div className="message-stars">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 star-icon" />
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 star-icon" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 star-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;