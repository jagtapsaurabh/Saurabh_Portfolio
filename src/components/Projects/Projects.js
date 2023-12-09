import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="E-Voting System"
              description="The Fingerprint-Based E-Voting System is a cutting-edge digital solution that merges the convenience of electronic voting with the robustness of biometric authentication. This innovative system aims to revolutionize the traditional voting process by introducing a secure and efficient method of casting votes using fingerprint identification."
              ghLink="https://github.com/abhijeetbhosale11/E-Voting-System"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="3D Visuals Portfolio"
              description="Embark on a visual journey through the realm of cutting-edge web development with Unveiling Dimensions, a dynamic 3D developer portfolio crafted using React.js and Three.js. Immerse yourself in a captivating showcase that seamlessly blends the artistry of web design with the power of interactive 3D graphics."
              ghLink="https://github.com/abhijeetbhosale11/3D-Portfolio"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Flight Booking System"
              description="The Flight Booking System is a sophisticated and user-friendly software solution designed to streamline and enhance the entire flight booking process for travelers and airlines alike. This innovative system represents a significant leap forward in the world of travel technology, offering a range of features and benefits that ensure a seamless."
              ghLink="https://github.com/abhijeetbhosale11/Flight-Booking-System"
              demoLink=" "              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
