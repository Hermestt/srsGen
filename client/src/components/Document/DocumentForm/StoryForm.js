// Import React Libs
import React, { useState, useContext } from "react";
import { documentContext, document } from "../../../Contexts/documentContext";
// Import Components and Styles
import { Form, Button } from "react-bootstrap";

function StoryForm() {
  const { document, setDocument } = useContext(documentContext);

  const addStory = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
    var newAdd = Array.from(document.userStories);
    newAdd.push({ id: id, who: "", wants: "", objective: "" });
    setDocument({ ...document, userStories: newAdd });
  };

  const handleStory = (e) => {
    let name = e.currentTarget.name;
    let id = e.currentTarget.parentNode.parentNode.id;
    let newArr = Array.from(document.userStories);
    var foundIndex = newArr.findIndex((story) => story.id == id);
    newArr[foundIndex][name] = e.currentTarget.value;
    setDocument({ ...document, userStories: newArr });
  };

  const removeStory = (e) => {
    const id = e.currentTarget.value;
    console.log("id is " + id);
    var newArr = document.userStories.filter((story) => story.id !== id);
    setDocument({ ...document, userStories: newArr });
  };
  return (
    <Form>
      <h3>User stories</h3>
      <ul>
        {document.userStories.map((story, i) => (
          <li key={i}>
            <Form.Group className="user-story-container d-flex" id={story.id}>
              <div>
                <Form.Label>As a...</Form.Label>
                <Form.Control
                  name="who"
                  onChange={handleStory}
                  value={story.who}
                />
              </div>
              <div>
                <Form.Label>I want to...</Form.Label>
                <Form.Control
                  name="wants"
                  onChange={handleStory}
                  value={story.wants}
                />
              </div>
              <div>
                <Form.Label>So I can...</Form.Label>
                <Form.Control
                  name="objective"
                  onChange={handleStory}
                  value={story.objective}
                />
              </div>
              <div>
                <Button
                  variant="secondary"
                  onClick={removeStory}
                  value={story.id}
                >
                  X
                </Button>
              </div>
            </Form.Group>
          </li>
        ))}
      </ul>
      <Button variant="light" onClick={addStory}>
        Add story
      </Button>
    </Form>
  );
}

export default StoryForm;
