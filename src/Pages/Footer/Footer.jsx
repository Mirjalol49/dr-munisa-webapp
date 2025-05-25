import React from 'react'
import logo from '../../assets/Images/logo.png'
// Import social media icons
import telegramIcon from '../../assets/Images/telegram-svgrepo-com.svg'
import instagramIcon from '../../assets/Images/instagram-svgrepo-com.svg'
// CSS styles
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <a href="/#" className="logo-container">
              <img src={logo} alt="logo dimond" width={60} height={"auto"} />
            </a>
            <p>© {new Date().getFullYear()} Dr. Munisa. Barcha huquqlar himoyalangan.</p>
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
            <a href="https://t.me/mirjalol_shamsiddinov" className="developer-link" target="_blank" rel="noopener noreferrer">Developed by @mirjalol_shamsiddinov</a>
          </div>
          <div className="footer-links">
            <a href="#hero">Asosiy</a>
            <a href="#services">Xizmatlar</a>
            <a href="#results">Natijalar</a>
            <a href="#about">Haqida</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
