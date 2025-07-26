import React from 'react';

const OpenModal = ({ onClose, title, children }) => {
    const currentTime = new Date().toLocaleTimeString();

    return (
        <div className="fxModalOverlay" onClick={onClose}>
          <div className="fxModalContainer" onClick={(e) => e.stopPropagation()}>
            <div className="fxModalHeader">
                {/* <img src={{explorericon}} /> */}
                <span>{title}</span>
                <button onClick={onClose} className="fxCloseBtn">✕</button>
            </div>
            <div className="fxModalBody">
            {children}
            </div>
            <div className="fxModalFooter">
                <span>Recent</span>
                <span>File Explorer</span>
                <span>{currentTime}</span>
                <span>PC/users/Desktop</span>
            </div>
      </div>
    </div>
  );
};

export default OpenModal;
