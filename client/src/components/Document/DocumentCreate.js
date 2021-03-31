// Import React Libs
import React, { useState } from "react";

// Import Components and Styles
import { Button, Row, Col } from "react-bootstrap";
import MyNavBar from "../NavBar/NavBar";
import DocumentForm from "./DocumentForm";

// Import Services
import DocumentService from "../../services/DocumentService";
import AuthService from "../../services/AuthService";

function DocumentCreate() {
  const [documentData, setDocumentData] = useState({});

  const onInputChange = (childName, childValue) => {
    setDocumentData({ ...documentData, [childName]: childValue });
  };

  const handleSubmit = async () => {
    let documentPack = {
      creator_id: AuthService.auth.user.id,
      name: documentData.name,
      description: documentData.description,
      goalsAndDescription: {
        goals: documentData.goals,
        problemsToSolve: documentData.problems,
        vision: documentData.vision,
      },
    };
    await DocumentService.saveDocument(documentPack);
  };

  return (
    <div>
      <MyNavBar />
      <Row className="justify-content-md-center">
        <Col sm={8}>
          <DocumentForm onFormChange={onInputChange} document={documentData} />
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
  );
}

export default DocumentCreate;
