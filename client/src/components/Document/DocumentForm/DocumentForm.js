// Import React Libs
import React, { useContext } from "react";
import { documentContext } from "../../../Contexts/documentContext";

// Import Components and Styles
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import StoryForm from "./StoryForm";
import PagesForm from "./PagesForm";
import BackendForm from "./BackendForm";
import FrontendForm from "./FrontendForm";
import SecurityForm from "./SecurityForm";
import LibrariesForm from "./LibrariesForm";
import FeaturesForm from "./FeaturesForm";
import "./DocumentForm.css";

function DocumentForm(props) {
  const { document, setDocument } = useContext(documentContext);

  const handleChange = (e) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    setDocument({ ...document, [name]: value });
  };

  return (
    <Container className="forms-container">
      <Row className="d-flex justify-content-center">
        <Col lg={8}>
          <Form onSubmit={props.onSubmit}>
            {/*Step 1 ############################################################################################### */}
            <h4 className="col-header fw-bold" style={{ marginTop: 0 }}>
              Document Information
            </h4>
            <Form.Group controlId="documentTitle">
              <Form.Label className="fw-bold">Document title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={document ? document.title : "empty"}
                onChange={handleChange}
                maxLength={69}
                required
              />
            </Form.Group>
            <Form.Group controlId="documentDescription">
              <Form.Label className="fw-bold">Document description</Form.Label>
              <Form.Control
                maxLength={300}
                name="description"
                as="textarea"
                row={2}
                value={document ? document.description : "empty"}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {/*Step 2 ############################################################################################### */}
            <h4 className="col-header fw-bold">
              Goals and Project Description
            </h4>
            <Form.Group controlId="goals">
              <Form.Label className="fw-bold">
                What is the goal of the project?
              </Form.Label>
              <Form.Control
                maxLength={300}
                row={2}
                name="goals"
                as="textarea"
                value={document ? document.goals : "empty"}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="problems">
              <Form.Label className="fw-bold">
                What problems does the project solve?
              </Form.Label>
              <Form.Control
                maxLength={300}
                row={2}
                as="textarea"
                name="problems"
                value={document ? document.problems : "empty"}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="vision">
              <Form.Label className="fw-bold">What is the vision?</Form.Label>
              <Form.Control
                maxLength={300}
                row={2}
                as="textarea"
                name="vision"
                value={document ? document.vision : "empty"}
                onChange={handleChange}
              />
            </Form.Group>
            {/*Step 3 ############################################################################################### */}
            <h4 className="col-header fw-bold">User stories</h4>
            <StoryForm />
            {/*Step 4 ############################################################################################### */}
            <h4 className="col-header fw-bold">Pages</h4>
            <PagesForm />
            {/*Step 5 ############################################################################################### */}
            <h4 className="col-header fw-bold">Non-Functional Requirements</h4>
            <div className="non-func-forms" style={{ marginTop: -24 }}>
              <BackendForm />
              <FrontendForm />
              <SecurityForm />
              <LibrariesForm />
            </div>
            {/*Step 5 ############################################################################################### */}
            <h4 className="col-header fw-bold">Timeline, budgets and risks</h4>
            <Form.Group controlId="timeline">
              <Form.Label className="fw-bold">Timeline</Form.Label>
              <Form.Control
                as="textarea"
                row={1}
                name="timeline"
                value={document ? document.timeline : "empty"}
                onChange={handleChange}
                maxLength={115}
              />
            </Form.Group>
            <Form.Group controlId="budget">
              <Form.Label className="fw-bold">
                Budget (numeric field)
              </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>€</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  name="budget"
                  value={document ? document.budget : "empty"}
                  onChange={handleChange}
                  maxLength={115}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="risks">
              <Form.Label className="fw-bold">Risks</Form.Label>
              <Form.Control
                as="textarea"
                row={1}
                name="risks"
                value={document ? document.risks : "empty"}
                onChange={handleChange}
                maxLength={115}
              />
            </Form.Group>
            {/*Step 6 ############################################################################################### */}
            <h4 className="col-header fw-bold">Future features</h4>
            <FeaturesForm />
            <hr style={{ marginTop: 40, marginBottom: 40 }} />
            {/*BUTTONS ############################################################################################### */}
            {props.objective === "update" ? (
              <Button value="update" variant="primary" type="submit" block>
                Update
              </Button>
            ) : (
              <Button value="save" variant="primary" type="submit" block>
                Save
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DocumentForm;
