// Import React Libs
import React, { useContext } from "react";

// Import Context
import { documentContext } from "../../../Contexts/documentContext";

// Import Components and Styles
import { Form, Button, Table } from "react-bootstrap";

// Import Utilities
import randomId from "../../../Utils/randomId";

function PagesForm() {
  const { document, setDocument } = useContext(documentContext);

  const addPage = () => {
    let id = randomId();
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
      <h4 className="col-header">Project pages</h4>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Page name</th>
            <th>Page description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {document.pages.map((page, i) => (
            <tr key={i} id={page.id}>
              <th>
                <Form.Control
                  name="name"
                  value={page.name}
                  onChange={handlePage}
                />
              </th>
              <th>
                <Form.Control
                  name="description"
                  value={page.description}
                  onChange={handlePage}
                />
              </th>
              <th>
                <Button
                  variant="secondary"
                  onClick={removePage}
                  value={page.id}
                >
                  X
                </Button>
              </th>
            </tr>
          ))}
          <tr>
            <th colSpan={3}>
              <Button variant="light" onClick={addPage}>
                Add page
              </Button>
            </th>
          </tr>
        </tbody>
      </Table>
    </Form>
  );
}

export default PagesForm;
