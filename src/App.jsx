
import React, { useEffect, useRef, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer'
import Spinner from './assets/Components/Spinner/Spinner'
import { LoadingProvider } from './context/LoadingProvider'
import { useLoading } from './context/useLoading'
import useScrollReveal from './utils/useScrollReveal'
import './utils/scrollReveal.css'
import './App.css'

// Lazy load components for better performance
const Main = lazy(() => import('./Pages/Main/Main'))
const Blog = lazy(() => import('./Pages/Blog/Blog'))
const BlogPost = lazy(() => import('./Pages/Blog/BlogPost'))
// Main layout component that includes scroll reveal
const MainLayout = () => {
  // Initialize scroll reveal animations only for main page
  useScrollReveal();
  
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

// Custom component to handle loading state during lazy loading
const LazyLoadingWrapper = ({ children }) => {
  const { showLoading, hideLoading } = useLoading();
  const isFirstRender = useRef(true);
  
  useEffect(() => {
    // Only show loading on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      showLoading();
      
      // Hide loading after component is fully mounted and rendered
      const timer = setTimeout(() => {
        hideLoading();
      }, 300); // Delay to ensure component is fully rendered
      
      return () => {
        clearTimeout(timer);
        hideLoading();
      };
    }
  }, [showLoading, hideLoading]);
  
  return <>{children}</>;
};

function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <Spinner />
        <Routes>
          <Route path="/" element={
            <Suspense fallback={null}>
              <LazyLoadingWrapper>
                <MainLayout />
              </LazyLoadingWrapper>
            </Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={null}>
              <LazyLoadingWrapper>
                <Blog />
              </LazyLoadingWrapper>
            </Suspense>
          } />
          <Route path="/blog/:postId" element={
            <Suspense fallback={null}>
              <LazyLoadingWrapper>
                <BlogPost />
              </LazyLoadingWrapper>
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  )
}

export default App
