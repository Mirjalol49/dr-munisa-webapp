import React, { useState, useRef, useCallback, useEffect } from 'react';
import { LoadingContext } from './LoadingContext';

// Provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const loadingTimerRef = useRef(null);
  const hideTimerRef = useRef(null);
  const loadingCountRef = useRef(0); // Counter to track nested loading requests
  const lastLoadingTime = useRef(0);
  const minLoadingTime = 500; // Increased to 500ms to prevent flickering
  const minDisplayTime = 1000; // Increased minimum time to show the spinner once visible
  const stableTimeRef = useRef(null); // Timer to stabilize loading state

  // Clear all timers on unmount
  useEffect(() => {
    return () => {
      if (loadingTimerRef.current) clearTimeout(loadingTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (stableTimeRef.current) clearTimeout(stableTimeRef.current);
    };
  }, []);

  // Function to show loading spinner only if loading takes longer than minLoadingTime
  const showLoading = useCallback(() => {
    // Increment the loading counter
    loadingCountRef.current += 1;
    
    // If we're already loading, just update the counter but don't restart the timer
    if (isLoading) return;
    
    // Clear any existing hide timer
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    
    // If we recently showed the spinner, show it immediately without delay
    const now = Date.now();
    if (now - lastLoadingTime.current < 2000) {
      setIsLoading(true);
      lastLoadingTime.current = now;
      return;
    }
    
    // Clear any existing show timer
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }
    
    // Set a timer to show the spinner only if loading takes longer than minLoadingTime
    loadingTimerRef.current = setTimeout(() => {
      // Only show if we still have pending loading requests
      if (loadingCountRef.current > 0) {
        setIsLoading(true);
        lastLoadingTime.current = Date.now();
      }
      loadingTimerRef.current = null;
    }, minLoadingTime);
  }, [isLoading]);
  
  // Function to hide loading spinner
  const hideLoading = useCallback(() => {
    // Decrement the loading counter, but don't go below 0
    loadingCountRef.current = Math.max(0, loadingCountRef.current - 1);
    
    // If we still have pending loading requests, don't hide
    if (loadingCountRef.current > 0) return;
    
    // Clear the show timer if loading completes before minLoadingTime
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
      loadingTimerRef.current = null;
    }
    
    // If spinner is visible, ensure it stays visible for at least minDisplayTime
    if (isLoading) {
      // If we already have a hide timer, don't create another one
      if (hideTimerRef.current) return;
      
      const timeVisible = Date.now() - lastLoadingTime.current;
      const remainingTime = Math.max(0, minDisplayTime - timeVisible);
      
      hideTimerRef.current = setTimeout(() => {
        // Only hide if we have no pending loading requests
        if (loadingCountRef.current === 0) {
          setIsLoading(false);
          
          // Add a stabilization period where we ignore new loading requests
          stableTimeRef.current = setTimeout(() => {
            stableTimeRef.current = null;
          }, 300);
        }
        hideTimerRef.current = null;
      }, remainingTime);
    } else if (loadingCountRef.current === 0) {
      // If spinner is not visible and no pending requests, ensure it stays hidden
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
