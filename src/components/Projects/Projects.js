import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import charikar from "../../Assets/Projects/charikar_output_image.png"
import CreativeCarousel from "./creativecarousel";
import dashboard from "../../Assets/Projects/dashboard.png"
import ml from "../../Assets/Projects/ml.png"
import finance from "../../Assets/Projects/finances.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              carousel={<CreativeCarousel />}
              isBlog={false}
              title="Creative Showcase"
              description="A collection of social media creatives, promotional posters, branding assets, and marketing designs created during my Graphic Design Internship at Moodale and while leading the design team for Convergence'24."
              ghLink="https://drive.google.com/drive/folders/1LutwZbMnkziYe30JYi_olIUHMClnwRCP?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charikar}
              isBlog={false}
              title="Anomaly Detection in Financial Networks"
              description="Developed a 3-tier anomaly detection framework on an Ethereum transaction dataset containing 1.9M+ records to identify fraudulent subgraphs using Local Clustering Coefficients, Charikar’s Greedy Peeling, and Spectral Graph Theory."
              ghLink="https://github.com/Ronak2304/Anomaly-Detection-in-Financial-Networks"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Data Jobs Dashboard"
              description="Built an interactive Power BI dashboard analyzing 480,000+ job postings to uncover salary trends, hiring patterns, and role-based insights using Power Query and bookmark-driven exploration."
              ghLink="https://drive.google.com/drive/folders/1TIarWP1AR6ebOi6UpWTF0zacZonH3bHa?usp=sharing"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Flipkart Rating Prediction"
              description="Developed an end-to-end predictive analytics pipeline by scraping 16,000+ Flipkart products and building a machine learning model that achieved 84.3% accuracy in predicting consumer rating tiers."
              ghLink="https://github.com/Ronak2304/Data-Mining-Project"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="FinTrack"
              description="Built a full-stack MERN finance management application with interactive visualizations, income-expense tracking, calendar heatmaps, and responsive UI components using React and TailwindCSS."
              ghLink="https://github.com/Ronak2304/Finance-Tracker"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
