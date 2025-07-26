import React from 'react';
import { Chrono } from 'react-chrono';
import './timelinemodal.css';
import ach1 from './static/ach1.jpeg'
import ach2 from './static/ach2.jpeg'
import ach3 from './static/ach3.jpeg'
import ach4 from './static/ach4.jpeg'
import ach5 from './static/ach5.jpeg'
import ach6 from './static/ach6.JPG'
import ach7 from './static/ach7.jpg'
import ach8 from './static/ach8.png'
import ach9 from './static/ach9.png'
import ach10 from './static/ach10.png'

const achtimelineItems = [
    {
        title: '21 April, 2025',
        cardTitle: 'My first Exhibition!',
        cardSubtitle: "Hosted by Keshav Mahavidylaya(DU): Tryst'25",
        cardDetailedText: 'Stood 3rd and earned Cash Prize! I contributed my paintings aiming at realism. We participated as a team of three members with three different art styles and won for the creativity and richness of media.',
        media: {
          type: 'IMAGE',
          source: {
            url:ach6
          }
        }
      },
  {
    title: '5 April 2025',
    cardTitle: 'Made it under top 100 Youth India Entrepreneur!',
    cardSubtitle: 'Hosted by SBI Ideathon with IIT Delhi',
    cardDetailedText: 'Cleared Round-1 and Round-2 (Online Pitching), we qualified as top 1000 and then top 100!  ',
    media: {
      type: 'IMAGE',
      source: {
        url: ach7
      }
    }
  },
  {
    title: '26 February, 2025',
    cardTitle: 'On the Spot Painting - Anugoonj',
    cardSubtitle: 'Organized by Anugoonj, Annual GGSIPU Fest',
    cardDetailedText: 'Participated as the Anugoonj finalist, which was held at GGSIPU, Dwarka; the challenge was even tougher, with the best contestants from various colleges competing. The given theme, Starry Nights, was open to interpretation, allowing for diverse creative expressions.  ',
    media: {
      type: 'IMAGE',
      source: {
        url: ach3
      }
    }
  },
  {
    title: '25 February, 2025',
    cardTitle: '2nd Prize in Ideathon!',
    cardSubtitle: 'Hosted by Entrepreneurship Cell in Shaheed Bhagat Singh (DU)',
    cardDetailedText: 'Particpated as a team of four people, Ideating on how to digitalise indo-farming to grow exotic plants in our country, within our homes.',
    media: {
      type: 'IMAGE',
      source: {
        url: ach1
      }
    }
  },
  {
    title: '17 February, 2025',
    cardTitle: '2nd Prize in IDEA-ARENA',
    cardSubtitle: 'Hosted by in Shaheed Bhagat Singh (DU)',
    cardDetailedText: 'Commantra25 is the Annual Commerce Fest of the college, where we (team of same 4 people) participated in Idea Arena. We ideated a practical approach to healthi-fy snacks industry by promoting local vendors through "blockchain technology."',
    media: {
      type: 'IMAGE',
      source: {
        url: ach2
      }
    }
  },
  {
    title: '9 September, 2024',
    cardTitle: 'Published my first Research Paper',
    cardSubtitle: 'on Sustainable Cities and Green Technology Integretaion: Case Studies and Best Practices ',
    cardDetailedText: 'Me and my batch-mate, researched on Top 5 sustainable cities and were surprised to see efforts and measures taken by government as well as public to reduce carbon footprints and improve climate adversities. We studied to figure out and suggest what practices can take Indians to such a level',
    media: {
      type: 'IMAGE',
      source: {
        url: ach8
      }
    }
  },
  {
    title: '1 January, 2023',
    cardTitle: 'Awarded by American Federation (AFMI)',
    cardSubtitle: 'Hosted in Civic Center, New Delhi',
    cardDetailedText: 'For scoring second best score in Uttar Pradesh from all the participants, I was awarded with Silver Medal, certificate and cheque prize of rupees 5K, which I never renewed is still fresh as recognition in itself.',
    media: {
      type: 'IMAGE',
      source: {
        url: ach4
      }
    }
  },
  {
    title: '4 November 2022',
    cardTitle: 'Runner Up of Debate Competition',
    cardSubtitle: 'Hosted by IITM Janakpuri, New Delhi',
    cardDetailedText: 'I participated in an Inter-College Debate competition, where the topic was "Corruption in Democratic India is neccessary" I was in favour of the context, because I believe the democratic India is far far free from corruption, and the situation of the country is witness itself.',
    media: {
      type: 'IMAGE',
      source: {
        url: ach9
      }
    }
  },
  {
    title: '19 June 2021',
    cardTitle: 'National Level Debate Competition',
    cardSubtitle: 'Hosted by Entab CampusCare',
    cardDetailedText: 'All this achievement is older but participating in National Level Debate was one of my best decision; after that, public speaking was no more a hoax. I gave an excellent performance and all my relatives and teachers were live on youtube to listen me loud and confident! Everyone was proud on commendable performance but not more than myself. ',
    media: {
      type: 'IMAGE',
      source: {
        url: ach10
      }
    }
  },
 
];

const achtimeline = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="timeline-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="timeline-heading">Achievements</h2>
        <Chrono
          items={achtimelineItems}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: '#ffd447',
            secondary: '#1c1c1c',
            cardBgColor: '#ffffff',
            cardForeColor: '#333333',
            titleColor: '#000000',
          }}
          slideShow
          cardHeight={200}
        />
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default achtimeline;
