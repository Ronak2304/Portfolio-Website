import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a recent Computer Science graduate with a passion for combining
              <b className="purple">
                {" "}
                analytics, operations, and marketing
              </b>{" "}
              to solve real-world problems and drive meaningful outcomes.
              <br />
              <br />
              Through internships, leadership roles, and hands-on projects, I have
              worked on large-scale marketing campaigns, data analytics initiatives,
              operational planning, and process optimization projects that delivered
              measurable impact.
              <br />
              <br />
              My toolkit includes
              <i>
                <b className="purple">
                  {" "}
                  Excel, Power BI, SQL, Python, Canva, PowerPoint,
                  MERN Stack, and Data Visualization
                </b>
              </i>
              , enabling me to approach challenges with both analytical rigor and
              creative thinking.
              <br />
              <br />
              From generating 50,000+ registrations through marketing campaigns and
              managing participant operations, to building analytics dashboards,
              conducting research, and leading cross-functional teams, I enjoy
              turning data and ideas into actionable results.
              <br />
              <br />
              I am actively seeking opportunities in
              <b className="purple">
                {" "}
                Operations, Business Analytics, Marketing,
                Strategy, Program Management, and Data-Driven Decision Making.
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
