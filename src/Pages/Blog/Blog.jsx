import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Blog.css'
import './BlogPost.css'

import blogImage1 from '../../assets/Images/blog1img.avif'
import blogImage2 from '../../assets/Images/blog2.jpg'

import blogImage3 from '../../assets/Images/josh.png'

const Blog = () => {
  const navigate = useNavigate();
  
  // Optimize image loading
  useEffect(() => {
    // Only run on initial mount, not on re-renders
    let isMounted = true;
    
    // Function to optimize images
    const optimizeImages = () => {
      if (!isMounted) return;
      
      const images = document.querySelectorAll('.blog-image');
      
      if (images.length === 0) {
        return;
      }
      
      // Add loading and decoding attributes to images for better performance
      images.forEach(img => {
        // Add loading="lazy" for images not in the viewport
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };
    
    // Run the optimization after a small delay to ensure DOM is ready
    const initTimer = setTimeout(optimizeImages, 100);
    
    // Cleanup
    return () => {
      isMounted = false;
      clearTimeout(initTimer);
    };
  }, []);
  
  const handleBlogCardClick = (postId) => {
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
              onClick={() => handleBlogCardClick('maslahatlar')}
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
              onClick={() => handleBlogCardClick('kochirish-jarayoni')}
            >
              <img 
                src={blogImage2} 
                alt="Cooking gas stove" 
                className="blog-image" 
              />
              <div className="blog-content">
                <div className="blog-date">Aprel 12, 2025</div>
                <h2 className="blog-card-title">Soch ko'chirib o'tkazish jarayoni og'riqlimi?</h2>
                <div className="blog-meta">
                  <span className="blog-read-time">5 Minutli o'qish</span>
                  <span className="blog-category">Soch</span>
                </div>
              </div>
            </div>
            
            <div 
              className="blog-card" 
              onClick={() => handleBlogCardClick('vaqt-jadvali')}
            >
              <img 
                src={blogImage3} 
                alt="Workplace wellness" 
                className="blog-image" 
              />
              <div className="blog-content">
                <div className="blog-date">MAY 9, 2025</div>
                <h2 className="blog-card-title">Soch ko'chirib o'tkazish: oldin va keyingi holat - haqiqiy natijalar qanday bo'ladi</h2>
                <div className="blog-meta">
                  <span className="blog-read-time">6 Minutli o'qish</span>
                  <span className="blog-category">Soch</span>
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
