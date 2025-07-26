import './aboutpdf.css';
import a1 from './static/about1.png';
import s4 from './static/sticker4.png';
import s5 from './static/sticker5.png';
import q from './static/quote.png';
import multi from './static/multi.PNG';
import pin from './static/pin.png';
// PdfPage.js
import React from 'react';
const PdfPage = () => {
  return (
    <div className="pdf-page">
      <div className="pdf-content">
        <main className="pdf-body">
            <div className="section1">
                <p><span>hi, my name is<br /></span>
                    IFRAH RAUF</p>
                    <div className="section2">
            <div className="boxes">
                    •Developer
                </div>
                <div className="boxes">
                    •Artist
                </div>
            </div>
                <div className=" blobshape">
                    
                <img className="a1" src={a1}></img>
                <img className="s1" src={s5}></img>
                </div>
                
                <div className="blob2"></div>
            </div>
            
            <div className="section3 sticky-note">
            <span style={{color:"white"}}>Hello people! I am Ifrah Rauf, an IT graduate, passionate learner and creativity hunter. Currently pursuing MCA from IGDTUW, I have completed my graduation in Bachelor’s of Computer Application (2022-25) from prominent institute VIPS, Delhi.
            Looking forward towards my goals and dreams. </span>
            </div>
            <img src={multi} className="multi"/>
            <div className="section4 sticky-note2">
            <span style={{color:"white"}}>Innovation, art, and creation are nerves of my brains. I will die the day I stop learning and creating. </span>
            </div>
            <img src={multi} className="multi2"/>
            <div className="section5">
                here goes my favorite quote~<br/>
            <img className="q" src={q}></img>
            
            <span>People have only as much liberty as they have the intelligence to want and the courage to take.”
            — Emma Goldman</span>

            <img className="q2" src={q}></img>
            </div>
          
            
        </main>
      </div>
    </div>
  );
};

export default PdfPage;
