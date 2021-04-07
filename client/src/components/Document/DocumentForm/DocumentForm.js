// Import React Libs
import React, { useContext } from "react";
import { documentContext } from "../../../Contexts/documentContext";

// Import Components and Styles
import { Form } from "react-bootstrap";
import StoryForm from "./StoryForm";
import PagesForm from "./PagesForm";
import BackendForm from "./BackendForm";
import FrontendForm from "./FrontendForm";
import SecurityForm from "./SecurityForm";
import LibrariesForm from "./LibrariesForm";
import FeaturesForm from "./FeaturesForm";
import "./DocumentForm.css";

function DocumentForm() {
  const { document, setDocument } = useContext(documentContext);

  const handleChange = (e) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    setDocument({ ...document, [name]: value });
  };

  return (
    <div className="forms-container">
      <Form>
        <h4 className="col-header">Standard Information</h4>
        <Form.Group controlId="documentTitle">
          <Form.Label>Document title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="e.g John"
            value={document ? document.title : "empty"}
            onChange={handleChange}
            maxLength={69}
            required
          />
        </Form.Group>
        <Form.Group controlId="documentDescription">
          <Form.Label>Document description</Form.Label>
          <Form.Control
            maxLength={203}
            name="description"
            as="textarea"
            row={2}
            placeholder="e.g Solving new projects lack of structure"
            value={document ? document.description : "empty"}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Form>
      <Form>
        <h4 className="col-header">Goals and Project Description</h4>
        <Form.Group controlId="goals">
          <Form.Label>What is the goal of the project?</Form.Label>
          <Form.Control
            maxLength={203}
            row={2}
            name="goals"
            as="textarea"
            placeholder="Add answer..."
            value={document ? document.goals : "empty"}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="problems">
          <Form.Label>What problems does the project solve?</Form.Label>
          <Form.Control
            maxLength={203}
            row={2}
            as="textarea"
            name="problems"
            placeholder="Add answer..."
            value={document ? document.problems : "empty"}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="vision">
          <Form.Label>What is the vision?</Form.Label>
          <Form.Control
            maxLength={203}
            row={2}
            as="textarea"
            name="vision"
            placeholder="Add answer..."
            value={document ? document.vision : "empty"}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <StoryForm />
      <PagesForm />
      <Form>
        <h4 className="col-header">Non-Functional Requirements</h4>
        <div className="non-func-forms">
          <BackendForm />
          <FrontendForm />
          <SecurityForm />
          <LibrariesForm />
        </div>
      </Form>
      <Form>
        <h4 className="col-header">Timeline, budgets and risks</h4>
        <Form.Group controlId="timeline">
          <Form.Label>Timeline</Form.Label>
          <Form.Control
            type="text"
            name="timeline"
            placeholder="e.g. 2 months"
            value={document ? document.timeline : "empty"}
            onChange={handleChange}
            maxLength={115}
          />
        </Form.Group>
        <Form.Group controlId="budget">
          <Form.Label>Budget</Form.Label>
          <Form.Control
            type="text"
            name="budget"
            placeholder="e.g. €1000"
            value={document ? document.budget : "empty"}
            onChange={handleChange}
            maxLength={115}
          />
        </Form.Group>
        <Form.Group controlId="risks">
          <Form.Label>Risks</Form.Label>
          <Form.Control
            type="text"
            name="risks"
            placeholder="e.g. burnout!"
            value={document ? document.risks : "empty"}
            onChange={handleChange}
            maxLength={115}
          />
        </Form.Group>
      </Form>
      <FeaturesForm />
    </div>
  );
}

export default DocumentForm;
