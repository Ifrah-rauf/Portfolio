import React, { useState } from 'react';
import Folder from './Folder'
import './filexp.css';
import BookModal from './bookModal';
import Openartmodal from './openartModal';
import Art from './art';
import Poembook from './poembook';
import './pursuits.css';
const Pursuits = ({ onClose, children }) => {
    const [showartModal, setShowartModal] = useState(false);
    const [showpoemModal, setShowpoemModal] = useState(false);
    const currentTime = new Date().toLocaleTimeString();
  return (
    <div className="fxModalOverlay" onClick={onClose}>
      <div className="fxModalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="fxModalHeader">

          <span>Pursuits</span>
          <button onClick={onClose} className="fxCloseBtn">✕</button>
        </div>

        <div className="fxModalBody">
          <div className="iconBox">            
            <div className="folder-wrapper">
              <a className="resta"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowartModal(true);
                }}
              >
                <Folder size={0.4} color="#ffd447" className="custom-folder" />
              </a>365
              <span className="folder-label">Art</span>
              {showartModal && (
                <Openartmodal onClose={() => setShowartModal(false)} title="Welcome To my Art Gallery!">
                  <Art />
                </Openartmodal>
              )}
            </div>
            <div className="folder-wrapper">
              <a className="resta"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowpoemModal(true);
                }}
              >
                <Folder size={0.4} color="#ffd447" className="custom-folder" />
              </a>365
              <span className="folder-label">Poems</span>
              {showpoemModal && (
                <BookModal onClose={() => setShowpoemModal(false)} title="Words from Poetess">
                  <Poembook />
                </BookModal>
              )}
            </div>
          </div>
        </div>
        </div>
    </div>
        );
};

export default Pursuits;