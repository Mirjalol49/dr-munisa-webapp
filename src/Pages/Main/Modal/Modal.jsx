import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 700); // Match this with the CSS transition time (0.6s + 0.1s delay)
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit({ name, phoneNumber });
      setShowSuccess(true);
      // Reset form
      setName('');
      setPhoneNumber('');
      // Close modal after showing success message for 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setIsSubmitting(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.');
    }
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : 'closing'}`} onClick={onClose}>
      <div className={`modal-container ${isOpen ? 'active' : 'closing'}`} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Bepul Konsultatsiya</h3>
          <button className="close-button" onClick={onClose} disabled={isSubmitting}>×</button>
        </div>
        <div className="modal-body">
          {showSuccess ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h4>Rahmat, {name}!</h4>
              <p>Sizning so'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ismingiz</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Ismingizni kiriting"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Telefon raqamingiz</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  placeholder="+998 __ ___ __ __"
                  disabled={isSubmitting}
                />
              </div>
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Yuborilmoqda...' : 'Yuborish'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
