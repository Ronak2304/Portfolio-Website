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

            I am a recent graduate in B.Sc. (H) Computer Science student from
            <span className="purple"> Shaheed Sukhdev College of Business Studies, University of Delhi</span>.

            <br /><br />

            My experience spans
            <span className="purple"> social media marketing, campaign management, graphic design, web design and development, and data-driven marketing analysis</span>.

            <br /><br />

            I have worked on large-scale campaigns through internships and student leadership roles, generating registrations, creating marketing creatives, managing digital promotions, and analyzing campaign performance.

            <br /><br />

            I enjoy combining creativity with analytics to build campaigns that drive engagement and measurable impact.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Passionate Sportsperson
            </li>
            <li className="about-activity">
              <ImPointRight /> Data-Driven Marketing Analysis
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
