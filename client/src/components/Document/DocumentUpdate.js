// Import React Libs
import React, { useContext, useEffect, useState } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// React Router Components
import { useHistory, useParams } from "react-router-dom";

// Import Components and Styles
import DocumentForm from "./DocumentForm/DocumentForm";
import MyNavBar from "../NavBar/NavBar";
import { Button, Row, Col } from "react-bootstrap";

// Import Services
import DocumentService from "../../services/DocumentService";

function DocumentUpdate() {
  const history = useHistory();
  let { id } = useParams();

  const { document, setDocument } = useContext(documentContext);

  useEffect(() => {
    async function fetchDocument() {
      console.log("Document value in update is " + id);
      const doc = await DocumentService.getDocument(id);
      setDocument(doc);
    }
    fetchDocument();
  }, []);

  const handleSubmit = async () => {
    document._id = id;
    await DocumentService.updateDocument(document);
    history.push("/");
  };

  return (
    <div>
      <MyNavBar />
      <div className="document-form_container">
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <DocumentForm docFetch={true} />
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
