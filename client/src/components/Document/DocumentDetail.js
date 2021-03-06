// Import React Libs
import React, { useContext, useEffect, useState } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// React Router Components
import { useHistory, useParams } from "react-router-dom";

// Import Components and Styles
import {
  Row,
  Col,
  Table,
  ListGroup,
  Dropdown,
  Modal,
  Button,
  Container,
  Spinner,
} from "react-bootstrap";
import MyNavBar from "../NavBar/NavBar";
import NoDocument from "./DocumentForm/NoDocument/NoDocument";
import "./DocumentDetail.css";

// Import Services
import DocumentService from "../../services/DocumentService";

// Import Utils
import createPDF from "../../Utils/pdf";

function DocumentDetail() {
  const { document, setDocument } = useContext(documentContext);
  const history = useHistory();
  let { id } = useParams();

  // Loading state for download interaction
  const [isLoading, setIsLoading] = useState(false);

  // This state will handle the case of the user trying to access a non-existing document.
  const [documentExist, setDocumentExist] = useState(true);
  useEffect(() => {
    async function fetchDocument() {
      const givenDocument = await DocumentService.getDocument(id);

      givenDocument === undefined
        ? setDocumentExist(false)
        : setDocument(givenDocument);
    }
    fetchDocument();
  }, [documentExist, id, setDocument]);

  // Download, Update and Delete functions
  const handleDownload = (e) => {
    setIsLoading(true);
    createPDF(document);
    setIsLoading(false);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    history.push("/document/update/" + id);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setShow(false);
    DocumentService.deleteDocument(document._id);
    setDocument({});
    history.push("/dashboard");
  };

  // Delete Warning Modal state and handling states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>BEWARE!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You're about to delete this document. Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes, delete.
          </Button>
        </Modal.Footer>
      </Modal>
      <MyNavBar />

      {documentExist ? (
        <Container fluid>
          <Row className="document-view-container">
            {/*Step 1 ############################################################################################### */}

            <Row id="document-info" className="justify-content-md-center">
              <Col xl={6} lg={8}>
                <h1>
                  {document.title ? document.title : "No title was given"}
                </h1>
                <h5>
                  {document.description
                    ? document.description
                    : "No description was given"}
                </h5>
                <Dropdown style={{ marginTop: 32 }}>
                  <Dropdown.Toggle id="dropdown-basic" variant="outline-light">
                    Options
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {isLoading ? (
                      <Dropdown.Item eventKey="2" onClick={handleDownload}>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      </Dropdown.Item>
                    ) : (
                      <Dropdown.Item eventKey="2" onClick={handleDownload}>
                        Download
                      </Dropdown.Item>
                    )}
                    <Dropdown.Item eventKey="2" onClick={handleUpdate}>
                      Update Document
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      style={{ color: "red" }}
                      eventKey="4"
                      onClick={handleShow}
                    >
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

            {/*Step 2 ############################################################################################### */}
            <Row id="document-gpv" className="justify-content-md-center">
              <Col xl={6} lg={8}>
                <h4 className="col-header fw-bold">
                  Goals and Project Description
                </h4>

                <h6 className="fw-bold information-label">
                  What is the goal of the project?
                </h6>
                <p>{document.goals ? document.goals : "No goals"}</p>

                <h6 className="fw-bold information-label">
                  What problems does the project solve?
                </h6>
                <p>{document.problems ? document.problems : "No problems"}</p>

                <h6 className="fw-bold information-label">
                  What is the vision?
                </h6>
                <p>{document.vision ? document.vision : "No vision"}</p>
              </Col>
            </Row>

            {/*Step 3 ############################################################################################### */}
            <Row
              id="document-user-stories"
              className="justify-content-md-center"
            >
              <Col xl={6} lg={8}>
                <h4 className="col-header fw-bold">User stories</h4>

                <Table bordered>
                  <thead>
                    <tr>
                      <th>As a</th>
                      <th>I want to</th>
                      <th>So I can</th>
                    </tr>
                  </thead>
                  <tbody>
                    {document.userStories ? (
                      document.userStories.map((story, i) => (
                        <tr key={i}>
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
            <Row id="document-pages" className="justify-content-md-center">
              <Col xl={6} lg={8}>
                <h4 className="col-header fw-bold">Pages</h4>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Page name</th>
                      <th>Page description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {document.pages ? (
                      document.pages.map((item, i) => (
                        <tr key={i}>
                          <td>{item.name}</td>
                          <td>{item.description}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td>"This document doesn't have pages"</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Col>
            </Row>

            {/*Step 5 ############################################################################################### */}
            <Row
              id="document-requirements"
              className="justify-content-md-center"
            >
              <Col xl={6} lg={8}>
                <h4 className="col-header  fw-bold">
                  Non-Functional Requirements
                </h4>
                <div className="multi-form-container">
                  <div className="form-container">
                    <ListGroup>
                      <ListGroup.Item variant="light">Backend</ListGroup.Item>
                      {document.backend
                        ? document.backend.map((item, i) => (
                            <ListGroup.Item key={i}>
                              <p>{item.description}</p>
                            </ListGroup.Item>
                          ))
                        : "No backend"}
                    </ListGroup>
                  </div>
                  <div className="form-container">
                    <ListGroup>
                      <ListGroup.Item variant="light">Frontend</ListGroup.Item>
                      {document.frontend
                        ? document.frontend.map((item, i) => (
                            <ListGroup.Item key={i}>
                              <p>{item.description}</p>
                            </ListGroup.Item>
                          ))
                        : "No frontend"}
                    </ListGroup>
                  </div>
                  <div className="form-container">
                    <ListGroup>
                      <ListGroup.Item variant="light">Security</ListGroup.Item>
                      {document.security
                        ? document.security.map((item, i) => (
                            <ListGroup.Item key={i}>
                              <p>{item.description}</p>
                            </ListGroup.Item>
                          ))
                        : "No security"}
                    </ListGroup>
                  </div>
                  <div className="form-container">
                    <ListGroup>
                      <ListGroup.Item variant="light">Libraries</ListGroup.Item>
                      {document.libraries
                        ? document.libraries.map((item, i) => (
                            <ListGroup.Item key={i}>
                              <p>{item.description}</p>
                            </ListGroup.Item>
                          ))
                        : "No libraries"}
                    </ListGroup>
                  </div>
                </div>
              </Col>
            </Row>

            {/*Step 6 ############################################################################################### */}
            <Row id="document-tbr" className="justify-content-md-center">
              <Col xl={6} lg={8}>
                <h4 className="col-header  fw-bold">
                  Timeline, Budgets, Risks
                </h4>

                <h6 className="fw-bold information-label">Timeline</h6>
                <p>
                  {document.timeline ? document.timeline : "Not loaded yet"}
                </p>

                <h6 className="fw-bold information-label">Budgets</h6>
                <p>{document.budget ? document.budget : "Not loaded yet"}</p>

                <h6 className="fw-bold information-label">Risks</h6>
                <p>{document.risks ? document.risks : "Not loaded yet"}</p>
              </Col>
            </Row>
            {/*Step 7 ############################################################################################### */}
            <Row id="document-features" className="justify-content-md-center">
              <Col xl={6} lg={8}>
                <h4 className="col-header  fw-bold">Future implementations</h4>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Feature name</th>
                      <th>Feature description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {document.features ? (
                      document.features.map((item, i) => (
                        <tr key={i}>
                          <td>{item.name}</td>
                          <td>{item.description}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td>"This document doesn't have features"</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Row>
        </Container>
      ) : (
        <NoDocument />
      )}
    </div>
  );
}

export default DocumentDetail;
