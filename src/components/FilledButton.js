import React from 'react'
import '../styles/FilledButton.css'

const FilledButton = ({buttonText}) => {
  return (
    <>
        <button className='filled-button inside-button'>{buttonText}</button>
    </>
  )
}

export default FilledButton