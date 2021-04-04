// Import React Libs
import React, { useContext, useEffect } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// React Router Components
import { useHistory, useParams } from "react-router-dom";

// Import Components and Styles
import { Button, ButtonGroup, Row, Col, Table } from "react-bootstrap";
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
    setDocument({});
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
      {/*Step 1 ############################################################################################### */}
      <Row id="document-info">
        <Col sm={8}>
          <span>Project title</span>
          <h1>
            {document && document.title ? document.title : "Not loaded yet"}
          </h1>
          <span>Project Description</span>
          <p>
            {document && document.description
              ? document.description
              : "Not loaded yet"}
          </p>
        </Col>
      </Row>

      {/*Step 2 ############################################################################################### */}
      <Row id="document-gpv">
        <Col sm={8}>
          <h3>Goals and Project Description</h3>

          <h5>What is the goal of the project?</h5>
          <p>
            {document && document.goalsAndDescription
              ? document.goalsAndDescription.goals
              : "Not loaded yet"}
          </p>

          <h5>What problems does the project solve?</h5>
          <p>
            {document && document.goalsAndDescription
              ? document.goalsAndDescription.problems
              : "Not loaded yet"}
          </p>

          <h5>What is the vision?</h5>
          <p>
            {document && document.goalsAndDescription
              ? document.goalsAndDescription.vision
              : "Not loaded yet"}
          </p>
        </Col>
      </Row>

      {/*Step 3 ############################################################################################### */}
      <Row id="document-user-stories">
        <Col sm={8}>
          <h3>User stories</h3>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>As a</th>
                <th>I want to</th>
                <th>So I can</th>
              </tr>
            </thead>
            <tbody>
              {document && document.userStories ? (
                document.userStories.map((story, i) => (
                  <tr>
                    <td>{story.who}</td>
                    <td>{story.wants}</td>
                    <td>{story.objective}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>"This document doesn't have user stories"</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/*Step 4 ############################################################################################### */}
      <Row id="document-pages">
        <Col sm={8}>
          <h3>Page description</h3>
          <ul>
            {document && document.pages
              ? document.pages.map((page, i) => (
                  <li>
                    <h5>{page.name}</h5>
                    <p>{page.description}</p>
                  </li>
                ))
              : "This document doesn't have pages"}
          </ul>
        </Col>
      </Row>

      {/*Step 5 ############################################################################################### */}
      <Row id="document-requirements">
        <Col sm={8}>
          <h3>Non-Functional Requirements</h3>
          <div className="multi-form-container d-flex">
            <div className="form-container">
              <ul>
                {document && document.tech
                  ? document.tech.backend.map((item, i) => (
                      <li>
                        <p>{item.description}</p>
                      </li>
                    ))
                  : "No backend"}
              </ul>
            </div>
            <div className="form-container">
              <ul>
                {document && document.tech
                  ? document.tech.frontend.map((item, i) => (
                      <li>
                        <p>{item.description}</p>
                      </li>
                    ))
                  : "No Frontend"}
              </ul>
            </div>
            <div className="form-container">
              <ul>
                {document && document.tech
                  ? document.tech.security.map((item, i) => (
                      <li>
                        <p>{item.description}</p>
                      </li>
                    ))
                  : "No Security"}
              </ul>
            </div>
            <div className="form-container">
              <ul>
                {document && document.tech
                  ? document.tech.libraries.map((item, i) => (
                      <li>
                        <p>{item.description}</p>
                      </li>
                    ))
                  : "No Libraries"}
              </ul>
            </div>
          </div>
        </Col>
      </Row>

      {/*Step 6 ############################################################################################### */}
      <Row id="document-tbr">
        <Col sm={8}>
          <h3>Timeline, Budgets, Risks</h3>

          <h5>Timeline</h5>
          <p>
            {document && document.timeBudgetRisks
              ? document.timeBudgetRisks.timeline
              : "Not loaded yet"}
          </p>

          <h5>Budgets</h5>
          <p>
            {document && document.timeBudgetRisks
              ? document.timeBudgetRisks.budget
              : "Not loaded yet"}
          </p>

          <h5>Risks</h5>
          <p>
            {document && document.timeBudgetRisks
              ? document.timeBudgetRisks.risks
              : "Not loaded yet"}
          </p>
        </Col>
      </Row>
      {/*Step 7 ############################################################################################### */}
      <Row id="document-features">
        <Col sm={8}>
          <h3>Features description</h3>
          <ul>
            {document && document.features
              ? document.features.map((feature, i) => (
                  <li>
                    <h5>{feature.name}</h5>
                    <p>{feature.description}</p>
                  </li>
                ))
              : "This document doesn't have features"}
          </ul>
        </Col>
      </Row>
      {/*

      
      
      BUTTOOOOOOOOOOOOOOOONNNNNNNNNNNNSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
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
