
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer'
import useScrollReveal from './utils/useScrollReveal'
import './utils/scrollReveal.css'
import './App.css'
import { ModalProvider } from './context/ModalContext'

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

// Simple wrapper component for lazy-loaded components
const LazyLoadingWrapper = ({ children }) => {
  return <>{children}</>;
};

function App() {
  // Language detection and initialization is handled in i18n.js
  return (
    <ModalProvider>
      <BrowserRouter>
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
    </ModalProvider>
  )
}

export default App
