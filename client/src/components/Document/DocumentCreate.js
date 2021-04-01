// Import React Libs
import React, { useState } from "react";

// Import Components and Styles
import { Button, Row, Col } from "react-bootstrap";
import MyNavBar from "../NavBar/NavBar";
import DocumentForm from "./DocumentForm";
import "./DocumentFormContainer.css";

// React Router Components
import { useHistory } from "react-router-dom";

// Import Services
import DocumentService from "../../services/DocumentService";
import AuthService from "../../services/AuthService";

function DocumentCreate() {
  const [documentInfo, setDocumentInfo] = useState({});
  const [documentStories, setDocumentStories] = useState([]);
  const [documentPages, setDocumentPages] = useState([]);
  const [documentBackend, setDocumentBackend] = useState([]);

  const history = useHistory();

  const onInfoChange = (childName, childValue) => {
    setDocumentInfo({ ...documentInfo, [childName]: childValue });
  };
  const onStoryChange = (array) => {
    console.log("Story change");
    setDocumentStories(array);
  };
  const onPageChange = (array) => {
    console.log("Page change");
    setDocumentPages(array);
  };
  const onBackendChange = (array) => {
    console.log("Page change");
    setDocumentBackend(array);
  };

  console.log(documentPages);
  const handleSubmit = async () => {
    let documentPack = {
      creator_id: AuthService.auth.user.id,
      name: documentInfo.name,
      description: documentInfo.description,
      goals: documentInfo.goals,
      problems: documentInfo.problems,
      vision: documentInfo.vision,
    };
    await DocumentService.saveDocument(documentPack);
    history.push("/");
  };

  return (
    <div>
      <MyNavBar />
      <div className="document-form_container">
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <DocumentForm
              onInfoChange={onInfoChange}
              onStoryChange={onStoryChange}
              onPageChange={onPageChange}
              onBackendChange={onBackendChange}
              document={documentInfo}
            />
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
