// Import React Libs
import React, { useContext } from "react";
import { documentContext } from "../../../Contexts/documentContext";
// Import Components and Styles
import { Form, Button, ListGroup } from "react-bootstrap";

// Import Utilities
import randomId from "../../../Utils/randomId";

function SecurityForm() {
  const { document, setDocument } = useContext(documentContext);

  const addSecurity = () => {
    let id = randomId();
    var newAdd = Array.from(document.security);
    newAdd.push({ id: id, description: "" });
    setDocument({ ...document, security: newAdd });
  };

  const handleSecurity = (e) => {
    let name = e.currentTarget.name;
    let id = e.currentTarget.parentNode.id;
    console.log(id, name);
    let newArr = Array.from(document.security);
    var foundIndex = newArr.findIndex((security) => security.id === id);
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
        <ListGroup>
          <ListGroup.Item variant="light">Security</ListGroup.Item>
          {document.security.map((item, i) => (
            <ListGroup.Item key={i} id={item.id} className="d-flex">
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
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
            <Button variant="light" onClick={addSecurity}>
              Add new
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Form.Group>
    </Form>
  );
}

export default SecurityForm;
