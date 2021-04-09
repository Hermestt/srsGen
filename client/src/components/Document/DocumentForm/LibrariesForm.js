// Import React Libs
import React, { useContext } from "react";
import { documentContext } from "../../../Contexts/documentContext";
// Import Components and Styles
import { Form, Button, ListGroup } from "react-bootstrap";

// Import Utilities
import randomId from "../../../Utils/randomId";

function LibrariesForm() {
  const { document, setDocument } = useContext(documentContext);

  const addLibraries = () => {
    let id = randomId();
    var newAdd = Array.from(document.libraries);
    newAdd.push({ id: id, description: "" });
    setDocument({ ...document, libraries: newAdd });
  };

  const handleLibraries = (e) => {
    let name = e.currentTarget.name;
    let id = e.currentTarget.parentNode.id;
    console.log(id, name);
    let newArr = Array.from(document.libraries);
    var foundIndex = newArr.findIndex((libraries) => libraries.id === id);
    newArr[foundIndex][name] = e.currentTarget.value;
    setDocument({ ...document, libraries: newArr });
  };

  const removeLibraries = (e) => {
    const id = e.target.value;
    var newArr = document.libraries.filter((libraries) => libraries.id !== id);
    setDocument({ ...document, libraries: newArr });
  };

  return (
    <Form.Group controlId="documentLibraries">
      <ListGroup>
        <ListGroup.Item variant="light" className="fw-bold">
          Libraries
        </ListGroup.Item>
        {document.libraries.map((item, i) => (
          <ListGroup.Item key={i} id={item.id} className="d-flex">
            <Form.Control
              maxLength={50}
              name="description"
              value={item.description}
              onChange={handleLibraries}
            />
            <Button
              className="remove-btn"
              variant="secondary"
              onClick={removeLibraries}
              value={item.id}
            >
              X
            </Button>
          </ListGroup.Item>
        ))}
        <ListGroup.Item>
          <Button variant="light" onClick={addLibraries}>
            Add new
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Form.Group>
  );
}

export default LibrariesForm;
