import React, { memo, useEffect, useState } from 'react';
import { useLoading } from '../../../context/useLoading';
import './Spinner.css';

// Optimize with React.memo to prevent unnecessary re-renders
const Spinner = memo(() => {
  // Get loading state from context
  const { isLoading } = useLoading();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // When isLoading changes, update visibility with a slight delay to ensure smooth transitions
    if (isLoading) {
      // Show immediately when loading starts
      setVisible(true);
    } else if (!isLoading && visible) {
      // Add a small delay before hiding to ensure smooth transition
      const timer = setTimeout(() => {
        setVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading, visible]);
  
  // Always render, but control visibility with CSS classes
  return (
    <>
      <div className={`spinner-overlay ${visible ? 'visible' : ''}`}></div>
      <div className={`spinner ${visible ? 'visible' : ''}`}></div>
    </>
  );
});

// Display name for debugging
Spinner.displayName = 'Spinner';

export default Spinner;
