// Import React Libs
import React, { useState, useContext } from "react";
import { documentContext, document } from "../../../Contexts/documentContext";
// Import Components and Styles
import { Form, Button } from "react-bootstrap";

function FeaturesForm() {
  const { document, setDocument } = useContext(documentContext);

  const addFeature = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
    var newAdd = Array.from(document.features);
    newAdd.push({ id: id, name: "", description: "" });
    setDocument({ ...document, features: newAdd });
  };

  const handleFeature = (e) => {
    let name = e.currentTarget.name;
    let id = e.currentTarget.parentNode.parentNode.id;
    let newArr = Array.from(document.features);
    var foundIndex = newArr.findIndex((feature) => feature.id == id);
    newArr[foundIndex][name] = e.currentTarget.value;
    setDocument({ ...document, features: newArr });
  };

  const removeFeature = (e) => {
    const id = e.target.value;
    var newArr = document.features.filter((feature) => feature.id !== id);
    setDocument({ ...document, features: newArr });
  };

  return (
    <Form>
      <h3>Features</h3>
      <ul>
        {document.features.map((feature, i) => (
          <li key={i}>
            <Form.Group className="feature-container d-flex" id={feature.id}>
              <div>
                <Form.Label>Feature name</Form.Label>
                <Form.Control
                  name="name"
                  value={feature.name}
                  onChange={handleFeature}
                />
              </div>
              <div>
                <Form.Label>Feature description</Form.Label>
                <Form.Control
                  name="description"
                  value={feature.description}
                  onChange={handleFeature}
                />
              </div>
              <div>
                <Button
                  variant="secondary"
                  onClick={removeFeature}
                  value={feature.id}
                >
                  X
                </Button>
              </div>
            </Form.Group>
          </li>
        ))}
      </ul>
      <Button variant="light" onClick={addFeature}>
        Add feature
      </Button>
    </Form>
  );
}

export default FeaturesForm;
