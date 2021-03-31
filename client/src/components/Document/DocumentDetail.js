// Import React Libs
import React, { useContext, useEffect, useState } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// React Router Components
import { useHistory } from "react-router-dom";

// Import Components and Styles
import { Button, ButtonGroup, Row, Col } from "react-bootstrap";
import MyNavBar from "../NavBar/NavBar";

// Import Services
import DocumentService from "../../services/DocumentService";

// Import Plugins
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function DocumentDetail() {
  const history = useHistory();
  const { documentValue, setDocumentValue } = useContext(documentContext);
  const [document, setDocument] = useState(null);

  useEffect(() => {
    async function fetchDocument() {
      const givenDocument = await DocumentService.getDocument(documentValue);
      setDocument(givenDocument);
    }
    fetchDocument();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    DocumentService.deleteDocument(document._id);
    setDocumentValue(null);
    history.push("/");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    history.push("/document/update");
  };

  const handleDownload = (e) => {
    var docDefinition = {
      content: [`${document.name}`, `${document.description}`],
    };
    pdfMake.createPdf(docDefinition).download();
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

      <ButtonGroup aria-label="Basic example">
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
