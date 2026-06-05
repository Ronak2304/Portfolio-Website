import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCanva,
  SiFigma,
  SiMysql,
  SiPython,
  SiPowerbi,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { FaFilePowerpoint, FaFileWord, FaFileExcel } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        <div className="tech-icons-text">Canva</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <div className="tech-icons-text">Figma</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel />
        <div className="tech-icons-text">Excel</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaFilePowerpoint />
        <div className="tech-icons-text">PowerPoint</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaFileWord />
        <div className="tech-icons-text">Word</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <div className="tech-icons-text">Power BI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <div className="tech-icons-text">React</div>
      </Col>
    </Row>
  );
}

export default Techstack;