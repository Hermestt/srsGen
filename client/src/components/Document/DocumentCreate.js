// Import React Libs
import React, { useContext } from "react";

// Import Utils
import emptyDoc from "../../Utils/doc";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// Import Components and Styles
import { Row, Col } from "react-bootstrap";
import MyNavBar from "../NavBar/NavBar";
import DocumentForm from "./DocumentForm/DocumentForm";
import "./DocumentForm/DocumentForm.css";

// React Router Components
import { useHistory } from "react-router-dom";

// Import Services
import DocumentService from "../../services/DocumentService";
import AuthService from "../../services/AuthService";

function DocumentCreate() {
  const history = useHistory();
  const { document, setDocument } = useContext(documentContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.creator_id = AuthService.auth.user.id;
    await DocumentService.saveDocument(document);
    setDocument(emptyDoc);
    history.push("/");
  };

  return (
    <div>
      <MyNavBar />
      <div className="document-form_container">
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <DocumentForm onSubmit={handleSubmit} objective={"save"} />
          </Col>
        </Row>
        <Row className="justify-content-md-center"></Row>
      </div>
    </div>
  );
}

export default DocumentCreate;
