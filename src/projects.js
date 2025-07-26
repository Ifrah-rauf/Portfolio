import React, { useState } from 'react';
import CardSwap, { Card } from './CardSwap'
import './projects.css'; 
import TMBook from './tmbook';
import ELBook from './elbook';
import VVBook from './vvbook';
import BookModal from './bookModal.js';
const Projects = () => {
    const [showTMBook, setTMBook] = useState(false);
    const [showELBook, setELBook] = useState(false);
    const [showVVBook, setVVBook] = useState(false);
  return (
    // <div className="projectsContainer" >
        <div className="projectsbody" >
            <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
            >
                
                <Card className="forceAbsolute card2">
                   <div onClick={() => setVVBook(true)} style={{ cursor: 'pointer',height:"300px",width:"350px" }}></div>
                </Card>
                <Card className="forceAbsolute card1">
                    <div onClick={() => setTMBook(true)} style={{ cursor: 'pointer',height:"300px",width:"350px" }}></div>
                </Card>
                <Card className="forceAbsolute card3">
                   <div onClick={() => setELBook(true)} style={{ cursor: 'pointer',height:"300px",width:"350px" }}></div>
                </Card>
            </CardSwap>
            {showVVBook && (
        <BookModal onClose={() => setVVBook(false)}>
          <VVBook />
        </BookModal>
      )}
        {showTMBook && (
        <BookModal onClose={() => setTMBook(false)}>
          <TMBook />
        </BookModal>
      )}
      
      {showELBook && (
        <BookModal onClose={() => setELBook(false)}>
          <ELBook />
        </BookModal>
      )}
    </div>
  );
};

export default Projects;
