// Import React Libs
import React from "react";

// Import Components and Styles
import { Row, Col, Navbar, Button, Container } from "react-bootstrap";
import "./Landing.css";

// Import Graphics
import logo from "../../Graphics/logo_blue.svg";
import logoGrey from "../../Graphics/logo_grey.svg";
import laptop from "../../Graphics/laptop.jpg";
import mobile from "../../Graphics/mobile.jpg";
import linkedin from "../../Graphics/linkedin.svg";
import github from "../../Graphics/github.svg";

function Landing() {
  return (
    <div>
      <div className="landing-message text-center">
        Website in continuos development, visit everyday for a new update.
      </div>
      {/* NAVBAR ############################################################################# */}
      <Navbar className="d-flex justify-content-between">
        <Navbar.Brand href="/">
          <img src={logo} alt="srs logo" />
        </Navbar.Brand>
        <Button variant="outline-primary" href="/login">
          Log in
        </Button>
      </Navbar>
      <Container>
        {/* HEADER ############################################################################# */}
        <Row className="text-center header-container align-items-center">
          <Col lg={7} id="header-col1" className="text-lg-start  flex">
            <h2 className="header-text fw-bolder">
              Your 'Drive' for Software Requirements Specification documents
            </h2>
            <Button href="/register">Try now, it's free</Button>
          </Col>
          <Col lg={5} id="header-col2">
            <img src={laptop} className="header-img laptop-img" alt="" />
            <img src={mobile} className="header-img mobile-img" alt="" />
          </Col>
        </Row>
        {/* EXPLANATION ############################################################################# */}
        <Row className="d-flex justify-content-center text-center explanation-container">
          <Col md={10} lg={6}>
            <h4 className="fw-bold" style={{ marginBottom: 16 }}>
              Why and what is a Software Requirement Specification?
            </h4>
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
        {/* FEATURES ############################################################################# */}
        <Row className="text-center justify-content-center features-container">
          <Col lg="4" className="feature">
            <h3 className="fw-bolder">CREATE</h3>
            <p>
              Create a document for each of your new idea and it'll be saved so
              you can have access across multiple devices.
            </p>
          </Col>
          <Col lg="4" className="feature">
            <h3 className="fw-bolder">UPDATE</h3>
            <p>
              Don't have everything figured out yet? No problem, as long as
              you've saved the unfinished document you can come back later to
              complete it.
            </p>
          </Col>
          <Col lg="4" className="feature">
            <h3 className="fw-bolder">DOWNLOAD</h3>
            <p>
              Everything's set in stone? Congratulations! I bet you want to
              share it with your team, or simply have handy on your device. Feel
              free to download the document as a PDF.
            </p>
          </Col>
        </Row>
      </Container>
      {/* CTA ############################################################################# */}
      <div className="cta-container text-center">
        <h2 style={{ marginBottom: 48 }} className="fw-bolder">
          Better seen than said right?
        </h2>
        <Button href="/register" variant="light">
          TRY FOR FREE
        </Button>
      </div>
      {/* FOOTER ############################################################################# */}
      <div id="footer" className="text-center">
        <div>
          <a href="/" style={{ marginBottom: 24, display: "block" }}>
            <img src={logoGrey} alt="srs logo grey" />
          </a>
          <p>
            Project developed by{" "}
            <a
              href="https://www.linkedin.com/in/pedromnoliveira/"
              target="_blank"
              rel="noreferrer"
            >
              Pedro Oliveira
            </a>
          </p>
          <a
            href="https://github.com/Hermestt/srsGen"
            target="_blank"
            rel="noreferrer"
          >
            Check out the code
          </a>
        </div>
        <div className="social-media d-flex justify-content-center">
          <div className="icon-container" style={{ marginRight: 24 }}>
            <a
              href="https://github.com/Hermestt/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt=""></img>
            </a>
          </div>
          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/pedromnoliveira/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt=""></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
