import { createContext } from 'react';

// Create a context for loading state
export const LoadingContext = createContext({
  isLoading: false,
  showLoading: () => {},
  hideLoading: () => {}
});
