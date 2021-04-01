// Import React Libs
import React from "react";

// Import Components and Styles
import { Form } from "react-bootstrap";
import "./DocumentForm.css";

function DocumentForm(props) {
  const document = props.document ? props.document : null;

  return (
    <div className="forms-container">
      {/*Step 1 ############################################################################################### */}
      <Form>
        <h3>Standard information</h3>
        <Form.Group controlId="documentTitle">
          <Form.Label>Document title</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g John"
            value={document && document.name ? document.name : ""}
            onChange={(e) => {
              props.onFormChange("name", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="documentDescription">
          <Form.Label>Document description</Form.Label>
          <Form.Control
            maxlength={80}
            type="text"
            placeholder="e.g Solving new projects lack of structure"
            value={document && document.description ? document.description : ""}
            onChange={(e) => {
              props.onFormChange("description", e.target.value);
            }}
          />
        </Form.Group>
      </Form>

      {/*Step 2 ############################################################################################### */}
      <Form>
        <h3>Goals, Problems and Vision</h3>
        <Form.Group controlId="documentGoals">
          <Form.Label>What is the goal of the project?</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group controlId="documentProblems">
          <Form.Label>What problems does the project solve?</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group controlId="documentVision">
          <Form.Label>What is the vision?</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
      </Form>

      {/*Step 3 ############################################################################################### */}
      <Form>
        <h3>User stories</h3>
        <Form.Group controlId="documentGoals">
          <Form.Label>As a</Form.Label>
          <Form.Control />
          <Form.Label>I want to</Form.Label>
          <Form.Control />
          <Form.Label>So that</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form>

      {/*Step 4 ############################################################################################### */}
      <Form>
        <h3>Pages</h3>
        <Form.Group controlId="documentGoals">
          <Form.Label>Page name</Form.Label>
          <Form.Control />
          <Form.Label>Page structure</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form>

      {/*Step 5 ############################################################################################### */}
      <Form>
        <h3>Non-Functional Requirements</h3>
        <Form.Group controlId="documentGoals">
          <Form.Label>Backend</Form.Label>
          <Form.Control />
          <Form.Label>Frontend</Form.Label>
          <Form.Control />
          <Form.Label>Specification and configuration</Form.Label>
          <Form.Control />
          <Form.Label>Third-party libraries</Form.Label>
          <Form.Control />
          <Form.Label>Security</Form.Label>
          <Form.Control />
          <Form.Label>Devops</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form>

      {/*Step 6 ############################################################################################### */}
      <Form>
        <h3>Timeline, budgets and Risks</h3>
        <Form.Group controlId="documentGoals">
          <Form.Label>Timeline</Form.Label>
          <Form.Control />
          <Form.Label>Budgets</Form.Label>
          <Form.Control />
          <Form.Label>Risks</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form>

      {/*Step 7 ############################################################################################### */}
      <Form>
        <h3>Future implementations</h3>
        <Form.Group controlId="documentGoals">
          <Form.Label>Feature</Form.Label>
          <Form.Control />
          <Form.Label>Description</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form>
    </div>
  );
}

export default DocumentForm;
