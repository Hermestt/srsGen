// Import React Libs
import React, { useState, useContext } from "react";
import { documentContext, document } from "../../../Contexts/documentContext";

// Import Components and Styles
import { Form, Button } from "react-bootstrap";
import "./DocumentForm.css";
import StoryForm from "./StoryForm";
import PagesForm from "./PagesForm";
import BackendForm from "./BackendForm";
import FrontendForm from "./FrontendForm";
import SecurityForm from "./SecurityForm";
import LibrariesForm from "./LibrariesForm";
import FeaturesForm from "./FeaturesForm";

function DocumentForm() {
  const { document, setDocument } = useContext(documentContext);

  const handleChange = (e) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    setDocument({ ...document, [name]: value });
  };

  console.log(document);

  return (
    <div className="forms-container">
      <Form>
        <h3>Standard information</h3>
        <Form.Group controlId="documentTitle">
          <Form.Label>Document title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="e.g John"
            value={document ? document.title : "empty"}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="documentDescription">
          <Form.Label>Document description</Form.Label>
          <Form.Control
            maxLength={80}
            name="description"
            type="text"
            placeholder="e.g Solving new projects lack of structure"
            value={document ? document.description : "empty"}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <Form>
        <h3>Goals and project description</h3>
        <Form.Group controlId="goals">
          <Form.Label>What is the goal of the project?</Form.Label>
          <Form.Control
            name="goals"
            as="textarea"
            rows={1}
            placeholder="Add answer..."
            value={document ? document.goals : "empty"}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="problems">
          <Form.Label>What problems does the project solve?</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            name="problems"
            placeholder="Add answer..."
            value={document ? document.problems : "empty"}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="vision">
          <Form.Label>What is the vision?</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            name="vision"
            placeholder="Add answer..."
            value={document ? document.vision : "empty"}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <StoryForm />
      <PagesForm />
      <div className="non-func-requirements d-flex">
        <BackendForm />
        <FrontendForm />
        <SecurityForm />
        <LibrariesForm />
      </div>
      <Form>
        <h3>Timeline, budgets and risks</h3>
        <Form.Group controlId="timeline">
          <Form.Label>Timeline</Form.Label>
          <Form.Control
            type="text"
            name="timeline"
            placeholder="e.g. 2 months"
            value={document ? document.timeline : "empty"}
            onChange={handleChange}
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
          />
        </Form.Group>
      </Form>
      <FeaturesForm />
    </div>
  );
}

export default DocumentForm;
