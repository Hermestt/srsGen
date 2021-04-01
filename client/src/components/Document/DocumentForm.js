// Import React Libs
import React, { useState } from "react";

// Import Components and Styles
import { Form, Button } from "react-bootstrap";
import "./DocumentForm.css";

function DocumentForm(props) {
  const document = props.document ? props.document : null;

  // STORIES HANDLES AND STATE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  const [stories, setStories] = useState([]);
  const addStory = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
    var newAdd = Array.from(stories);
    newAdd.push({ id: id, who: "", wants: "", objective: "" });
    setStories(newAdd);
  };

  const handleStory = (name, id, value) => {
    let newArr = Array.from(stories);
    var foundIndex = newArr.findIndex((story) => story.id == id);
    newArr[foundIndex][name] = value;
    props.onStoryChange(newArr);
    setStories(newArr);
  };

  const removeStory = (e) => {
    const id = e.target.value;
    var newArr = stories.filter((story) => story.id !== id);
    setStories(newArr);
  };

  // PAGES HANDLES AND STATE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  const [pages, setPages] = useState([]);
  const addPage = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
    var newAdd = Array.from(pages);
    newAdd.push({ id: id, who: "", wants: "", objective: "" });
    setPages(newAdd);
  };

  const handlePage = (name, id, value) => {
    let newArr = Array.from(pages);
    var foundIndex = newArr.findIndex((page) => page.id == id);
    newArr[foundIndex][name] = value;
    props.onPageChange(newArr);
    setPages(newArr);
  };

  const removePage = (e) => {
    const id = e.target.value;
    var newArr = pages.filter((page) => page.id !== id);
    setPages(newArr);
  };

  // FUTURE IMPLEMENTATIONS HANDLES AND STATE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  const [features, setFeatures] = useState([]);
  const addFeature = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
    var newAdd = Array.from(features);
    newAdd.push({ id: id, name: "", description: "" });
    setFeatures(newAdd);
  };

  const handleFeature = (name, id, value) => {
    let newArr = Array.from(features);
    var foundIndex = newArr.findIndex((page) => page.id == id);
    newArr[foundIndex][name] = value;
    props.onPageChange(newArr);
    setFeatures(newArr);
  };

  const removeFeature = (e) => {
    const id = e.target.value;
    var newArr = features.filter((page) => page.id !== id);
    setFeatures(newArr);
  };

  // BackEnd $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  const [backend, setBackend] = useState([]);
  const addBackend = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
    var newAdd = Array.from(backend);
    newAdd.push({ id: id, description: "" });
    setBackend(newAdd);
  };

  console.log(backend);

  const handleBackend = (name, id, value) => {
    let newArr = Array.from(backend);
    var foundIndex = newArr.findIndex((backend) => backend.id == id);
    newArr[foundIndex][name] = value;
    props.onBackendChange(newArr);
    setBackend(newArr);
  };

  const removeBackend = (e) => {
    const id = e.target.value;
    var newArr = backend.filter((backend) => backend.id !== id);
    setBackend(newArr);
  };

  return (
    <div className="forms-container">
      {/*Step 1 ############################################################################################### */}
      <Form>
        <h3>Standard information</h3>
        <Form.Group controlId="documentTitle">
          <Form.Label>Document title</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g John"
            value={document && document.name ? document.name : ""}
            onChange={(e) => {
              props.onInfoChange("name", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="documentDescription">
          <Form.Label>Document description</Form.Label>
          <Form.Control
            maxLength={80}
            type="text"
            placeholder="e.g Solving new projects lack of structure"
            value={document && document.description ? document.description : ""}
            onChange={(e) => {
              props.onInfoChange("description", e.target.value);
            }}
          />
        </Form.Group>
      </Form>

      {/*Step 2 ############################################################################################### */}
      <Form>
        <h3>Goals, Problems and Vision</h3>
        <Form.Group controlId="documentGoals">
          <Form.Label>What is the goal of the project?</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group controlId="documentProblems">
          <Form.Label>What problems does the project solve?</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group controlId="documentVision">
          <Form.Label>What is the vision?</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
      </Form>

      {/*Step 3 ############################################################################################### */}
      <Form>
        <h3>User stories</h3>
        <ul>
          {stories.map((story, i) => (
            <li key={i}>
              <Form.Group className="user-story-container d-flex">
                <div>
                  <Form.Label>As a...</Form.Label>
                  <Form.Control
                    value={story.who}
                    onChange={(e) =>
                      handleStory("who", story.id, e.target.value)
                    }
                  />
                </div>
                <div>
                  <Form.Label>I want to...</Form.Label>
                  <Form.Control
                    value={story.wants}
                    onChange={(e) =>
                      handleStory("wants", story.id, e.target.value)
                    }
                  />
                </div>
                <div>
                  <Form.Label>So I can...</Form.Label>
                  <Form.Control
                    value={story.objective}
                    onChange={(e) =>
                      handleStory("objective", story.id, e.target.value)
                    }
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
      </Form>

      <Button onClick={addStory}>Add story</Button>

      {/*Step 4 ############################################################################################### */}
      <Form>
        <h3>Pages</h3>
        <ul>
          {pages.map((page, i) => (
            <li key={i}>
              <Form.Group className="page-container d-flex">
                <div>
                  <Form.Label>Page name</Form.Label>
                  <Form.Control
                    value={page.name}
                    onChange={(e) =>
                      handlePage("name", page.id, e.target.value)
                    }
                  />
                </div>
                <div>
                  <Form.Label>Page description</Form.Label>
                  <Form.Control
                    value={page.description}
                    onChange={(e) =>
                      handlePage("description", page.id, e.target.value)
                    }
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
      </Form>

      <Button onClick={addPage}>Add page</Button>

      {/*Step 5 ############################################################################################### */}
      <Form>
        <h3>Non-Functional Requirements</h3>
        <div>
          <Form.Group controlId="documentBackend">
            <Form.Label>Backend</Form.Label>
            <ul>
              {backend.map((item, i) => (
                <li key={i}>
                  <Form.Control />
                  <div>
                    <Button
                      variant="secondary"
                      onClick={removeBackend}
                      value={item.id}
                    >
                      X
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </Form.Group>

          <Button onClick={addBackend}>Add new</Button>
        </div>
      </Form>

      {/*Step 6 ############################################################################################### */}
      <Form>
        <h3>Timeline, budgets and Risks</h3>
        <Form.Group controlId="documentGoals">
          <Form.Label>Timeline</Form.Label>
          <Form.Control />
          <Form.Label>Budgets</Form.Label>
          <Form.Control />
          <Form.Label>Risks</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form>

      {/*Step 7 ############################################################################################### */}
      <Form>
        <h3>Future implementations</h3>
        <ul>
          {features.map((feature, i) => (
            <li key={i}>
              <Form.Group className="feature-container d-flex">
                <div>
                  <Form.Label>Feature</Form.Label>
                  <Form.Control
                    value={feature.name}
                    onChange={(e) =>
                      handleFeature("name", feature.id, e.target.value)
                    }
                  />
                </div>
                <div>
                  <Form.Label>Feature description</Form.Label>
                  <Form.Control
                    value={feature.description}
                    onChange={(e) =>
                      handleFeature("description", feature.id, e.target.value)
                    }
                  />
                </div>
                <div>
                  <Button
                    variant="secondary"
                    onClick={removeFeature}
                    value={feature.id}
                  >
                    X
                  </Button>
                </div>
              </Form.Group>
            </li>
          ))}
        </ul>
      </Form>

      <Button onClick={() => addFeature()}>Add feature</Button>
    </div>
  );
}

export default DocumentForm;
