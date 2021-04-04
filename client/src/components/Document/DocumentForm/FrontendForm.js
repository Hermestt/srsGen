// Import React Libs
import React, { useContext } from "react";
import { documentContext } from "../../../Contexts/documentContext";
// Import Components and Styles
import { Form, Button } from "react-bootstrap";

function FrontendForm() {
  const { document, setDocument } = useContext(documentContext);

  const addFrontend = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
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
    <Form>
      <Form.Group controlId="documentFrontend">
        <Form.Label>Frontend</Form.Label>
        <ul>
          {document.frontend.map((item, i) => (
            <li key={i} id={item.id}>
              <Form.Control
                name="description"
                value={item.description}
                onChange={handleFrontend}
              />
              <div>
                <Button
                  variant="secondary"
                  onClick={removeFrontend}
                  value={item.id}
                >
                  X
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Form.Group>
      <Button variant="light" onClick={addFrontend}>
        Add new
      </Button>
    </Form>
  );
}

export default FrontendForm;
