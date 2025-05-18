import React, { useState } from 'react'
import "./Faq.css" // CSS import
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Davolanish qancha vaqt davom etadi?",
      answer: "Davolanish muddati har bir bemorning holatiga qarab belgilanadi. O'rtacha kurs 7-14 kun davom etadi, ammo murakkab holatlarda bu muddat uzaytirilishi mumkin."
    },
    {
      question: "Davolanish uchun qanday hujjatlar kerak?",
      answer: "Pasport, tibbiy sug'urta polisi va mavjud bo'lsa, oldingi tekshiruvlar natijalari talab qilinadi. Chet el fuqarolari uchun viza va ro'yxatdan o'tish hujjatlari ham zarur."
    },
    {
      question: "Davolanish paytida ovqatlanish qanday tashkil etiladi?",
      answer: "Klinikamizda bemorlar uchun maxsus parhez ovqatlar tayyorlanadi. Har bir bemor uchun individual tarzda tuzilgan ovqatlanish rejimi taqdim etiladi."
    },
    {
      question: "Davolanish narxlari qanday?",
      answer: "Narxlar ko'rsatiladigan xizmatlar va davolanish muddatiga qarab farqlanadi. Aniq narxlarni bilish uchun klinikamizga murojaat qilishingiz mumkin."
    },
    {
      question: "Davolanishdan oldin qanday tayyorgarlik ko'rish kerak?",
      answer: "Davolanishdan oldin shifokor tomonidan belgilangan barcha tekshiruvlardan o'tish va tavsiya etilgan dori-darmonlarni qabul qilish tavsiya etiladi."
    },
    {
      question: "Klinikada qanday mutaxassislar ishlaydi?",
      answer: "Klinikamizda yuqori malakali shifokorlar, jumladan, terapevtlar, nevrologlar, kardiologlar, fizioterapevtlar va boshqa mutaxassislar ishlaydi."
    },
    {
      question: "Davolanish paytida yaqinlarim meni ko'rgani kelishi mumkinmi?",
      answer: "Ha, belgilangan tashrif vaqtlarida yaqinlaringiz sizni ko'rgani kelishlari mumkin. Tashrif vaqtlari haqida ma'lumotni klinikamiz ma'muriyatidan olishingiz mumkin."
    },
    {
      question: "Davolanishdan keyin qanday tavsiyalarga amal qilish kerak?",
      answer: "Davolanishdan keyin shifokor tomonidan berilgan barcha tavsiyalarga qat'iy amal qilish, belgilangan vaqtda nazorat tekshiruvlariga kelish va zarur bo'lsa, parhez va jismoniy faollik rejimiga rioya qilish tavsiya etiladi."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='faq-section'>
      <div className="container">
        <h2 className='faq-title reveal reveal-slide-up'>Ko'p Beriladigan Savollar</h2>
        
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
