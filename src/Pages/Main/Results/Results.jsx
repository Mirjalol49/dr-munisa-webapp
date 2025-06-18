import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import ImageLoader from '../../../components/ImageLoader'
import './Results.css' // CSS import

const Results = () => {
  const { t } = useTranslation();
  // State to track active tab
  const [activeTab, setActiveTab] = useState('soch');
  const [displayedImages, setDisplayedImages] = useState([]);
  const previousTabRef = useRef('soch');

  // Image arrays for each tab using useMemo to prevent unnecessary re-renders
  const tabImages = useMemo(() => ({
    soch: [
      { id: 1, src: '/images/soch1.jpg', alt: `${t('results.hairAlt')} 1` },
      { id: 2, src: '/images/soch2.jpg', alt: `${t('results.hairAlt')} 2` },
      { id: 3, src: '/images/soch3.jpg', alt: `${t('results.hairAlt')} 3` },
      { id: 4, src: '/images/soch4.jpg', alt: `${t('results.hairAlt')} 4` },
      { id: 5, src: '/images/soch5.jpg', alt: `${t('results.hairAlt')} 5` },
      { id: 6, src: '/images/soch6.jpg', alt: `${t('results.hairAlt')} 6` },
    ],
    soqol: [
      { id: 1, src: '/images/soqol1.jpg', alt: `${t('results.beardAlt')} 1` },
      { id: 2, src: '/images/soqol2.jpg', alt: `${t('results.beardAlt')} 2` },
      { id: 3, src: '/images/soqol3.jpg', alt: `${t('results.beardAlt')} 3` },
      { id: 4, src: '/images/soqol4.jpg', alt: `${t('results.beardAlt')} 4` },
    ],
    qosh: [
      { id: 1, src: '/images/qosh1.jpg', alt: `${t('results.eyebrowAlt')} 1` },
      { id: 2, src: '/images/qosh2.jpg', alt: `${t('results.eyebrowAlt')} 2` },
    ],
  }), [t]);

  // Set initial images on component mount
  useEffect(() => {
    console.log('Initial images:', tabImages.soch);
    setDisplayedImages(tabImages.soch);
  }, [tabImages.soch]);

  // Update displayed images when tab changes
  useEffect(() => {
    // Get new tab's images
    const newTabImages = tabImages[activeTab];
    
    // Create a copy of the new tab's images
    let imagesToShow = [...newTabImages];
    
    // We no longer add placeholders - we'll just show the actual images
    
    setDisplayedImages(imagesToShow);
    previousTabRef.current = activeTab;
  }, [activeTab, tabImages]);

  // Handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <section id="results" className="results-section">
      <div className="container">
        <h2 className="results-title reveal reveal-slide-up">{t('results.title')}</h2>
        
        <div className="tab-wrapper reveal reveal-delay-1">
          <button 
            className={`tab-item ${activeTab === 'soch' ? 'active' : ''}`}
            onClick={() => handleTabClick('soch')}
          >
            <span className="tab-icon">
              <img src="/images/hair-icon.png" alt="Hair icon" />
            </span>
            <span className="tab-text">{t('results.hair')}</span>
          </button>
          
          <button 
            className={`tab-item ${activeTab === 'soqol' ? 'active' : ''}`}
            onClick={() => handleTabClick('soqol')}
          >
            <span className="tab-icon">
              <img src="/images/beard-icon.png" alt="Beard icon" />
            </span>
            <span className="tab-text">{t('results.beard')}</span>
          </button>
          
          <button 
            className={`tab-item ${activeTab === 'qosh' ? 'active' : ''}`}
            onClick={() => handleTabClick('qosh')}
          >
            <span className="tab-icon">
              <img src="/images/eyebrow-icon.png" alt="Eyebrow icon" />
            </span>
            <span className="tab-text">{t('results.eyebrow')}</span>
          </button>
        </div>

        <div className='images-container'>
          {displayedImages.length > 0 ? (
            displayedImages.map((image) => (
              <div className="image-wrapper" key={image.id}>
                <ImageLoader 
                  src={image.src} 
                  alt={image.alt} 
                  className="result-image"
                  style={{ width: '100%', height: 'auto', position: 'relative' }}
                />
              </div>
            ))
          ) : (
            <div className="no-images-message">{t('results.noImages')}</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Results
