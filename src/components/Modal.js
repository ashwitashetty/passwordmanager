import React from "react";
import "../styles/Modal.css";
import ButtonFilled from "../components/ButtonFilled";
import OutlinedButton from "./OutlinedButton";
import TextInput from "./TextInput";
const Modal = ({ toggleModal, setToggleModal }) => {
  const divStyle = {
    display: toggleModal ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    setToggleModal(false);
  }
  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>
          <img
            className="close-button"
            src={require("../assets/images/close_btn.png")}
            alt=""
          />
        </span>
        <div className="modal-container">
          <p className="main-heading">Add site</p>
          <div className="url-content">
            <p className="url">URL</p>
            <TextInput />
          </div>
          <div className="site-sector-container">
            <div className="site-content">
              <p className="site">Site Name</p>
              <TextInput />
            </div>
            <div className="sector-content">
              <p className="sector">Sector/Folder</p>
              <TextInput />
            </div>
          </div>
          <div className="user-site-container">
            <div className="user-name-content">
              <p className="user-name">User Name</p>
              <TextInput />
            </div>
            <div className="site-password-content">
              <p className="site-password">Site Password</p>
              <TextInput />
            </div>
          </div>
          <div className="notes-content">
            <p className="notes">Notes</p>
            {/* <TextInput /> */}
            <textarea className="notes-area"></textarea>
          </div>
          <div className="button-container">
            <OutlinedButton />
            <ButtonFilled />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
