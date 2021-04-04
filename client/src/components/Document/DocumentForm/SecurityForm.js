// Import React Libs
import React, { useContext } from "react";
import { documentContext } from "../../../Contexts/documentContext";
// Import Components and Styles
import { Form, Button } from "react-bootstrap";

function SecurityForm() {
  const { document, setDocument } = useContext(documentContext);

  const addSecurity = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
    var newAdd = Array.from(document.security);
    newAdd.push({ id: id, description: "" });
    setDocument({ ...document, security: newAdd });
  };

  const handleSecurity = (e) => {
    let name = e.currentTarget.name;
    let id = e.currentTarget.parentNode.id;
    console.log(id, name);
    let newArr = Array.from(document.security);
    var foundIndex = newArr.findIndex((security) => security.id == id);
    newArr[foundIndex][name] = e.currentTarget.value;
    setDocument({ ...document, security: newArr });
  };

  const removeSecurity = (e) => {
    const id = e.target.value;
    var newArr = document.security.filter((security) => security.id !== id);
    setDocument({ ...document, security: newArr });
  };

  return (
    <Form>
      <Form.Group controlId="documentSecurity">
        <Form.Label>Security</Form.Label>
        <ul>
          {document.security.map((item, i) => (
            <li key={i} id={item.id}>
              <Form.Control
                name="description"
                value={item.description}
                onChange={handleSecurity}
              />
              <div>
                <Button
                  variant="secondary"
                  onClick={removeSecurity}
                  value={item.id}
                >
                  X
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Form.Group>
      <Button variant="light" onClick={addSecurity}>
        Add new
      </Button>
    </Form>
  );
}

export default SecurityForm;
