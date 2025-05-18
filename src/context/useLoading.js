import { useContext } from 'react';
import { LoadingContext } from './LoadingContext';

// Custom hook to use the loading context
export const useLoading = () => useContext(LoadingContext);
