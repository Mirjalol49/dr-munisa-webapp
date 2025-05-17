import React, { useState } from 'react'
import './Results.css' // CSS import

// Import images
// Soch images
import soch1 from '../../../assets/Images/soch1.jpg'
import soch2 from '../../../assets/Images/soch2.jpg'
import soch3 from '../../../assets/Images/soch3.jpg'
import soch4 from '../../../assets/Images/soch4.jpg'
import soch5 from '../../../assets/Images/soch5.jpg'
import soch6 from '../../../assets/Images/soch6.jpg'

// Soqol images
import soqol1 from '../../../assets/Images/soqol1.jpg'
import soqol2 from '../../../assets/Images/soqol2.jpg'
import soqol3 from '../../../assets/Images/soqol3.jpg'
import soqol4 from '../../../assets/Images/soqol4.jpg'

// Qosh images
import qosh1 from '../../../assets/Images/qosh1.jpg'
import qosh2 from '../../../assets/Images/qosh2.jpg'

// Import icons
import hairIcon from '../../../assets/Images/hair-icon.png'
import beardIcon from '../../../assets/Images/beard-icon.png'
import eyebrowIcon from '../../../assets/Images/eyebrow-icon.png'

const Results = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState('soch')

  // Image arrays for each tab
  const tabImages = {
    soch: [
      { id: 1, src: soch1, alt: 'Soch transplantatsiyasi natija 1' },
      { id: 2, src: soch2, alt: 'Soch transplantatsiyasi natija 2' },
      { id: 3, src: soch3, alt: 'Soch transplantatsiyasi natija 3' },
      { id: 4, src: soch4, alt: 'Soch transplantatsiyasi natija 4' },
      { id: 5, src: soch5, alt: 'Soch transplantatsiyasi natija 5' },
      { id: 6, src: soch6, alt: 'Soch transplantatsiyasi natija 6' },
    ],
    soqol: [
      { id: 1, src: soqol1, alt: 'Soqol transplantatsiyasi natija 1' },
      { id: 2, src: soqol2, alt: 'Soqol transplantatsiyasi natija 2' },
      { id: 3, src: soqol3, alt: 'Soqol transplantatsiyasi natija 3' },
      { id: 4, src: soqol4, alt: 'Soqol transplantatsiyasi natija 4' },
    ],
    qosh: [
      { id: 1, src: qosh1, alt: 'Qosh transplantatsiyasi natija 1' },
      { id: 2, src: qosh2, alt: 'Qosh transplantatsiyasi natija 2' },
    ],
  }

  // Handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
  }

  return (
    <section id="results" className="results-section">
      <div className="container">
        <h2 className="results-title reveal reveal-slide-up">Natijalar</h2>
        
        <div className="tab-wrapper reveal reveal-delay-1">
          <button 
            className={`tab-item ${activeTab === 'soch' ? 'active' : ''}`}
            onClick={() => handleTabClick('soch')}
          >
            <span className="tab-icon">
              <img src={hairIcon} alt="Hair icon" />
            </span>
            <span className="tab-text">Soch</span>
          </button>
          
          <button 
            className={`tab-item ${activeTab === 'soqol' ? 'active' : ''}`}
            onClick={() => handleTabClick('soqol')}
          >
            <span className="tab-icon">
              <img src={beardIcon} alt="Beard icon" />
            </span>
            <span className="tab-text">Soqol</span>
          </button>
          
          <button 
            className={`tab-item ${activeTab === 'qosh' ? 'active' : ''}`}
            onClick={() => handleTabClick('qosh')}
          >
            <span className="tab-icon">
              <img src={eyebrowIcon} alt="Eyebrow icon" />
            </span>
            <span className="tab-text">Qosh</span>
          </button>
        </div>

        <div className='images-container reveal reveal-delay-2'>
          {tabImages[activeTab].map((image, index) => (
            <div className={`image-wrapper reveal reveal-delay-${index + 1}`} key={image.id}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results
