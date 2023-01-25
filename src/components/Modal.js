import React from 'react';
import "../styles/Modal.css"
const Modal = ({toggleModal,setToggleModal}) => {
     
     const divStyle = { 
          display: toggleModal ? 'block' : 'none'
     };
     function closeModal(e) {
        e.stopPropagation()
        setToggleModal(false)
     }
     return (
       <div 
         className="modal"
         onClick={ closeModal }
         style={divStyle} >
          <div 
             className="modal-content"
             onClick={ e => e.stopPropagation() } >
             <span 
                 className="close"
                 onClick={ closeModal }>
                <img className='close-button' src={require("../assets/images/close_btn.png")} alt="" />
             </span>
          </div>
       </div>
     );
}
export default Modal;