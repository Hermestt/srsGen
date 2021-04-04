// Import React Libs
import React, { useContext } from "react";

// Import Context
import { documentContext } from "../../../Contexts/documentContext";

// Import Components and Styles
import { Form, Button, Table } from "react-bootstrap";

// Import Utilities
import randomId from "../../../Utils/randomId";

function StoryForm() {
  const { document, setDocument } = useContext(documentContext);

  const addStory = () => {
    let id = randomId();
    var newAdd = Array.from(document.userStories);
    newAdd.push({ id: id, who: "", wants: "", objective: "" });
    setDocument({ ...document, userStories: newAdd });
  };

  const handleStory = (e) => {
    let name = e.currentTarget.name;
    let id = e.currentTarget.parentNode.parentNode.id;
    let newArr = Array.from(document.userStories);
    var foundIndex = newArr.findIndex((story) => story.id === id);
    newArr[foundIndex][name] = e.currentTarget.value;
    setDocument({ ...document, userStories: newArr });
  };

  const removeStory = (e) => {
    const id = e.target.value;
    var newArr = document.userStories.filter((story) => story.id !== id);
    setDocument({ ...document, userStories: newArr });
  };
  return (
    <Form>
      <h4 className="col-header">User stories</h4>
      <Table bordered hover>
        <thead>
          <tr>
            <th>As a...</th>
            <th>I want to...</th>
            <th>So I can...</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {document.userStories.map((story, i) => (
            <tr key={i} id={story.id}>
              <th>
                <Form.Control
                  name="who"
                  value={story.who}
                  onChange={handleStory}
                />
              </th>
              <th>
                <Form.Control
                  name="wants"
                  value={story.wants}
                  onChange={handleStory}
                />
              </th>
              <th>
                <Form.Control
                  name="objective"
                  value={story.objective}
                  onChange={handleStory}
                />
              </th>
              <th>
                <Button
                  variant="secondary"
                  onClick={removeStory}
                  value={story.id}
                >
                  X
                </Button>
              </th>
            </tr>
          ))}
          <tr>
            <th colSpan={4}>
              <Button variant="light" onClick={addStory}>
                Add story
              </Button>
            </th>
          </tr>
        </tbody>
      </Table>
    </Form>
  );
}

export default StoryForm;
