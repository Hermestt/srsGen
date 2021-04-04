// Import React Libs
import React, { useContext } from "react";
import { documentContext } from "../../../Contexts/documentContext";
// Import Components and Styles
import { Form, Button } from "react-bootstrap";

function LibrariesForm() {
  const { document, setDocument } = useContext(documentContext);

  const addLibraries = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
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
    <Form>
      <Form.Group controlId="documentLibraries">
        <Form.Label>Libraries</Form.Label>
        <ul>
          {document.libraries.map((item, i) => (
            <li key={i} id={item.id}>
              <Form.Control
                name="description"
                value={item.description}
                onChange={handleLibraries}
              />
              <div>
                <Button
                  variant="secondary"
                  onClick={removeLibraries}
                  value={item.id}
                >
                  X
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Form.Group>
      <Button variant="light" onClick={addLibraries}>
        Add new
      </Button>
    </Form>
  );
}

export default LibrariesForm;
