import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import elogo from './static/elogo.png'
import one from './static/onetoone.png'
import arrow from './static/arrow.png';
import BlurText from "./BlurText";
import './elbook.css';

const ELBook = () => {   // ✅ Capitalized component name
  return (
    <div className="elbook-container">
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
        className="elbook"
        responsiveSinglePage={false}
        mobileScrollSupport={true}
      >

        <div className="elbook-page epage1">
            <img src={elogo} className="el"></img>
            <p className="melp"style={{margin:"4vh"}}>Connect students and teacher for One to One English Learning Sessions.</p>
        </div>
        <div className="elbook-page epage2">
        <div className="blur" style={{marginBottom:"-2vh"}}>
                <BlurText
                text="About this Project"
                delay={400}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
                />
            </div>
            <div className="eldashed" style={{fontSize:"2.2vh"}}>
            EngLive is a dynamic online English-learning portal where students can 
            connect directly with qualified English teachers for <b>personalized one-on-one 
            sessions.</b> <br/>The platform allows learners to choose teachers, follow 
            structured learning plans or customise according to their needs. It is still under development.
            </div>
           <img src={one} className="one"></img>

        </div>
        <div className="elbook-page epage3">
            <img src={arrow} className="elarrow1"></img><h5 style={{position:"relative",top:"10vh"}}>Working Demo</h5>
             <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/-nA_chgIdMI"
                title="YouTube video player"
                frameBorder="0"
                className="tmvideo"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
            {/* <video width="90%" height="auto" className="tmvideo" controls>
                <source src={mov} type="video/mp4" />
                does not support
            </video> */}
            
            <div className="eldashedp3" >
                A potential English Learner signs up, browse and select 
                teachers based of their qualifications and strengths, and book a demo to test the
                learning outcomes. A package is bought and on teacher's available timings, session can be booked.
            </div>
        </div>
        <div className="elbook-page epage4">
            <h4 style={{marginTop:"5vh"}}>Features</h4>
            <div className="eldashed elfeatures" >
                🔐 Authentication & Authorization using Django’s inbuilt django.contrib.auth 
                <br/><br/>
                📬 Session booking triggers email notifications to student, teacher, and admin.
                <br/><br/>
                🕒 Students can schedule demos or full classes.
                <br/><br/>
                📁 Dynamic Teacher Profiles: Rendered via Django templates; filtered and displayed using custom logic.
                <br/><br/>
                🧠 Conditional UI Rendering: Pages change behavior based on login state and user type
                <br/><br/>
                📄 JSON + JavaScript Communication: Frontend interacts with backend via AJAX for smooth session booking.
                <br/><br/>
                🗃️ Model-driven database operations using Django ORM.
            </div>
        </div>
        <div className="elbook-page epage5">
            <div className="terminal-window">
                <div className="terminal-bar">Components which are under dev</div>
                <div className="terminal-body" style={{fontSize:"2vh",fontWeight:"bolder"}}>
                    <p>→Session Management (reflecting user data such as selection of a session, available remaining sessions etc)</p>
                    <p>→ Teacher's Joining Module</p>
                    <p>→ Payment and Package System</p>
                    <p>→ Student Profiles User Interface</p>
                </div>
            </div>
            <div className="terminal-window" style={{backgroundColor:" #bbaf07",color:"black"}}>
                <div className="terminal-bar" style={{backgroundColor:"#d4c008",color:"black"}}>Technology Used</div>
                <div className="terminal-body"style={{backgroundColor:"#bbaf07",color:"black",fontSize:"2vh",margin:"0vh"}}>
                    <p><b>Frontend	</b>HTML, CSS, JavaScript, React (Flipbook)</p>
                    <p><b>Backend</b>	Django (Python), SqLite DB</p>
                    <p><b>Communication</b>	AJAX, JSON</p>
                    <p><b>Authentication</b>	Django's built-in auth system</p>
                    <p><b>Email Service</b>	Gmail SMTP + Django send_mail()</p>
                </div>
            </div>
        </div>
      </HTMLFlipBook>

      </div>
  )}

  export default ELBook;
