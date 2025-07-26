import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import BlurText from "./BlurText";
import './tmbook.css';
import tmphoto from './static/tmphoto.png';
import tmvideo from './static/tmvideo.MP4';
import train from './static/train.png';
import track1 from './static/track.png';
import arrow from './static/arrow.png';
import tm2 from './static/tm2.png';
import pin from './static/pin2.png';
const TMBook = () => {   // ✅ Capitalized component name
  return (
    <div className="tmbook-container">
      <HTMLFlipBook
        width={500}          // ✅ Default width
        height={540}         // ✅ Default height
        size="fixed"
        minWidth={650}       // ✅ Minimum width to preserve double page
        maxWidth={800}
        minHeight={400}
        maxHeight={600}
        maxShadowOpacity={0.5}
        showCover={true}
        className="tmbook"
        responsiveSinglePage={false}
        mobileScrollSupport={true}
      >
        <div className="tmbook-page page1">
            <img src={tmphoto} className="tm"></img>
            <p>Travel in metro, through the real world map!</p>
        </div>
        <div className="tmbook-page page2">
            {/* <img src={track1} className="track2"></img> */}
            {/* <p style={{padding:"5vh"}}>This is my second page of the Travel Metro project</p> */}
            <div className="blur">
                <BlurText
                text="How I came up with this Idea?"
                delay={400}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
                />
            </div>
            <div className="dashed">
                <h6 className="dashedh1">I am a student and truely, metro is a saviour! It is budget friendly and minimise carbon emissions.
                    I pondered how its routing software may look like, and then voila I created one!</h6>
            </div>
            <img src={train} className="train"></img>
            <img src={track1} className="track"></img>
        </div>
        <div className="tmbook-page page3">
            <img src={arrow} className="tmarrow1"></img><h4 style={{position:"relative",top:"10vh"}}>Working Demo</h4>
            <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/cyOdZSt2vG0"
                title="YouTube video player"
                frameBorder="0"
                className="tmvideo"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />

            {/* <video width="90%" height="auto" className="tmvideo" controls>
                <source src={tmvideo} type="video/mp4" />
                does not support
            </video> */}
            
            <div className="dashed detail" style={{height:"auto",fontSize:"2vh"}}>
                A user enter source and destination stations on inter-metro line and see navigation on real world geo map to know the place.
                We can also observe estimated time from one metro station to another.
            </div>
        </div>
        <div className="tmbook-page page4">
        <div className="dashed ui" style={{height:"auto",width:"fit-content",fontSize:"3vh",margin:"4vh"}}>
            User Interface:
        </div>
            <img src={tm2} className="tm2"></img>
            <img src={track1} className="track"></img>
        </div>
        <div className="tmbook-page page5">
            <div className="tmsticky-note">
                <img src={pin} alt="Pin" className="sticky-pin" />
                •Travel Metro is like DMRC routing app.
                •The strength of this project does not lie in its uniqueness but in its core technical aspects, complexity and understanding of DSAs.
            </div>
            <div className="tmsticky-note" 
            style={{transform: "rotate(5deg)", backgroundColor:"rgb(195, 218, 136)",top:"32vh",left:"28vh",width:"35vw"}}>
                <img src={pin} alt="Pin" className="sticky-pin" />
                •Modular & Scalable Backend<br />
                •Support for Future Smart Features

            </div>
            <div className="tmsticky-note third"
            >
                <img src={pin} alt="Pin" className="sticky-pin" />
                Suppose you want to reach Indira Chowk from Rajiv Chowk Metro Station,
                you can clearly locate it around the station from geo locations.
            </div>
        </div>
        <div className="tmbook-page page6">
            <h1 className="techHead">Technology:</h1>
            <div className="dashed tech" >
            •Backend Framework: <b>Java Spring Boot</b> <br />
            •Database: <b>MongoDB</b><br />
            •Frontend: <b>HTML + CSS + JavaScript</b><br />
            •Mapping Tool: <b>Leaflet.js (Open-source Map Library)</b><br />
            •<b>Responsive Web-app</b>.<br />
            <b>•Runs on any device</b>.<br />
            </div>
        {/* </div>
        <div className="tmbook-page page7"> */}
            <h1 className="techHead">Future Scope</h1>
            <div className="dashed tech" >
           •Adding all Metro Lines , extending the Database.<br/>
           •Cost Model: Adding Promotional Landmarks.<br/>
           •Fare Estimation<br/>
           </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default TMBook;  // ✅ Capitalized export
