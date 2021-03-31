// Import React Libs
import React, { useContext, useEffect, useState } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// React Router Components
import { useHistory } from "react-router-dom";

// Import Components and Styles
import DocumentForm from "./DocumentForm";
import MyNavBar from "../NavBar/NavBar";
import { Button, Row, Col } from "react-bootstrap";

// Import Services
import DocumentService from "../../services/DocumentService";
import AuthService from "../../services/AuthService";

function DocumentUpdate() {
  const history = useHistory();
  const { documentValue, setDocumentValue } = useContext(documentContext);
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    async function fetchDocument() {
      const givenDocument = await DocumentService.getDocument(documentValue);
      setDocumentData(givenDocument);
    }
    fetchDocument();
  }, []);

  const onInputChange = (childName, childValue) => {
    setDocumentData({ ...documentData, [childName]: childValue });
  };

  const handleSubmit = async () => {
    let documentPack = {
      creator_id: AuthService.auth.user.id,
      _id: documentValue,
      name: documentData.name,
      description: documentData.description,
      goalsAndDescription: {
        goals: documentData.goals,
        problemsToSolve: documentData.problems,
        vision: documentData.vision,
      },
    };
    console.log(documentPack);
    await DocumentService.updateDocument(documentPack);
    history.push("/");
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
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Update
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default DocumentUpdate;
