import React from 'react';
import './openartmodal.css'
const OpenModal = ({ onClose, title, children }) => {
    const currentTime = new Date().toLocaleTimeString();

    return (
        <div className="artOverlay" onClick={onClose}>
          <div className="artContainer" onClick={(e) => e.stopPropagation()}>
            <div className="artHeader">
                {/* <img src={{explorericon}} /> */}
                <span>{title}</span>
                <button onClick={onClose} className="fxCloseBtn">✕</button>
            </div>
            <div className="artBody hide-scrollbar">
            {children}
            </div>

      </div>
    </div>
  );
};

export default OpenModal;
