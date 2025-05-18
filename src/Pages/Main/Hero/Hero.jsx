import React, { useState } from 'react'
import "./Hero.css"
import HeroImg from "../../../assets/Images/hero.png"
import HeroInvert from "../../../assets/Images/heroinvert.png"
import Input from '../../../assets/Components/Input/Input'
import Button from '../../../assets/Components/Btn/Button'
const Hero = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [formattedPhone, setFormattedPhone] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  
  const handlePhoneChange = (e) => {
    // Remove all non-digit characters
    const inputValue = e.target.value.replace(/\D/g, '')
    
    // Store raw digits for submission
    setPhone(inputValue)
    
    // Format the phone number with spaces
    if (inputValue.length > 0) {
      let formatted = ''
      
      // Format: XX XXX XX XX
      for (let i = 0; i < inputValue.length && i < 9; i++) {
        if (i === 2 || i === 5 || i === 7) {
          formatted += ' '
        }
        formatted += inputValue[i]
      }
      
      setFormattedPhone(formatted)
    } else {
      setFormattedPhone('')
    }
  }
  
  const sendToTelegram = async (e) => {
    // Prevent default behavior (scrolling to top)
    e.preventDefault();
    if (!name) {
      setErrorMessage('Iltimos, ismingizni kiriting')
      setShowError(true)
      setTimeout(() => setShowError(false), 6000)
      return
    }
    
    if (!phone || phone.length < 9) {
      setErrorMessage('Telefon raqami kamida 9 ta raqamdan iborat bo\'lishi kerak')
      setShowError(true)
      setTimeout(() => setShowError(false), 6000)
      return
    }
    
    setIsLoading(true)
    
    const token = '8036004751:AAEQqRWhExzLjwnoW-YeETivcDsVfnwRnN4'
    const chatId = '1907166652' // Replace with your actual chat ID
    // Format date as DD/MM/YYYY
    const now = new Date()
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = now.getFullYear()
    const currentDate = `${day}/${month}/${year}`
    const currentTime = new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })
    
    // Format phone number with spaces for better readability
    const formatPhoneForDisplay = (phoneNumber) => {
      let formatted = '';
      
      // Format: XX XXX XX XX
      for (let i = 0; i < phoneNumber.length; i++) {
        if (i === 2 || i === 5 || i === 7) {
          formatted += ' ';
        }
        formatted += phoneNumber[i];
      }
      
      return formatted;
    };
    
    // Message in Uzbek with emojis
    const message = `🏥 *YANGI QABULGA YOZILISH* 🏥\n\n`+
                   `📋 *Sana:* ${currentDate}\n`+
                   `🕒 *Vaqt:* ${currentTime}\n\n`+
                   `👤 *Bemor ismi:* ${name}\n`+
                   `📞 *Telefon raqami:* ${formatPhoneForDisplay(phone)}\n\n`+
                   `ℹ️ Iltimos, bemor bilan bog'lanib, qabul vaqtini belgilang.`
    
    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      })
      
      if (response.ok) {
        setName('')
        setPhone('')
        setFormattedPhone('')
        setShowModal(true)
        // Auto-close the modal after 3 seconds
        setTimeout(() => {
          setShowModal(false)
        }, 3000)
      } else {
        alert('Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.')
    } finally {
      setIsLoading(false)
    }
  }
  
  const closeModal = () => {
    setShowModal(false)
  }
  
  return (
    <section id="hero" className='hero-section reveal reveal-slide-up'>

      
      {showModal && (
        <div className="success-modal-overlay">
          <div className="success-modal">
            <div className="success-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="#334bff" fillOpacity="0.1"/>
                {/* Medical Contact Icon */}
                <path d="M32 16C23.164 16 16 23.164 16 32C16 40.836 23.164 48 32 48C40.836 48 48 40.836 48 32C48 23.164 40.836 16 32 16Z" stroke="#334bff" strokeWidth="2.5" fill="none"/>
                <path d="M32 24V40" stroke="#334bff" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M24 32H40" stroke="#334bff" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M40 22C40 22 42 24 44 24C46 24 48 22 48 22" stroke="#334bff" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 22C16 22 18 24 20 24C22 24 24 22 24 22" stroke="#334bff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Xabar yuborildi!</h3>
            <p>Tabriklaymiz! Sizning xabaringiz muvaffaqiyatli yuborildi. Biz siz bilan tez orada bog'lanamiz.</p>
            <button onClick={closeModal} className="modal-close-btn">Yopish</button>
          </div>
        </div>
      )}
   <div className="container">
    <div className="hero-wrapper">
      <div className="hero-content-wrapper">
        <img className='hero-invert reveal reveal-delay-1' src={HeroInvert} alt="heroinvert" width={100} height={"auto"}/>
        <h1 className='hero-title reveal reveal-delay-2'>Sochlaringiz To'kiliyaptimi?</h1>
    <p className='hero-text reveal reveal-delay-3'>Biz xavfsiz va samarali, tibbiy jihatdan tasdiqlangan soch tiklash
muolajalarini taklif qilamiz. Ular tabiiy ko'rinish va uzoq muddatli
natijalarni ta'minlaydi, ishonchingizni qayta tiklaydi.</p>
        
      </div>
      <img src={HeroImg} alt="doctor" width={520} height={"auto"} className="reveal reveal-delay-4" />
    </div>

   <div className='book-content'>
    <h2 className='book-title '>Qabulga yozilish!</h2>
        <div className="book-wrapper">
            <div className="formField ">
              <input required type="text" value={name} onChange={handleNameChange} />
              <span>Ismingiz</span>
            </div>
            <div className="formField">
              <input 
                required 
                type="text" 
                inputMode="numeric" 
                value={formattedPhone} 
                onChange={handlePhoneChange}
              />
              <span>Telefon Raqamingiz</span>
            </div>
            
            {showError && (
              <div className="form-error-message">
                <p>{errorMessage}</p>
              </div>
            )}
            
            <a href='javascript:void(0)' className='hero-btn' onClick={sendToTelegram} disabled={isLoading}>
              {isLoading ? 'YUBORILMOQDA...' : 'YUBORISH'}
            </a>

        </div>

        </div>
    
   </div>
    </section>
  )
}

export default Hero
