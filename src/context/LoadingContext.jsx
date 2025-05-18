import React, { createContext, useState, useRef } from 'react';

// Create a context for loading state
export const LoadingContext = createContext();

// Provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const loadingTimerRef = useRef(null);
  const minLoadingTime = 100; // Only show spinner if loading takes more than 100ms

  // Function to show loading spinner only if loading takes longer than minLoadingTime
  const showLoading = () => {
    // Clear any existing timer
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }
    
    // Set a timer to show the spinner only if loading takes longer than minLoadingTime
    loadingTimerRef.current = setTimeout(() => {
      setIsLoading(true);
    }, minLoadingTime);
  };
  
  // Function to hide loading spinner
  const hideLoading = () => {
    // Clear the timer if loading completes before minLoadingTime
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
      loadingTimerRef.current = null;
    }
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
