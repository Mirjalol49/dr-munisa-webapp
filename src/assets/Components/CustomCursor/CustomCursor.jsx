import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Smooth cursor movement
    const moveCursor = (e) => {
      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.tagName.toLowerCase() === 'select' ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('clickable')
      );
      
      // If hovering over interactive element, slightly adjust cursor position
      // to ensure it's properly aligned with the clickable area
      if (isInteractive) {
        // Get the center of the target element
        const rect = target.getBoundingClientRect();
        const targetCenterX = rect.left + rect.width / 2;
        const targetCenterY = rect.top + rect.height / 2;
        
        // Calculate a slight shift toward the center of the element (20% shift)
        const shiftX = (targetCenterX - e.clientX) * 0.2;
        const shiftY = (targetCenterY - e.clientY) * 0.2;
        
        // Apply the shifted position
        setPosition({ 
          x: e.clientX + shiftX, 
          y: e.clientY + shiftY 
        });
      } else {
        // Normal cursor position
        setPosition({ x: e.clientX, y: e.clientY });
      }
      
      setIsVisible(true);
      setIsHovering(isInteractive);
    };

    // Handle mouse down/up for click effect
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Hide cursor when it leaves the window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Clean up event listeners
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${isVisible ? 'visible' : ''} ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    />
  );
};

export default CustomCursor;
