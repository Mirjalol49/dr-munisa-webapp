import React from 'react'
import "./Input.css"
const Input = ({labelName,type }) => {
  return (
<form class="formField">
  <input required type={type} />
  <span>{labelName}</span>
</form>

  )
}

export default Input
