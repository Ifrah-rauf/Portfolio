// FileXpModal.js
import React, { useState } from 'react';
import Modal from './modal';
import Projects from './projects';
import OpenModal from './openmodal';
import Aboutpdf from './aboutpdf';
import abouticon from './static/aboutmefile.png'
import explorericon from './static/explorer.png'
import projectsicon from './static/projects.png'
import acadicon from './static/acad.png'
import achieveicon from './static/achieve.png'
import expicon from './static/exp.png'
import excicon from './static/extrac.png'
import Folder from './Folder'
import TimelineModal from './timelinemodal'
import Expcards from './expcards'
import AchTimelineModal from './achtimeline'
import Pursuits from './pursuits'
import './filexp.css';

const FileXpModal = ({ onClose, children }) => {
    const [showModal, setShowModal] = useState(false);
    const [projectModal, setprojectModal] = useState(false);
    const [expModal, setexpModal] = useState(false);
    const [showTimeline, setShowTimeline] = useState(false);
    const [showachTimeline, setShowachTimeline] = useState(false);
    const [showp, setShowp] = useState(false);
    const currentTime = new Date().toLocaleTimeString();
  return (
    <div className="fxModalOverlay" onClick={onClose}>
      <div className="fxModalContainer" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="fxModalHeader">
          {/* <img src={{explorericon}} /> */}
          <span>File Explorer</span>
          <button onClick={onClose} className="fxCloseBtn">✕</button>
        </div>

        {/* Body (children passed here) */}
        <div className="fxModalBody">
          <div className="iconBox">            
            <div className="folder-wrapper">
              <a className="resta"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setprojectModal(true);
                }}
              >
                <Folder size={0.4} color="#ffd447" className="custom-folder" />
              </a>
              <span className="folder-label">Projects</span>
              {projectModal && (
                <OpenModal onClose={() => setprojectModal(false)} title="Projects">
                  <Projects />
                </OpenModal>
              )}
            </div>

            <div className="folder-wrapper">
              <a
                className="resta"
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // prevents page jump due to href="#"
                  setShowTimeline(true);
                }}
              >
                <Folder size={0.4} color="#ffd447" className="custom-folder" />
              </a>
              <span className="folder-label">Academics</span>

              {/* Timeline Modal */}
              <TimelineModal
                isOpen={showTimeline}
                onClose={() => setShowTimeline(false)}
              />
            </div>

            <div className="folder-wrapper">
              <a
                className="resta"
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // prevents page jump due to href="#"
                  setShowachTimeline(true);
                }}
              >
                <Folder size={0.4} color="#ffd447" className="custom-folder" />
              </a>
              <span className="folder-label">Achievements</span>
              {/* Timeline Modal */}
              <AchTimelineModal 
                isOpen={showachTimeline}
                onClose={() => setShowachTimeline(false)}
              />
            </div>

            <div className="folder-wrapper">
              <a className="resta"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setexpModal(true);
                }}
              >
                <Folder size={0.4} color="#ffd447" className="custom-folder" />
              </a>
              <span className="folder-label">Experience</span>
              {expModal && (
                <OpenModal onClose={() => setexpModal(false)} title="Experience">
                  <Expcards />
                </OpenModal>
              )}
            </div>
            
            <div className="folder-wrapper">
              <a className="resta"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowp(true);
                }}
              >
                <Folder size={0.4} color="#ffd447" className="custom-folder" />
              </a>
              <span className="folder-label-about extrac">Pursuits</span>
              {showp && (
                <OpenModal onClose={() => setShowp(false)} title="Pursuits">
                  <Pursuits onClose={() => setShowp(false)} />
                </OpenModal>
              )}
            </div>
            {/* <a href={""}><img src={acadicon}  className="fximg"></img><span className="ispan">Academics</span></a>
            <a href={""}><img src={achieveicon}  className="fximg"></img><span className="ispan">Achievements</span></a>
            <a href={""}><img src={expicon}  className="fximg"></img><span className="ispan">Experience</span></a>
            <a href={""}><img src={excicon}  className="fximg"></img><span className="ispan">Extra-Cirriculurs</span>    </a> */}
          </div>
        </div>
        <hr style={{ margin: 0, marginTop:'22px', padding: 0, border: '0.5px solid grey' }} />
        {/* <div className="recents">

        </div> */}
        {/* Footer */}
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

export default FileXpModal;
