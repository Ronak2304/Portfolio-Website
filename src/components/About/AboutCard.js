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
            
            I am a final-year Computer Science student at <span className="purple">Shaheed Sukhdev College of Business Studies (University of Delhi)</span> with experience spanning data analytics, graph theory research, and stakeholder operations. Through my internships and projects, I have engineered predictive pipelines using 16,000+ scraped records and evaluated complex network structures on datasets exceeding 1.9 million transaction logs, developing a strong foundation in structural thinking, algorithmic benchmarking, and data cleaning.
            
            <br /><br />
            
            Beyond academics, serving as the <span className="purple">Coordinator for Convergence</span> our flagship corporate event allowed me to lead a 45-member cross-functional team, host distinguished national speakers, and manage large-scale campaign scheduling, sharply refining my communication, strategic execution, and team management skills.
            
            <br /><br />
            
            I am currently seeking opportunities in <span className="purple">Analytics, Sales, and Consulting</span> where I can apply my analytical mindset, learn quickly, and contribute to solving complex business problems.
          </p>

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
