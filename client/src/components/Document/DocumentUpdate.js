// Import React Libs
import React, { useContext, useEffect, useState } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// React Router Components
import { useHistory, useParams } from "react-router-dom";

// Import Components and Styles
import DocumentForm from "./DocumentForm";
import MyNavBar from "../NavBar/NavBar";
import { Button, Row, Col } from "react-bootstrap";

// Import Services
import DocumentService from "../../services/DocumentService";
import AuthService from "../../services/AuthService";
import "./DocumentFormContainer.css";

function DocumentUpdate() {
  const { document, setDocument } = useContext(documentContext);
  const history = useHistory();
  let { id } = useParams();

  //const { documentValue, setDocumentValue } = useContext(documentContext);
  const [documentData, setDocumentData] = useState(null);

  /*
  useEffect(() => {
    async function fetchDocument() {
      console.log("Document value in update is " + id);
      const givenDocument = await DocumentService.getDocument(id);
      setDocumentData(givenDocument);
    }
    fetchDocument();
  }, []);
*/
  const onInputChange = (childName, childValue) => {
    setDocumentData({ ...document, [childName]: childValue });
  };

  const handleSubmit = async () => {
    let documentPack = {
      creator_id: AuthService.auth.user.id,
      _id: id,
      name: document.name,
      description: document.description,
      goalsAndDescription: {
        goals: document.goals,
        problemsToSolve: document.problems,
        vision: document.vision,
      },
    };
    console.log(documentPack);
    await DocumentService.updateDocument(documentPack);
    history.push("/");
  };

  return (
    <div>
      <MyNavBar />
      <div className="document-form_container">
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <DocumentForm onFormChange={onInputChange} document={document} />
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
    </div>
  );
}

export default DocumentUpdate;
