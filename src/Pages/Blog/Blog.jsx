import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { useLoading } from '../../context/useLoading'
import './Blog.css'
import './BlogPost.css'

import blogImage1 from '../../assets/Images/blog1img.avif'

const Blog = () => {
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();
  
  // Show loading spinner only when content is actually loading
  useEffect(() => {
    // Only show loading on initial mount, not on re-renders
    let isMounted = true;
    
    // Show loading indicator
    showLoading();
    
    // Function to check if images are loaded
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('.blog-image');
      let loadedImages = 0;
      
      if (images.length === 0 || !isMounted) {
        // No images to load or component unmounted, hide spinner
        hideLoading();
        return;
      }
      
      // Check each image
      images.forEach(img => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener('load', () => {
            loadedImages++;
            if (loadedImages === images.length && isMounted) {
              hideLoading();
            }
          }, { once: true });
          
          // Handle error case
          img.addEventListener('error', () => {
            loadedImages++;
            if (loadedImages === images.length && isMounted) {
              hideLoading();
            }
          }, { once: true });
        }
      });
      
      // If all images are already loaded
      if (loadedImages === images.length && isMounted) {
        hideLoading();
      }
    };
    
    // Set a backup timer to hide loading in case the load event doesn't fire
    const backupTimer = setTimeout(() => {
      if (isMounted) hideLoading();
    }, 3000);
    
    // Check images after a small delay to ensure DOM is ready
    const initTimer = setTimeout(checkImagesLoaded, 100);
    
    // Cleanup
    return () => {
      isMounted = false;
      clearTimeout(backupTimer);
      clearTimeout(initTimer);
      hideLoading();
    };
  }, [showLoading, hideLoading]);
  
  const handleBlogCardClick = (postId) => {
    showLoading(); // Show loading spinner before navigation
    navigate(`/blog/${postId}`);
  };
  
  return (
    <>
      <div className="blog-post-page">
        <div className="blog-post-header">
          <div className="container">
            <Link to="/" className="back-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Asosiy sahifa
            </Link>
          </div>
        </div>
        
        <div className="blog-post-content-wrapper">
          <div className="container">
            <h1 className="blog-post-title">Bizning Blog</h1>
          
          <div className="blog-list">
            <div 
              className="blog-card" 
              onClick={() => handleBlogCardClick('dispenser-water')}
            >
              <img 
                src={blogImage1}
                alt="Hair transplant" 
                className="blog-image" 
              />
              <div className="blog-content">
                <div className="blog-date">MAY 11, 2025</div>
                <h2 className="blog-card-title">
                Soch ko'chirib o'tkazishdan so'ng kutilayotgan holatlar: tiklanish, natijalar va foydali maslahatlar</h2>
                <div className="blog-meta">
                  <span className="blog-read-time">3 Minutli o'qish</span>
                  <span className="blog-category">Soch</span>
                </div>
              </div>
            </div>
            
            <div 
              className="blog-card" 
              onClick={() => handleBlogCardClick('cooking-gas')}
            >
              <img 
                src="https://images.unsplash.com/photo-1603320409990-02d834987237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="Cooking gas stove" 
                className="blog-image" 
              />
              <div className="blog-content">
                <div className="blog-date">MAY 10TH, 2025</div>
                <h2 className="blog-card-title">5 Signs It's Time to Refill Your Cooking Gas</h2>
                <div className="blog-meta">
                  <span className="blog-read-time">5 Min read</span>
                  <span className="blog-category">Home</span>
                </div>
              </div>
            </div>
            
            <div 
              className="blog-card" 
              onClick={() => handleBlogCardClick('wellness-program')}
            >
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="Workplace wellness" 
                className="blog-image" 
              />
              <div className="blog-content">
                <div className="blog-date">MAY 9TH, 2025</div>
                <h2 className="blog-card-title">How To Start A Wellness Program At Work</h2>
                <div className="blog-meta">
                  <span className="blog-read-time">6 Min read</span>
                  <span className="blog-category">Workplace</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog
