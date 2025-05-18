import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Images/logo.png'
import Button from '../../assets/Components/Btn/Button'
import './Header.css'
const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-wrapper">
        <a href="/#">
        <img src={logo} alt="logo dimond" width={80} height={"auto"} />
        </a>
        <nav className='header-nav'>
          <a href="#hero">Asosiy</a>
          <a href="#services">Xizmatlar</a>
          <a href="#results">Natijalar</a>
          <Link to="/blog" style={{color: 'inherit', textDecoration: 'none'}}>Blog</Link>
       
        <a href="tel:+998949590000" className='header-btn' >BOG'LANISH</a>
         
        </nav>

       

        
        </div>
      </div>
    </header>
  )
}

export default Header
