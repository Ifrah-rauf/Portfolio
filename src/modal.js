import React from 'react';
import './modal.css';

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content hide-scrollbar" onClick={(e) => e.stopPropagation()}
        style={{backgroundColor:"rgb(51, 51, 51);",borderRadius:"10px",
          width:"600px"
        }}>
        <button className="close-button" onClick={onClose}><b>x</b></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
