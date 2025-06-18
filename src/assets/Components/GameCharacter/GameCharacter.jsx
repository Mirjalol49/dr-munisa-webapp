import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
/* CSS import */
import './GameCharacter.css';
import characterImg from '../../Images/charecter.png';

// Static variable to track if character was dismissed in current page view
// This will reset when the page is reloaded
let isCharacterDismissedInCurrentView = false;

const GameCharacter = ({ onPlayGame, onDismiss }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const characterRef = useRef(null);

  useEffect(() => {
    // Check if character was previously dismissed in this view
    if (isCharacterDismissedInCurrentView) {
      // If character was dismissed, don't show it again in this view
      if (onDismiss) onDismiss();
      return;
    }
    
    // Add a slight delay before showing the character for better user experience
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  const handlePlayClick = () => {
    if (onPlayGame) onPlayGame();
  };

  const handleDismissClick = () => {
    // First make it invisible with animation
    setVisible(false);
    
    // Mark as dismissed for current page view only
    // This will reset when the page is reloaded
    isCharacterDismissedInCurrentView = true;
    
    // Add a delay before calling onDismiss to allow animation to complete
    setTimeout(() => {
      if (onDismiss) onDismiss();
    }, 700);
  };

  return (
    <div className={`game-character-container ${visible ? 'visible' : ''}`} ref={characterRef}>
      <div className="character-image-container">
        <img 
          src={characterImg} 
          alt="Game Character" 
          className="character-image" 
          width="300" 
          height="400" 
        />
      </div>
      <div className="character-speech-bubble">
        <p>{t('gameCharacter.message')}</p>
        <div className="character-buttons">
          <button className="character-button play-button" onClick={handlePlayClick}>
            {t('gameCharacter.connect')}
          </button>
          <button className="character-button dismiss-button" onClick={handleDismissClick}>
            {t('gameCharacter.later')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCharacter;
