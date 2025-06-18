import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import "./Faq.css" // CSS import
const Faq = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = t('faq.questions', { returnObjects: true });

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='faq-section'>
      <div className="container">
        <h2 className='faq-title reveal reveal-slide-up'>{t('faq.title')}</h2>
        
        <div className="faq-container reveal reveal-delay-1">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item${index + 1} ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
