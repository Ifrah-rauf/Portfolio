import ChromaGrid from './ChromaGrid'
import React from "react";
import exp1 from "./static/exp1.png";
import exp2 from "./static/exp2.png";
import exp3 from "./static/exp3.jpg";
import exp4 from "./static/exp4.png";
import exp5 from "./static/exp5.png";
import "./expcards.css";
const items = [
    {
    // id: 1,
    title: "Frontend Developer Internship at IBM",
    url: "25 June 2024 - 5 August 2024",
    subtitle: "Worked on developing responsive and intuitive website designs using basic technologies HTML, CSS and JS and submitted my project VikasVaani, a dynamic site built during intern period of 1 month.",
    image:exp1,
    handle: "25 June 2024 - 5 August 2024",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg,rgb(35, 156, 167), #000)",
  },
  
  {
    // id: 2,
    title: "Started my Youtube Channel",
    url: "Feb, 2023",
    subtitle: "I wanted to fulfill my everlasting desire of teaching, so I used youtube for it! Taught Technical Communication and Fundamentals of IT. I never thought I could gain popularity outisde my social circles. Uploaded only two videos atfirst, but on request of my juniors, I gave it a shot and made more!",
    image: exp5,
    handle: "Feb, 2023",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    // id:3 ,
    title: "Design Head at Literary Society, VSIT Department ",
    url: "2023-25",
    subtitle: "I was much into frontend, like many of my colleagues. But I could make it far enough to be the Lead. I deeply made understanding of how to capture attention, color theory, typography and much more and guided my juniors.",
    image:exp4,
    handle: "2023-25",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg,rgb(18, 91, 147), #000)",
  },
  {
    // id: 4,
    title: "Smart India Hackathon",
    url: "2 September, 2024",
    subtitle: "It remained as an experience of a great idea, that we couldn't manage to convince... Few months later we discovered our idea was implemented in fact by Uber Company. Our data science project focused on women safety in taxi services, by introducing women to women scheme, Advanced authentication of drivers through review system and using public data analytics to mark threatening places on geolocations.",
    image:exp3,
    handle: "2 September, 2024",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg,rgb(106, 100, 176), #000)",
  },
  {
    // id: 5,
    title: "Vihaan007 Hackathon, DTU",
    url: "23 February, 2024",
    subtitle: "This was my first Hackathon, but not for my team-mates. Our idea was to create a Smart Homes ecosystem, with advanced safety features and necessary automations. We couldn;t win but atleast gave me hope for some more competitions ahead.",
    image:exp2,
    handle: "23 February, 2024",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg,rgb(98, 59, 203), #000)",
  },
  {
    // id: 5,
    title: "",
    url: "hhi",
    subtitle: "",
    image:"",
    handle: "",
    borderColor: "transparent",
    gradient: "transparent",
    className:"vihaan",
  },
  
];


export default function Expcards() {
  return (
    <>
    <div className="chromacardbody">
      <ChromaGrid 
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
          <div>
      </div>
    </>
  );
}
