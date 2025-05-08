import React from 'react'
import './Button.css'
const Button = ({text, link}) => {
  return (
    <a href={link} className="btn">
      {text}
    </a>
  )
}

export default Button
