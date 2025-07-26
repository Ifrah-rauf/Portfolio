import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './vvbook.css';
import vvlogo from './static/vvlogo2.png';
import rise from './static/rise.png';
import vvarrow from './static/arrowvv2.png';
import one from './static/onetoone.png'
import arrow from './static/arrow.png';
import BlurText from "./BlurText";

const VVBook = () => {   // ✅ Capitalized component name
  return (
    <div className="vvbook-container">
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
        className="vvbook"
        responsiveSinglePage={false}
        mobileScrollSupport={true}
      >

        <div className="vvbook-page page1">
            <img src={vvlogo} className="vv"></img>
            <p className="vvpage1text">
            Upskilling platform that empowers learners through skill-based 
            assessments and personalized pathways.
            </p>
        </div>
        <div className="vvbook-page page2">
        <div class="about-heading">
            <img src={rise} alt="icon" class="about-icon"/>
            <div className="blur" style={{color:"white"}}>
                        <BlurText
                        text="About this Project"
                        delay={400}
                        animateBy="words"
                        direction="top"
                        className="text-2xl mb-8"
                        />
                    </div>
                </div>

            <div class="vvabout-box">
            <p><strong>VikaasVaani</strong> is a student-focused platform developed under the 
            <strong>IBM SkillsBuild Summer Internship Program</strong>. 
            It empowers learners through interactive skill assessments and smart 
            upskilling pathways, providing tailored learning recommendations, m
            entor access, and real-time progress tracking. The platform is designed 
            to make students industry-ready through accessible and structured growth tools.</p>
        </div>
        </div>
        <div className="vvbook-page page3">
            <img src={vvarrow} className="vvarrow1"></img><h5 
            style={{position:"relative",color:"white",fontSize:"5vh",left:"4vh",fontWeight:"bolder"}}>
                Working Demo</h5>
                 <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/xBypF8LAZ0k"
                    title="YouTube video player"
                    frameBorder="0"
                    className="vvvideo"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            {/* <video width="90%" height="auto" className="vvvideo" controls>
                <source src={vvvideo} type="video/mp4" />
                does not support
            </video> */}
            
            <div className="vvdemodashed" >
               VikasVaani is an innovative educational website designed to bridge the gap between 
               learners and educational resources. Our project is based on sustainability. It endeavours to bring out 
               an innovative approach for sustainability through technology.
            </div>
        </div>
        <div className="vvbook-page page4">
            <h1 className="vvpage4head">Problem Statement</h1>
            <div className="dashedpage4 ">
                <b>Current education System has several issues: </b><br/>
•Present system has limited infrastructure.<br/>
 •Need to up-skill graduates to meet new market requirements.<br/>
 •Continued education for those who are still in the job market.<br/>
 •Lack of awareness of new job opportunities trends.<br/>
 •Inaccessible education for people in remote.<br/>
•Lack of awareness about government schemes, scholarships, recruitments and NGOs.<br/>

            </div>
            <div className="tmsticky-note vvnote1" >
                <b>Objectives</b><br/>
                •Bridging the gap<br/>
                •Upskilling youth for job market.<br/>
                •Creating Awareness<br/>
                •Facilitating Access<br/>
                •Enhancing Community Engagement<br/>


            </div>
            
        </div>
        <div className="vvbook-page page6">
            <h1 style={{color:"white",marginTop:"10vh",marginBottom:"1vh"}}>Product Features</h1>
            <p className="page6content">
                1. Comprehensive Educational Resources<br/>
                2. Aptitude Assessment<br/>
                3. Upskilling and Professional Development<br/>
                4. Information on Government Schemes and Scholarships<br/>
                5. Access to Workshops, Webinars, and Seminars<br/>
                6. NGO Volunteering and Donation Opportunities<br/>
                7. Job Market Trends and Opportunities<br/>
                8. Continued Education for Professionals<br/>
                9. User-Friendly Interface<br/>
                10. Secure and Private<br/>
                11. Mobile Accessibility<br/>

            </p>

        </div>
        <div className="vvbook-page page5">
            <p style={{color:"black"}}>
                <b>Data sources used:</b><br/>
                https://nptel.ac.in/courses<br/>
                https://dmc.delhi.gov.in/dmc/list-ngo<br/><br/>
                <b>Software</b><br/>
                Web Development Framework: Django<br/>
                Database Management System (SQLite3)<br/>
                Front-End Development: HTML, CSS, and JavaScript<br/><br/>
                <b>APIs and Integration:</b><br/>
                Google Maps<br/>
                Gmail API<br/>
            </p>
            </div>
        
      </HTMLFlipBook>

      </div>
  )}

  export default VVBook;
