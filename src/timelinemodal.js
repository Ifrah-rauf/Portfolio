// TimelineModal.jsx (React Chrono + Modal + Vertical Alternating Timeline)
import React from 'react';
import { Chrono } from 'react-chrono';
import './timelinemodal.css';
import gr3 from './static/gr3.png'
import gr2 from './static/gr2.png'
import gr1 from './static/gr1.png'
// import c1 from './static/c1';
// import c2 from './static/c2';

const timelineItems = [
  {
    title: 'June 2025',
    cardTitle: 'Graduation Complete!',
    cardSubtitle: 'VIPS-VSIT BCA (Batch 2022-25)',
    cardDetailedText: (
      <>
        <p>Joined VSIT to pursue BCA in November 2022, and passed out with CGPA 9.25, Rank 8.</p>
        {/* your mini box */}
        <div style={{
          border: '1px dashed #888',
          backgroundColor: '#f7f7f7',
          marginTop: '10px',
          padding: '8px',
          borderRadius: '8px',
          fontSize: '0.8rem'
        }}>
          <strong>Feb-April 2024: NPTEL Certification</strong><br/>
          Silver Medal in Enhancing Soft Skills and Personality [IIT Kanpur]
        </div>
        <div style={{
          border: '1px dashed #888',
          backgroundColor: '#f7f7f7',
          marginTop: '10px',
          padding: '8px',
          borderRadius: '8px',
          fontSize: '0.8rem'
        }}>
          <strong>July-Sept 2023: NPTEL Certification</strong><br/>
          In Programming, Data Structures And Algorithms Using Python. [IIT Madras]
        </div>
      </>
      
    ),
    media: {
      type: 'IMAGE',
      source: {
        url: gr1
      }
    }
  },
  {
    title: 'March 2022',
    cardTitle: 'School Passed!',
    cardSubtitle: 'Completed 14 years of schooling',
    cardDetailedText: 'Secured 95.6% in 12th Boards and stood as a scholar! I only half missed my school...',
    media: {
      type: 'IMAGE',
      source: {
        url: gr2
      }
    }
  },
  {
    title: 'March 2020',
    cardTitle: 'Cleared 10th Boards',
    cardSubtitle: 'I secured 93.4%',
    cardDetailedText: "Even if you don't believe hose exams, specially science, were actually tough, making my 93.4%  one of the best scores...",
    media: {
      type: 'IMAGE',
      source: {
        url: gr3
      }
    }
  },  
 
];

const TimelineModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="timeline-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="timeline-heading">Academics</h2>
        <Chrono
          items={timelineItems}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: '#ffd447',
            secondary: '#1c1c1c',
            cardBgColor: '#ffffff',
            cardForeColor: '#333333',
            titleColor: '#000000',
          }}
          slideShow
          // cardHeight={200}
        />
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default TimelineModal;
