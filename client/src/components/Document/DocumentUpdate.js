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
  const history = useHistory();
  let { id } = useParams();

  const [documentData, setDocumentData] = useState(null);

  {
    /* STATEEES */
  }
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

  useEffect(() => {
    async function fetchDocument() {
      console.log("Document value in update is " + id);
      const doc = await DocumentService.getDocument(id);
      setDocumentData(doc);
    }
    fetchDocument();
  }, []);

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
    const doc = factory();
    console.log("doc is ");
    console.log(doc);
    await DocumentService.updateDocument(doc);
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
              document={
                documentData || {
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
                }
              }
            />
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
