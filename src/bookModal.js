import React from 'react';
import './bookModal.css';

const bookModal = ({ onClose, children }) => {
  return (
    <div className="book-modal-overlay" onClick={onClose}>
      <div className="book-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
};

export default bookModal;
