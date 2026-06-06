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
              I am a recent Computer Science graduate who enjoys combining
              <b className="purple">
                {" "}
                creativity, marketing, and analytics 
                {" "}
              </b>to build impactful campaigns and initiatives.
              <br />
              <br />
              Over the past few years, I have worked on marketing campaigns,
              event promotions, graphic design projects, and data analytics
              initiatives that helped drive audience engagement and measurable
              outcomes.
              <br />
              <br />
              My toolkit includes
              <i>
                <b className="purple">
                  {" "}
                  Excel, Power BI, SQL, Python, Canva, Figma,
                  and Full-Stack Web Development
                </b>
              </i>
              , allowing me to approach problems from both a creative and analytical
              perspective.
              <br />
              <br />
              From generating registrations for national-level campaigns to
              creating digital marketing assets and leading promotional efforts
              for large college events, I enjoy building initiatives that create
              impact and deliver results.
              <br />
              <br />
              I am actively exploring opportunities in
              <b className="purple">
                {" "}
                Social Media Marketing, Digital Marketing,
                Campaign Strategy, Content Marketing,
                and Marketing Analytics.
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
