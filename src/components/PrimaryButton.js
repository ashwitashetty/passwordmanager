import React from 'react'
import '../styles/PrimaryButton.css'
const PrimaryButton = ({placeholder}) => {
  return (
    <div className="button-container">
        <input className='input-box holder-style' placeholder={placeholder}/>
    </div>
  )
}

export default PrimaryButton