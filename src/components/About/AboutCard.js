import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
  <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi everyone! I'm <span className="purple">Ronak Nangia</span> from
    <span className="purple"> Delhi, India</span>.
    
    <br /><br />
    
    I am a Computer Science graduate from 
    <span className="purple"> Shaheed Sukhdev College of Business Studies (University of Delhi)</span>.
    
    <br /><br />
    
    My expertise spans 
    <span className="purple"> data-driven marketing analysis, full-stack web development, brand strategy, and graphic design</span>. 
    By bridging technical logic with creative execution, I focus on turning complex metrics into impactful digital experiences.
    
    <br /><br />
    
    Outside of design and analytics, I love engaging in activities that keep me sharp and inspired:
  </p>

  <ul>
    <li className="about-activity">
      <ImPointRight /> Playing Sports 🏏♟️
    </li>
    <li className="about-activity">
      <ImPointRight /> Dissecting Consumer & Market Data Trends 📈
    </li>
    <li className="about-activity">
      <ImPointRight /> Traveling and Exploring New Places 🌍
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Arise, awake, and stop not till the goal is reached."{" "}
  </p>
  <footer className="blockquote-footer">Swami Vivekananda</footer>
</blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
