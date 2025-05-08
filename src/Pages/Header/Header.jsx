import React from 'react'
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
          <a href="/#">Asosiy</a>
          <a href="/#">Xizmatlar</a>
          <a href="/#">Natijalar</a>
          <a href="/#">Blog</a>
        <Button text="Bog'lanish" link="/#" />
         
        </nav>

       

        
        </div>
      </div>
    </header>
  )
}

export default Header
