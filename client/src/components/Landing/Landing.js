// Import React Libs
import React from "react";

// Import Components and Styles
import { Row, Col, Navbar, Button, Container } from "react-bootstrap";
import "./Landing.css";

// Import Graphics
import logo from "../../Graphics/logo_blue.svg";
import logoGrey from "../../Graphics/logo_grey.svg";
import laptop from "../../Graphics/laptop.jpg";
import linkedin from "../../Graphics/linkedin.svg";
import github from "../../Graphics/github.svg";

function Landing() {
  return (
    <div>
      <div className="landing-message text-center">
        Website in continuos development, visit everyday for a new update.
      </div>
      <Navbar className="d-flex justify-content-between">
        <Navbar.Brand href="/">
          <img src={logo} />
        </Navbar.Brand>
        <Button variant="outline-primary" href="/login">
          Log in
        </Button>
      </Navbar>
      <Container>
        <Row>
          <Col sm={7}>
            <h3>
              Your 'Drive' for Software Requirements Specification documents
            </h3>
            <Button href="/register">Try now, it's free</Button>
          </Col>
          <Col sm={5}>
            <img src={laptop} className="header-img" />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center text-center">
          <Col sm={4}>
            <h4>Why and what is a Software Requirement Specification?</h4>
            <p>
              Before going into grand adventures or building a house, we usually
              develop a plan unless we want to be trully adventurous. Developing
              software usually means a long endevour. Having a plan on detailing
              the main aspects of the implementation will avoid time spending on
              figuring out where to turn on each task, because you already have
              the plan.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>CREATE</h3>
            <p>
              Create a document for each of your new idea and it'll be saved so
              you can have access acros multiple devices
            </p>
          </Col>
          <Col>
            <h3>CREATE</h3>
            <p>
              Create a document for each of your new idea and it'll be saved so
              you can have access acros multiple devices
            </p>
          </Col>
          <Col>
            <h3>CREATE</h3>
            <p>
              Create a document for each of your new idea and it'll be saved so
              you can have access acros multiple devices
            </p>
          </Col>
        </Row>
      </Container>
      <div className="cta-container text-center">
        <h2 style={{ marginBottom: 32 }}>Better seen than said right?</h2>
        <Button href="/register" variant="light">
          TRY FOR FREE
        </Button>
      </div>
      <div id="footer" className="text-center">
        <div>
          <a href="/" style={{ marginBottom: 24, display: "block" }}>
            <img src={logoGrey} />
          </a>
          <p>
            Project developer by{" "}
            <a
              href="https://www.linkedin.com/in/pedromnoliveira/"
              target="_blank"
            >
              Pedro Oliveira
            </a>
          </p>
          <a href="https://github.com/Hermestt/srsGen" target="_blank">
            Check out the code
          </a>
        </div>
        <div className="social-media d-flex justify-content-center">
          <div className="icon-container" style={{ marginRight: 24 }}>
            <a href="https://github.com/Hermestt/" target="_blank">
              <img src={github}></img>
            </a>
          </div>
          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/pedromnoliveira/"
              target="_blank"
            >
              <img src={linkedin}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
