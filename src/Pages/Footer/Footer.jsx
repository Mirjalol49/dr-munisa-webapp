import React from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/Images/logo.png'
// Import social media icons
import telegramIcon from '../../assets/Images/telegram-svgrepo-com.svg'
import instagramIcon from '../../assets/Images/instagram-svgrepo-com.svg'
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
          <div className="footer-links">
            <a href="#hero">{t('footer.home')}</a>
            <a href="#services">{t('footer.services')}</a>
            <a href="#results">{t('footer.results')}</a>
            <a href="#about">{t('footer.about')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
