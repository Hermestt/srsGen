// Import React Libs
import React, { useContext } from "react";
import { documentContext } from "../../../Contexts/documentContext";
// Import Components and Styles
import { Form, Button, ListGroup } from "react-bootstrap";

// Import Utilities
import randomId from "../../../Utils/randomId";

function BackendForm() {
  const { document, setDocument } = useContext(documentContext);

  const addBackend = () => {
    let id = randomId();
    var newAdd = Array.from(document.backend);
    newAdd.push({ id: id, description: "" });
    setDocument({ ...document, backend: newAdd });
  };

  const handleBackend = (e) => {
    let name = e.currentTarget.name;
    let id = e.currentTarget.parentNode.id;
    console.log(id, name);
    let newArr = Array.from(document.backend);
    var foundIndex = newArr.findIndex((backend) => backend.id === id);
    newArr[foundIndex][name] = e.currentTarget.value;
    setDocument({ ...document, backend: newArr });
  };

  const removeBackend = (e) => {
    const id = e.target.value;
    var newArr = document.backend.filter((backend) => backend.id !== id);
    setDocument({ ...document, backend: newArr });
  };

  return (
    <Form.Group controlId="documentBackend">
      <ListGroup>
        <ListGroup.Item variant="light" className="fw-bold">
          Backend
        </ListGroup.Item>
        {document.backend.map((item, i) => (
          <ListGroup.Item key={i} id={item.id} className="d-flex">
            <Form.Control
              maxLength={50}
              name="description"
              value={item.description}
              onChange={handleBackend}
            />
            <Button
              variant="secondary"
              onClick={removeBackend}
              value={item.id}
              className="remove-btn"
            >
              X
            </Button>
          </ListGroup.Item>
        ))}
        <ListGroup.Item>
          <Button variant="light" onClick={addBackend}>
            Add new
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Form.Group>
  );
}

export default BackendForm;
