import React, { useState } from 'react';
import Modal from './modal';
import TrueFocus from './TrueFocus';
import MailModal from './MailModal';
import FileModal from './filexpmodal';
import Aboutpdf from './aboutpdf';
import myphoto from './static/my.PNG';
import insta from './static/insta.png';
import linkedin from './static/linkedin.png';
import gmail from './static/gmail.png';
import yt from './static/yt.png';
import abouticon from './static/aboutmefile.png'
import explorericon from './static/explorer.png'
import './App.css';
import './index.css';

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>
function App() {
  const [mailOpen, setMailOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filesshowModal, filessetShowModal] = useState(false);
  return (
    <>
    <div className="bg">
      <div className="page">
        <div className="body">
          <div className="folders">
            <a  href="#" onClick={(e) => { e.preventDefault(); filessetShowModal(true); }} class="desktop-only">
              <img src={explorericon} className="imgf"></img>Explore</a>
              {filesshowModal && (
                <FileModal onClose={() => filessetShowModal(false)} />
              )}

              <a href="#" onClick={(e) => { e.preventDefault(); setShowModal(true); }} class="desktop-only">
                <img src={abouticon} className="imgf"></img>About Me</a>
                {showModal && (
                  <Modal onClose={() => setShowModal(false)}>
                    <Aboutpdf />
                  </Modal>
                )}
           
          </div>
          <div className="imgdiv">
            <div className="headings">
              
            <TrueFocus 
              sentence="hello World"
              manualMode={false}
              blurAmount={5}
              borderColor="white"
              animationDuration={2}
              pauseBetweenAnimations={1.5}
              />
              <p className="subhead">This is Ifrah's workspace</p>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
            <img src={myphoto} className="img" alt="Ifrah" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="lowerD" style={{zIndex:"500"}}>
        
        <div className="iconlist">
              <a  href="#" onClick={(e) => { e.preventDefault(); filessetShowModal(true); }} class="mobile-only">
                <img src={explorericon} class="iconimg"></img></a>
              {filesshowModal && (
                <FileModal onClose={() => filessetShowModal(false)} />
              )}

              <a href="#" onClick={(e) => { e.preventDefault(); setShowModal(true); }} class="mobile-only">
                <img src={abouticon} class="iconimg"></img></a>
              {showModal && (
                  <Modal onClose={() => setShowModal(false)}>
                    <Aboutpdf />
                  </Modal>
              )}
              <a href={"https://www.instagram.com/ifrah_canvas/"} target="_blank"><img src={insta} class="iconimg"></img></a>
              <a href={"https://www.linkedin.com/in/ifrah-rauf-633274294/"} target="_blank"><img src={linkedin} class="iconimg"></img></a>
              <a href={"https://www.youtube.com/@ifrahteachestech"} target="_blank"><img src={yt} class="iconimg"></img></a>
              <button onClick={() => setMailOpen(true)} className="mailButton">
                <img src={gmail} class="iconimg" alt="Gmail Icon" />
              </button>
              <MailModal isOpen={mailOpen} onClose={() => setMailOpen(false)} />

        </div>
      </div>
    </div>
          
    </>
  );
}

export default App;
