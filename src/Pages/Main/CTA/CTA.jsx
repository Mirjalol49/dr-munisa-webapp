import React, { useState } from 'react'
import "./CTA.css"
import Josh from "../../../assets/Images/josh.png"
import Modal from "../Modal/Modal"

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (formData) => {
    console.log('Form submitted:', formData);
    
    const token = '8036004751:AAEQqRWhExzLjwnoW-YeETivcDsVfnwRnN4';
    const chatId = '1907166652';
    
    // Format date as DD/MM/YYYY
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const currentDate = `${day}/${month}/${year}`;
    const currentTime = new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
    
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
                   `👤 *Bemor ismi:* ${formData.name}\n`+
                   `📞 *Telefon raqami:* ${formatPhoneForDisplay(formData.phoneNumber)}\n\n`+
                   `ℹ️ Iltimos, bemor bilan bog'lanib, qabul vaqtini belgilang.`;
    
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
      });
      
      if (response.ok) {
        console.log('Message sent to Telegram successfully!');
        return Promise.resolve();
      } else {
        console.error('Error sending message to Telegram');
        return Promise.reject(new Error('Failed to send message to Telegram'));
      }
    } catch (error) {
      console.error('Error sending message:', error);
      return Promise.reject(error);
    }
  };

  return (
    <section className='cta-section'>
        <svg viewBox="0 0 1268 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-c1d6b0c-1 jdvXDt"><path d="M-41 116.5C-41 116.5 -13 144.194 42 137.5C137.685 125.854 159.556 75.8412 254.548 59.6627C341.629 44.8314 384.5 128.213 478.35 93.7384C528 75.4999 530 9.93731 623.309 11C758.5 12.5396 759.5 258.276 913.14 224.497C1014 202.323 1020.5 115.251 1079.59 93.7384C1193.37 52.3182 1273.34 196.541 1386.05 152.44" stroke="#8F7DE8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0 10"></path><path d="M-41 104.5C-41 104.5 4.762 131.18 35 127.5C130.685 115.854 159.556 64.8413 254.548 48.6627C341.629 33.8314 399.231 120.232 478.35 81.7384C523.352 59.8436 524.32 2.00029 622.309 2C774.613 1.99955 768.355 260.875 924.14 210.497C999.71 186.06 1005 108.893 1079.59 81.7384C1193.37 40.3183 1272.34 182.541 1385.05 138.44" stroke="#77F6AA" stroke-width="3"></path></svg>
     <div className="container">
        <div className="cta-wrapper">
            <div className="cta-text">
<h2 className='cta-title'>Tabiiy ko'rinishdagi soch bilan o'zingizga bo'lgan ishonchni qayta tiklang</h2>
<button className='cta-btn' onClick={handleOpenModal}>Bepul Kansultatsiya Olish</button></div>
<div className="cta-img-wrapper">
<img className='cta-img' src={Josh} alt="josh" width={280} height={"auto"}/>
</div>
        </div>
        </div>
        
        {/* Modal component */}
        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          onSubmit={handleSubmit} 
        />
    </section>
  )
}

export default CTA
