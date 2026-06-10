import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaGoogleDrive } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">

      {props.carousel ? (
        props.carousel
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button variant="primary" href={props.ghLink} target="_blank">
          {props.ghLink?.includes("drive.google") ? (
            <>
              <FaGoogleDrive /> &nbsp; Drive
            </>
          ) : (
            <>
              <BsGithub /> &nbsp; GitHub
            </>
          )}
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;