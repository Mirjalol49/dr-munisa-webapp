import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/Images/logo.png'
import Button from '../../assets/Components/Btn/Button'
import './Header.css'
const Header = () => {
  const location = useLocation();
  
  // Determine if we're on a blog page to apply different styling
  const isBlogPage = location.pathname.includes('/blog');
  
  return (
    <header className={`header ${isBlogPage ? 'blog-header' : ''}`}>
      <div className="container">
        <div className="header-wrapper">
          <a href="/#">
            <img src={logo} alt="logo dimond" width={80} height={"auto"} />
          </a>
          <nav className='header-nav'>
            {/* Only show these links on main page */}
            {!isBlogPage && (
              <>
                <a href="#hero" className="nav-link">Asosiy</a>
                <a href="#services" className="nav-link">Xizmatlar</a>
                <a href="#results" className="nav-link">Natijalar</a>
              </>
            )}
            
            {/* Always show blog link, but highlight when active */}
            <Link 
              to="/blog" 
              className={`nav-link ${location.pathname.includes('/blog') ? 'active' : ''}`}
            >
              Blog
            </Link>
           
            <a href="tel:+998949590000" className='header-btn'>BOG'LANISH</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
