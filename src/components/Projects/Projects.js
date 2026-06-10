import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import charikar from "../../Assets/Projects/charikar_output_image.png"
import GenericCarousel from "./creativecarousel";
import dashboard from "../../Assets/Projects/dashboard.png"
import ml from "../../Assets/Projects/ml.png"
import finance from "../../Assets/Projects/finances.jpg"
import frame15 from "../../Assets/Projects/Frame 15.png";
import frame3 from "../../Assets/Projects/Frame 3 (1).png";
import group1 from "../../Assets/Projects/Group 1.png";
import shrek from "../../Assets/Projects/shrek classes (2).png";
import nike from "../../Assets/Projects/Nike_shoe_ad.jpg";
import reel1 from "../../Assets/Projects/reel1.png";  
import reel2 from "../../Assets/Projects/reel2.png";
import dashboard2 from "../../Assets/Projects/dashboard2.png";
import dashboard3 from "../../Assets/Projects/dashboard3.png";
import exceldashboaard from "../../Assets/Projects/excel_dashboard.png";
import powerquery from "../../Assets/Projects/powerquery.png";

const creativeImages = [
  { image: frame15 },
  { image: frame3 },
  { image: group1 },
  { image: nike },
  {
    image: reel1,
    link: "https://www.instagram.com/reel/DCCH928quGQ/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: reel2,
    link: "https://www.instagram.com/reel/C_QR0trStHt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const powerBIImages = [
  {
    image: dashboard, 
  },
  {
    image: dashboard2, 
  },
  {
    image: dashboard3, 
  },
];

const excelDashboardImages = [
  {
    image: exceldashboaard,
  },
  {
    image: powerquery,
  },
];

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
              imgPath={charikar}
              isBlog={false}
              title="Anomaly Detection in Financial Networks"
              description="Developed a research-driven anomaly detection framework on an Ethereum transaction dataset containing 1.9M+ records. Leveraged Local Clustering Coefficients, Charikar's Greedy Peeling, and Spectral Graph Theory to identify dense fraudulent subgraphs and benchmarked multiple graph mining techniques for academic publication."
              ghLink="https://github.com/Ronak2304/Anomaly-Detection-in-Financial-Networks"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              carousel={<GenericCarousel images={powerBIImages} />}
              title="Data Jobs Dashboard"
              description="Built an interactive Power BI dashboard analyzing 480,000+ global job postings to uncover salary trends, hiring patterns, and role-specific insights. Utilized Power Query for data transformation and designed a bookmark-driven interface for dynamic exploration of employment metrics."
              ghLink="https://drive.google.com/drive/folders/1TIarWP1AR6ebOi6UpWTF0zacZonH3bHa?usp=sharing"
              sourceType="github"
            />  
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              carousel={<GenericCarousel images={excelDashboardImages} />}
              title="Excel Dashboard"
              description="Analyzed 260,000+ ball-by-ball IPL records spanning 2008–2024 using Excel and Power Query. Developed comprehensive player, team, and season-level insights, identifying performance trends, records, and key statistics through advanced Pivot Tables and dashboard visualizations."
              ghLink="https://drive.google.com/drive/folders/1LutwZbMnkziYe30JYi_olIUHMClnwRCP?usp=sharing"
              sourceType="drive"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Flipkart Rating Prediction"
              description="Engineered an end-to-end machine learning pipeline by scraping 16,000+ Flipkart product listings and performing extensive feature engineering. Built a predictive model achieving 84.3% accuracy in classifying product rating tiers and identifying factors influencing customer satisfaction."
              ghLink="https://github.com/Ronak2304/Data-Mining-Project"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="FinTrack"
              description="Developed a full-stack personal finance management platform using the MERN stack. Integrated interactive charts, calendar heatmaps, and real-time notifications to help users track income, expenses, and spending patterns through a responsive and intuitive user interface."
              ghLink="https://github.com/Ronak2304/Finance-Tracker"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              carousel={<GenericCarousel images={creativeImages} />}
              title="Creative Showcase"
              description="Designed and delivered 30+ marketing creatives, social media campaigns, event branding assets, reels, brochures, and promotional materials during my Graphic Design Internship at Moodale and as Design Lead for Convergence'24. These campaigns contributed to 55,000+ account reach and a 2,500% increase in social media visibility."
              ghLink="https://drive.google.com/drive/folders/1LutwZbMnkziYe30JYi_olIUHMClnwRCP?usp=sharing"
              sourceType="drive"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
