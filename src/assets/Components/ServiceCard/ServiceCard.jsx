import React from 'react'
import "./ServiceCard.css"
import Up from "../../Images/up.svg"
import { useModal } from '../../../context/ModalContext'
const ServiceCard = ({img, title, text}) => {
  const { openModal } = useModal();
  
  return (
    <div className='card-wrapper reveal reveal-slide-up'>
        <img className="card-img" src={img} width={180} height={"auto"}></img>
      <div className="card-content">
        <div className="card-context-wrapper">
        <h3 className='card-title'>{title}</h3>
        <p className='card-text'>{text}</p>
        </div>
        <button className="card-btn" onClick={openModal}>
          <img src={Up} alt="up icon" width={50} height={"auto"} />
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
