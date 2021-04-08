// Import React Libs
import React from "react";

// React Router Components
import { Link } from "react-router-dom";

// Import Components and Styles
import { Row } from "react-bootstrap";
import img404 from "./404.svg";

const imgStyle = {
  height: 300,
  width: 400,
  marginBottom: 40,
};

function NoDocument() {
  return (
    <Row className="justify-content-md-center text-center">
      <img src={img404} style={imgStyle} alt="Document doesn't exist" />
      <h3>Document doesn't exist</h3>
      <Link to="/">Go back to dashboard</Link>
    </Row>
  );
}

export default NoDocument;
