// Import React Libs
import React, { useContext, useEffect } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// Import Components and Styles
import { Button, Row, Col } from "react-bootstrap";
import MyNavBar from "../NavBar/NavBar";
import DocumentForm from "./DocumentForm/DocumentForm";

// React Router Components
import { useHistory } from "react-router-dom";

// Import Services
import DocumentService from "../../services/DocumentService";
function DocumentCreate(props) {
  const history = useHistory();
  const { document, setDocument } = useContext(documentContext);

  const handleSubmit = async () => {
    await DocumentService.saveDocument(document);
    history.push("/");
  };

  return (
    <div>
      <MyNavBar />
      <div className="document-form_container">
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <DocumentForm />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={8} className="d-flex flex-row-reverse">
            <Button variant="primary" onClick={handleSubmit}>
              Save
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DocumentCreate;
