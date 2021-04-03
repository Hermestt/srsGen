// Import React Libs
import React, { useState, useContext } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

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
  const { document, setDocument } = useContext(documentContext);

  const [documentInfo, setDocumentInfo] = useState({});
  const [documentGPV, setDocumentGPV] = useState({});
  const [documentStories, setDocumentStories] = useState([]);
  const [documentPages, setDocumentPages] = useState([]);
  const [documentBackend, setDocumentBackend] = useState([]);
  const [documentFrontend, setDocumentFrontend] = useState([]);
  const [documentSecurity, setDocumentSecurity] = useState([]);
  const [documentLibraries, setDocumentLibrary] = useState([]);
  const [documentTBR, setDocumentTBR] = useState([]);
  const [documentFeatures, setDocumentFeatures] = useState([]);

  const history = useHistory();

  const onInfoChange = (childName, childValue) => {
    setDocumentInfo({ ...documentInfo, [childName]: childValue });
  };
  const onGPVChange = (childName, childValue) => {
    setDocumentGPV({ ...documentGPV, [childName]: childValue });
  };

  const onStoryChange = (array) => {
    setDocumentStories(array);
  };
  const onPageChange = (array) => {
    setDocumentPages(array);
  };
  const onBackendChange = (array) => {
    setDocumentBackend(array);
  };
  const onFrontendChange = (array) => {
    setDocumentFrontend(array);
  };
  const onSecurityChange = (array) => {
    setDocumentSecurity(array);
  };
  const onLibraryChange = (array) => {
    setDocumentLibrary(array);
  };
  const onFeatureChange = (array) => {
    setDocumentFeatures(array);
  };

  const onTBRChange = (childName, childValue) => {
    setDocumentTBR({ ...documentTBR, [childName]: childValue });
  };

  const handleSubmit = async () => {
    /*documentStories.map((item, i) => delete item.id);
    documentBackend.map((item, i) => delete item.id);
    documentFrontend.map((item, i) => delete item.id);
    documentSecurity.map((item, i) => delete item.id);
    documentLibraries.map((item, i) => delete item.id);
    documentPages.map((item, i) => delete item.id); */
    const doc = factory();
    console.log("doc is ");
    console.log(doc);
    await DocumentService.saveDocument(doc);
    history.push("/");
  };

  const factory = () => {
    let documentPack = {
      creator_id: AuthService.auth.user.id,
      name: documentInfo.name,
      description: documentInfo.description || "",
      goalsAndDescription: {
        goals: documentGPV.goals || "",
        problems: documentGPV.problems || "",
        vision: documentGPV.vision || "",
      },
      userStories: documentStories,
      tech: {
        backend: documentBackend,
        frontend: documentFrontend,
        security: documentSecurity,
        libraries: documentLibraries,
      },
      pages: documentPages,
      timeBudgetRisks: {
        timeline: documentTBR.timeline,
        budget: documentTBR.budget,
        risks: documentTBR.risks,
      },
      features: documentFeatures,
    };
    console.log(documentPack);
    return documentPack;
  };

  return (
    <div>
      <MyNavBar />
      <div className="document-form_container">
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <DocumentForm
              onInfoChange={onInfoChange}
              onGPVChange={onGPVChange}
              onTBRChange={onTBRChange}
              onStoryChange={onStoryChange}
              onPageChange={onPageChange}
              onBackendChange={onBackendChange}
              onFrontendChange={onFrontendChange}
              onSecurityChange={onSecurityChange}
              onLibraryChange={onLibraryChange}
              onFeatureChange={onFeatureChange}
              document={{
                ...documentInfo,
                goalsAndDescriptions: {
                  goals: documentGPV.goals,
                  problems: documentGPV.problems,
                  vision: documentGPV.vision,
                },
                tech: {
                  backend: documentBackend,
                  frontend: documentFrontend,
                  security: documentSecurity,
                  libraries: documentLibraries,
                },
                userStories: documentStories,
                pages: documentPages,
                timeBudgetRisks: {
                  timeline: documentTBR.timeline,
                  budget: documentTBR.budget,
                  risks: documentTBR.risks,
                },
                features: documentFeatures,
              }}
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
