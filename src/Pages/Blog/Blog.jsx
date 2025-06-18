import React, { useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer'
import './Blog.css'
import './BlogPost.css'

// Import images - Uzbek
import blogImage1Uz from '../../assets/Images/soch_uz.png'
import blogImage2Uz from '../../assets/Images/soch2_uz.png'
import blogImage3Uz from '../../assets/Images/josh_uz.png'

// Import images - English
import blogImage1En from '../../assets/Images/soch_en.png'
import blogImage2En from '../../assets/Images/soch2_en.png'
import blogImage3En from '../../assets/Images/josh_en.png'

// Import images - Russian
import blogImage1Ru from '../../assets/Images/soch_ru.png'
import blogImage2Ru from '../../assets/Images/soch2_ru.png'
import blogImage3Ru from '../../assets/Images/josh_ru.png'

const Blog = () => {
  const { t, i18n } = useTranslation();
  
  // Get current language
  const currentLanguage = i18n.language;
  
  // Select images based on current language
  const blogImages = useMemo(() => {
    switch(currentLanguage) {
      case 'en':
        return [blogImage1En, blogImage2En, blogImage3En];
      case 'ru':
        return [blogImage1Ru, blogImage2Ru, blogImage3Ru];
      default: // 'uz' or any other language defaults to Uzbek
        return [blogImage1Uz, blogImage2Uz, blogImage3Uz];
    }
  }, [currentLanguage]);
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
              {t('blog.backToHome')}
            </Link>
          </div>
        </div>
        
        <div className="blog-post-content-wrapper">
          <div className="container">
            <h1 className="blog-title">{t('blog.title')}</h1>
          
          <div className="blog-list">
            <div 
              className="blog-card" 
              onClick={() => handleBlogCardClick('maslahatlar')}
            >
              <img
                src={blogImages[0]}
                alt="Blog post image"
                className="blog-image" 
              />
              <div className="blog-content">
                <div className="blog-date">{t('blog.posts.post1.date')}</div>
                <h2 className="blog-card-title">{t('blog.posts.post1.title')}</h2>
                <div className="blog-meta">
                  <span className="blog-read-time">{t('blog.posts.post1.readTime')} {t('blog.readTime')}</span>
                  <span className="blog-category">{t('blog.category')}</span>
                </div>
              </div>
            </div>
            
            <div 
              className="blog-card" 
              onClick={() => handleBlogCardClick('kochirish-jarayoni')}
            >
              <img
                src={blogImages[1]}
                alt="Blog post image"
                className="blog-image" 
              />
              <div className="blog-content">
                <div className="blog-date">{t('blog.posts.post2.date')}</div>
                <h2 className="blog-card-title">{t('blog.posts.post2.title')}</h2>
                <div className="blog-meta">
                  <span className="blog-read-time">{t('blog.posts.post2.readTime')} {t('blog.readTime')}</span>
                  <span className="blog-category">{t('blog.category')}</span>
                </div>
              </div>
            </div>
            
            <div 
              className="blog-card" 
              onClick={() => handleBlogCardClick('vaqt-jadvali')}
            >
              <img
                src={blogImages[2]}
                alt="Blog post image" 
                className="blog-image" 
              />
              <div className="blog-content">
                <div className="blog-date">{t('blog.posts.post3.date')}</div>
                <h2 className="blog-card-title">{t('blog.posts.post3.title')}</h2>
                <div className="blog-meta">
                  <span className="blog-read-time">{t('blog.posts.post3.readTime')} {t('blog.readTime')}</span>
                  <span className="blog-category">{t('blog.category')}</span>
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
