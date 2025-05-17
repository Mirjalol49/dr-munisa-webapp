import React from 'react'
import logo from '../../assets/Images/logo.png'
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
            <a href="https://t.me/mirjalol_shamsiddinov" className="telegram-link" target="_blank" rel="noopener noreferrer">Developed by @mirjalol_shamsiddinov</a>
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
