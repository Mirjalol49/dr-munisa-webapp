import React, { memo } from 'react';
import { useLoading } from '../../../context/useLoading';
import './Spinner.css';

// Optimize with React.memo to prevent unnecessary re-renders
const Spinner = memo(({ isLoading: propIsLoading }) => {
  // Get loading state from context
  const { isLoading: contextIsLoading } = useLoading();
  
  // Use either the prop or context loading state
  const isLoading = propIsLoading !== undefined ? propIsLoading : contextIsLoading;
  
  // Only render if visible to improve performance
  if (!isLoading) return null;
  
  return (
    <>
      <div className="spinner-overlay visible"></div>
      <div className="spinner visible"></div>
    </>
  );
});

// Display name for debugging
Spinner.displayName = 'Spinner';

export default Spinner;
