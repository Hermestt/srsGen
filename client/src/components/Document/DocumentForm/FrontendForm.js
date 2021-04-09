// Import React Libs
import React, { useContext } from "react";
import { documentContext } from "../../../Contexts/documentContext";

// Import Components and Styles
import { Form, Button, ListGroup } from "react-bootstrap";

// Import Utilities
import randomId from "../../../Utils/randomId";

function FrontendForm() {
  const { document, setDocument } = useContext(documentContext);

  const addFrontend = () => {
    let id = randomId();
    var newAdd = Array.from(document.frontend);
    newAdd.push({ id: id, description: "" });
    setDocument({ ...document, frontend: newAdd });
  };

  const handleFrontend = (e) => {
    let name = e.currentTarget.name;
    let id = e.currentTarget.parentNode.id;
    console.log(id, name);
    let newArr = Array.from(document.frontend);
    var foundIndex = newArr.findIndex((frontend) => frontend.id === id);
    newArr[foundIndex][name] = e.currentTarget.value;
    setDocument({ ...document, frontend: newArr });
  };

  const removeFrontend = (e) => {
    const id = e.target.value;
    var newArr = document.frontend.filter((frontend) => frontend.id !== id);
    setDocument({ ...document, frontend: newArr });
  };

  return (
    <Form.Group controlId="documentFrontend">
      <ListGroup>
        <ListGroup.Item variant="light" className="fw-bold">
          Frontend
        </ListGroup.Item>
        {document.frontend.map((item, i) => (
          <ListGroup.Item key={i} id={item.id} className="d-flex">
            <Form.Control
              maxLength={50}
              name="description"
              value={item.description}
              onChange={handleFrontend}
            />
            <Button
              className="remove-btn"
              variant="secondary"
              onClick={removeFrontend}
              value={item.id}
            >
              X
            </Button>
          </ListGroup.Item>
        ))}
        <ListGroup.Item>
          <Button variant="light" onClick={addFrontend}>
            Add new
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Form.Group>
  );
}

export default FrontendForm;
