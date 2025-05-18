
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Pages/Header/Header'
import Main from './Pages/Main/Main'
import Footer from './Pages/Footer/Footer'
import Blog from './Pages/Blog/Blog'
import BlogPost from './Pages/Blog/BlogPost'
import useScrollReveal from './utils/useScrollReveal'
import './utils/scrollReveal.css'
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
