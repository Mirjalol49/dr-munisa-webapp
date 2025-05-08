import React from 'react'
import "./ServiceCard.css"
import Up from "../../Images/up.svg"
const ServiceCard = ({img, title, text}) => {
  return (
    <div className='card-wrapper'>
        <img className="card-img" src={img} width={180} height={"auto"}></img>
      <div className="card-content">
        <div className="card-context-wrapper">
        <h3 className='card-title'>{title}</h3>
        <p className='card-text'>{text}</p>
        </div>
        <a className="card-btn" href="#"><img src={Up} alt="up icon" width={50} height={"auto"} /></a>
      </div>
    </div>
  )
}

export default ServiceCard
