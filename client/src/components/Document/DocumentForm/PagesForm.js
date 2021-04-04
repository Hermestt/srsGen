// Import React Libs
import React, { useContext } from "react";
import { documentContext } from "../../../Contexts/documentContext";
// Import Components and Styles
import { Form, Button } from "react-bootstrap";

function PagesForm() {
  const { document, setDocument } = useContext(documentContext);

  const addPage = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
    var newAdd = Array.from(document.pages);
    newAdd.push({ id: id, name: "", description: "" });
    setDocument({ ...document, pages: newAdd });
  };

  const handlePage = (e) => {
    let name = e.currentTarget.name;
    let id = e.currentTarget.parentNode.parentNode.id;
    let newArr = Array.from(document.pages);
    var foundIndex = newArr.findIndex((page) => page.id === id);
    newArr[foundIndex][name] = e.currentTarget.value;
    setDocument({ ...document, pages: newArr });
  };

  const removePage = (e) => {
    const id = e.target.value;
    var newArr = document.pages.filter((page) => page.id !== id);
    setDocument({ ...document, pages: newArr });
  };

  return (
    <Form>
      <h3>Pages</h3>
      <ul>
        {document.pages.map((page, i) => (
          <li key={i}>
            <Form.Group className="page-container d-flex" id={page.id}>
              <div>
                <Form.Label>Page name</Form.Label>
                <Form.Control
                  name="name"
                  value={page.name}
                  onChange={handlePage}
                />
              </div>
              <div>
                <Form.Label>Page description</Form.Label>
                <Form.Control
                  name="description"
                  value={page.description}
                  onChange={handlePage}
                />
              </div>
              <div>
                <Button
                  variant="secondary"
                  onClick={removePage}
                  value={page.id}
                >
                  X
                </Button>
              </div>
            </Form.Group>
          </li>
        ))}
      </ul>
      <Button variant="light" onClick={addPage}>
        Add page
      </Button>
    </Form>
  );
}

export default PagesForm;
