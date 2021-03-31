// Import React Libs
import React from "react";

// Import Components and Styles
import { Form } from "react-bootstrap";

function DocumentForm(props) {
  const document = props.document ? props.document : null;

  return (
    <Form>
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
          type="text"
          placeholder="e.g Solving new projects lack of structure"
          value={document && document.description ? document.description : ""}
          onChange={(e) => {
            props.onFormChange("description", e.target.value);
          }}
        />
      </Form.Group>
    </Form>
  );
}

export default DocumentForm;
