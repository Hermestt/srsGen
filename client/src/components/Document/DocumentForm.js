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
    newAdd.push({ id: id, name: "", description: "" });
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
    props.onFeatureChange(newArr);
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

  // Frontend $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  const [frontend, setFrontend] = useState([]);
  const addFrontend = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
    var newAdd = Array.from(frontend);
    newAdd.push({ id: id, description: "" });
    setFrontend(newAdd);
  };

  const handleFrontend = (name, id, value) => {
    let newArr = Array.from(frontend);
    var foundIndex = newArr.findIndex((frontend) => frontend.id == id);
    newArr[foundIndex][name] = value;
    props.onFrontendChange(newArr);
    setFrontend(newArr);
  };

  const removeFrontend = (e) => {
    const id = e.target.value;
    var newArr = frontend.filter((frontend) => frontend.id !== id);
    setFrontend(newArr);
  };

  // Security $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  const [security, setSecurity] = useState([]);
  const addSecurity = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
    var newAdd = Array.from(security);
    newAdd.push({ id: id, description: "" });
    setSecurity(newAdd);
  };

  const handleSecurity = (name, id, value) => {
    let newArr = Array.from(security);
    var foundIndex = newArr.findIndex((security) => security.id == id);
    newArr[foundIndex][name] = value;
    props.onSecurityChange(newArr);
    setSecurity(newArr);
  };

  const removeSecurity = (e) => {
    const id = e.target.value;
    var newArr = security.filter((security) => security.id !== id);
    setSecurity(newArr);
  };

  // Library $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  const [libraries, setLibrary] = useState([]);
  const addLibrary = () => {
    let id = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    ).toUpperCase();
    var newAdd = Array.from(libraries);
    newAdd.push({ id: id, description: "" });
    setLibrary(newAdd);
  };

  const handleLibrary = (name, id, value) => {
    let newArr = Array.from(libraries);
    var foundIndex = newArr.findIndex((library) => library.id == id);
    newArr[foundIndex][name] = value;
    props.onLibraryChange(newArr);
    setLibrary(newArr);
  };

  const removeLibrary = (e) => {
    const id = e.target.value;
    var newArr = libraries.filter((libraries) => libraries.id !== id);
    setLibrary(newArr);
  };

  console.log(document);

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
          <Form.Control
            as="textarea"
            rows={1}
            value={
              document && document.goalsAndDescriptions
                ? document.goalsAndDescriptions.goals
                : ""
            }
            onChange={(e) => {
              props.onGPVChange("goals", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="documentProblems">
          <Form.Label>What problems does the project solve?</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            value={
              document && document.goalsAndDescriptions
                ? document.goalsAndDescriptions.problems
                : ""
            }
            onChange={(e) => {
              props.onGPVChange("problems", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="documentVision">
          <Form.Label>What is the vision?</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            value={
              document && document.goalsAndDescriptions
                ? document.goalsAndDescriptions.vision
                : ""
            }
            onChange={(e) => {
              props.onGPVChange("vision", e.target.value);
            }}
          />
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

      <Button variant="light" onClick={addStory}>
        Add story
      </Button>

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

      <Button variant="light" onClick={addPage}>
        Add page
      </Button>

      {/*Step 5 ############################################################################################### */}
      <Form>
        <h3>Non-Functional Requirements</h3>
        <div className="multi-form-container d-flex">
          {/*Backend #################################################################### */}
          <div className="form-container">
            <Form.Group controlId="documentBackend">
              <Form.Label>Backend</Form.Label>
              <ul>
                {backend.map((item, i) => (
                  <li key={i}>
                    <Form.Control
                      onChange={(e) =>
                        handleBackend("description", item.id, e.target.value)
                      }
                    />
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

            <Button variant="light" onClick={addBackend}>
              Add new
            </Button>
          </div>

          {/*Frontend #################################################################### */}
          <div className="form-container">
            <Form.Group controlId="documentFrontend">
              <Form.Label>Frontend</Form.Label>
              <ul>
                {frontend.map((item, i) => (
                  <li key={i}>
                    <Form.Control
                      onChange={(e) =>
                        handleFrontend("description", item.id, e.target.value)
                      }
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
          </div>

          {/*Security #################################################################### */}
          <div className="form-container">
            <Form.Group controlId="documentSecurity">
              <Form.Label>Security</Form.Label>
              <ul>
                {security.map((item, i) => (
                  <li key={i}>
                    <Form.Control
                      onChange={(e) =>
                        handleSecurity("description", item.id, e.target.value)
                      }
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
          </div>

          {/*3rd Party Libs #################################################################### */}
          <div className="form-container">
            <Form.Group controlId="documentLibraries">
              <Form.Label>Libraries</Form.Label>
              <ul>
                {libraries.map((item, i) => (
                  <li key={i}>
                    <Form.Control
                      onChange={(e) =>
                        handleLibrary("description", item.id, e.target.value)
                      }
                    />
                    <div>
                      <Button
                        variant="secondary"
                        onClick={removeLibrary}
                        value={item.id}
                      >
                        X
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </Form.Group>

            <Button variant="light" onClick={addLibrary}>
              Add new
            </Button>
          </div>
        </div>
      </Form>

      {/*Step 6 ############################################################################################### */}
      <Form>
        <h3>Timeline, budgets and Risks</h3>
        <Form.Group controlId="documentGoals">
          <Form.Label>Timeline</Form.Label>
          <Form.Control
            value={
              document && document.timeBudgetRisks
                ? document.timeBudgetRisks.timeline
                : ""
            }
            onChange={(e) => {
              props.onTBRChange("timeline", e.target.value);
            }}
          />
          <Form.Label>Budgets</Form.Label>
          <Form.Control
            value={
              document && document.timeBudgetRisks
                ? document.timeBudgetRisks.budget
                : ""
            }
            onChange={(e) => {
              props.onTBRChange("budget", e.target.value);
            }}
          />
          <Form.Label>Risks</Form.Label>
          <Form.Control
            value={
              document && document.timeBudgetRisks
                ? document.timeBudgetRisks.risks
                : ""
            }
            onChange={(e) => {
              props.onTBRChange("risks", e.target.value);
            }}
          />
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

      <Button variant="light" onClick={() => addFeature()}>
        Add feature
      </Button>
    </div>
  );
}

export default DocumentForm;
