// Import React Libs
import React, { useContext, useEffect } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// React Router Components
import { useHistory, useParams } from "react-router-dom";

// Import Components and Styles
import { Button, ButtonGroup, Row, Col } from "react-bootstrap";
import MyNavBar from "../NavBar/NavBar";

// Import Services
import DocumentService from "../../services/DocumentService";

// Import Utils
import createPDF from "../../Utils/pdf";

function DocumentDetail() {
  const { document, setDocument } = useContext(documentContext);
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    async function fetchDocument() {
      const givenDocument = await DocumentService.getDocument(id);
      setDocument(givenDocument);
    }
    fetchDocument();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    DocumentService.deleteDocument(document._id);
    setDocument(null);
    history.push("/");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    history.push("/document/update/" + id);
  };

  const handleDownload = (e) => {
    createPDF(document);
  };

  return (
    <div>
      <MyNavBar />
      <Row>
        <Col sm={8}>
          <span>Project Name</span>
          <h1>
            {document && document.name ? document.name : "Not loaded yet"}
          </h1>
          <span>Project Description</span>
          <p>
            {document && document.description
              ? document.description
              : "Not loaded yet"}
          </p>
        </Col>
      </Row>

      <ButtonGroup>
        <Button variant="secondary" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="secondary" onClick={handleEdit}>
          Update
        </Button>
        <Button variant="primary" onClick={handleDownload}>
          Download
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default DocumentDetail;
