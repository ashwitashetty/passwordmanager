import React from 'react'

const Card = () => {
  return (
   <div className="card-container">
    <div className="upper-container">
  <img className='media-image' src={require("../assets/images/insta.png")} alt="social-media" />
  <div className="sub-upper-container">
    <p id="heading">Instagram</p>
    <div className="copy-container">
        <img id="copy-image" src={require("../assets/images/copy.png")} alt="" />
        <p id="copy-password">Copy Password</p>
    </div>
  </div>
    </div>
    <div className="lower-container">
     <p id="link">www.instagram.com</p>
    </div>
   </div>
  )
}

export default Card