// Import React Libs
import React, { useContext, useEffect } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// React Router Components
import { useHistory, useParams } from "react-router-dom";

// Import Components and Styles
import { Row, Col, Table, ListGroup, Dropdown } from "react-bootstrap";
import MyNavBar from "../NavBar/NavBar";
import "./DocumentDetail.css";

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
  }, [id, setDocument]);

  const handleDelete = (e) => {
    e.preventDefault();
    DocumentService.deleteDocument(document._id);
    setDocument({});
    history.push("/");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    history.push("/document/update/" + id);
  };

  const handleDownload = (e) => {
    createPDF(document);
  };

  return (
    <div>
      <MyNavBar />
      <Row className="document-view-container">
        {/*Step 1 ############################################################################################### */}
        <Row id="document-info" className="justify-content-md-center">
          <Col lg={8} className="container">
            <div style={{ flexGrow: 1 }}>
              <h1>{document.title ? document.title : "No title was given"}</h1>
              <h5>
                {document.description
                  ? document.description
                  : "No description was given"}
              </h5>
            </div>
            <div className="dropdown-container">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">Actions</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1" onClick={handleDownload}>
                    Download
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2" onClick={handleUpdate}>
                    Update Document
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    style={{ color: "red" }}
                    eventKey="4"
                    onClick={handleDelete}
                  >
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>

        {/*Step 2 ############################################################################################### */}
        <Row id="document-gpv" className="justify-content-md-center">
          <Col lg={8}>
            <h4 className="col-header">Goals and Project Description</h4>

            <h6 className="fw-bold">What is the goal of the project?</h6>
            <p>{document.goals ? document.goals : "No goals"}</p>

            <h6 className="fw-bold">What problems does the project solve?</h6>
            <p>{document.problems ? document.problems : "No problems"}</p>

            <h6 className="fw-bold">What is the vision?</h6>
            <p>{document.vision ? document.vision : "No vision"}</p>
          </Col>
        </Row>

        {/*Step 3 ############################################################################################### */}
        <Row id="document-user-stories" className="justify-content-md-center">
          <Col lg={8}>
            <h4 className="col-header">User stories</h4>

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
          <Col lg={8}>
            <h4 className="col-header">Pages</h4>
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
        <Row id="document-requirements" className="justify-content-md-center">
          <Col lg={8}>
            <h4 className="col-header">Non-Functional Requirements</h4>
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
          <Col lg={8}>
            <h4 className="col-header">Timeline, Budgets, Risks</h4>

            <h6 className="fw-bold">Timeline</h6>
            <p>{document.timeline ? document.timeline : "Not loaded yet"}</p>

            <h6 className="fw-bold">Budgets</h6>
            <p>{document.budget ? document.budget : "Not loaded yet"}</p>

            <h6 className="fw-bold">Risks</h6>
            <p>{document.risks ? document.risks : "Not loaded yet"}</p>
          </Col>
        </Row>
        {/*Step 7 ############################################################################################### */}
        <Row id="document-features" className="justify-content-md-center">
          <Col lg={8}>
            <h4 className="col-header">Future implementations</h4>
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
    </div>
  );
}

export default DocumentDetail;
