// Import React Libs
import React, { useContext, useEffect } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// React Router Components
import { useHistory, useParams } from "react-router-dom";

// Import Components and Styles
import DocumentForm from "./DocumentForm/DocumentForm";
import MyNavBar from "../NavBar/NavBar";
import { Row, Col, Container } from "react-bootstrap";

// Import Services
import DocumentService from "../../services/DocumentService";

function DocumentUpdate() {
  const history = useHistory();
  let { id } = useParams();

  const { document, setDocument } = useContext(documentContext);

  useEffect(() => {
    async function fetchDocument() {
      const doc = await DocumentService.getDocument(id);
      setDocument(doc);
    }
    fetchDocument();
  }, [id, setDocument]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    document._id = id;
    await DocumentService.updateDocument(document);
    history.push("/dashboard");
  };

  return (
    <div>
      <MyNavBar />
      <Container>
        <div className="document-form_container">
          <Row className="justify-content-md-center">
            <Col>
              <DocumentForm onSubmit={handleSubmit} objective={"update"} />
            </Col>
          </Row>
          <Row className="justify-content-md-center"></Row>
        </div>
      </Container>
    </div>
  );
}

export default DocumentUpdate;
