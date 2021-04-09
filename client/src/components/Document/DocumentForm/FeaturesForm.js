// Import React Libs
import React, { useContext } from "react";

// Import Context
import { documentContext } from "../../../Contexts/documentContext";

// Import Components and Styles
import { Form, Button, Table } from "react-bootstrap";

// Import Utilities
import randomId from "../../../Utils/randomId";

function FeaturesForm() {
  const { document, setDocument } = useContext(documentContext);

  const addFeature = () => {
    let id = randomId();
    var newAdd = Array.from(document.features);

    newAdd.push({ id: id, name: "", description: "" });

    setDocument({ ...document, features: newAdd });
  };

  const handleFeature = (e) => {
    let name = e.currentTarget.name;
    let id = e.currentTarget.parentNode.parentNode.id;
    let value = e.currentTarget.value;

    let newArr = Array.from(document.features);
    var foundIndex = newArr.findIndex((feature) => feature.id === id);
    newArr[foundIndex][name] = value;

    setDocument({ ...document, features: newArr });
  };

  const removeFeature = (e) => {
    const id = e.target.value;

    var newArr = document.features.filter((feature) => feature.id !== id);

    setDocument({ ...document, features: newArr });
  };

  return (
    <Table bordered hover size="sm">
      <thead>
        <tr>
          <th>Feature name</th>
          <th>Feature description</th>
          <th style={{ width: 40 }}></th>
        </tr>
      </thead>
      <tbody>
        {document.features.map((feature, i) => (
          <tr key={i} id={feature.id}>
            <th>
              <Form.Control
                name="name"
                value={feature.name}
                onChange={handleFeature}
              />
            </th>
            <th>
              <Form.Control
                name="description"
                value={feature.description}
                onChange={handleFeature}
                as="textarea"
                row={1}
              />
            </th>
            <th>
              <Button
                variant="secondary"
                onClick={removeFeature}
                value={feature.id}
              >
                X
              </Button>
            </th>
          </tr>
        ))}
        <tr>
          <th colSpan={3}>
            <Button variant="light" onClick={addFeature}>
              Add feature
            </Button>
          </th>
        </tr>
      </tbody>
    </Table>
  );
}

export default FeaturesForm;
