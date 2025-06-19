import React from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/Images/logo.png'
// Import social media icons
import telegramIcon from '../../assets/Images/telegram-svgrepo-com.svg'
import instagramIcon from '../../assets/Images/instagram-svgrepo-com.svg'
import phoneIcon from '../../assets/Images/phone-icon.svg'
import clockIcon from '../../assets/Images/clock-icon.svg'
import locationIcon from '../../assets/Images/location-icon.svg'
// CSS styles
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <a href="/#" className="logo-container">
              <img src={logo} alt="logo dimond" width={60} height={"auto"} />
            </a>
            <p>© {new Date().getFullYear()} Dr. Munisa. {t('footer.rights')}</p>
            <div className="social-links">
              <a href="https://t.me/DocMunisa" className="social-link telegram" target="_blank" rel="noopener noreferrer">
                <img src={telegramIcon} alt="Telegram" width={24} height={24} />
                @DocMunisa
              </a>
              <a href="https://instagram.com/dr.trixolog_munisa" className="social-link instagram" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" width={24} height={24} />
                dr.trixolog_munisa
              </a>
            </div>
            <a href="https://t.me/mirjalol_shamsiddinov" className="developer-link" target="_blank" rel="noopener noreferrer">{t('footer.developer')} @mirjalol_shamsiddinov</a>
          </div>
          
          <div className="footer-info">
            <div className="contact-info">
              <h3>{t('footer.contactInfo')}</h3>
              <div className="info-item">
                <img src={phoneIcon} alt="Phone" width={18} height={18} />
                <a href="tel:+998949590000">+998 94 959 00 00</a>
              </div>
              
              <div className="info-item">
                <img src={clockIcon} alt="Hours" width={18} height={18} />
                <div className="hours-container">
                  <p>{t('footer.workDays')}: 9:00 - 18:00</p>
                  <p>{t('footer.weekend')}: {t('footer.closed')}</p>
                </div>
              </div>
              
              <div className="info-item">
                <img src={locationIcon} alt="Location" width={18} height={18} />
                <a href="https://www.google.com/maps?q=41.250834,69.323412" target="_blank" rel="noopener noreferrer">
                  {t('footer.address')}
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h3>{t('footer.quickLinks')}</h3>
              <a href="#hero">{t('footer.home')}</a>
              <a href="#services">{t('footer.services')}</a>
              <a href="#results">{t('footer.results')}</a>
              <a href="#about">{t('footer.about')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
