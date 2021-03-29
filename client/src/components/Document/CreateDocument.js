import React, { useState, useContext, useEffect, useRef } from "react";
import NavBar from "../NavBar/NavBar";
import DocumentService from "../../services/DocumentService";

import { documentContext } from "../../Contexts/documentContext";

function CreateDocument() {
  const { documentValue, setDocumentValue } = useContext(documentContext);
  const [document, setDocument] = useState(null);

  const [documentData, setDocumentData] = useState({
    name: "",
    description: "",
  });

  const [goalsAndDescription, setGoals] = useState({
    goals: "",
    problemsToSolve: "",
    vision: "",
  });

  let documentPack = {};
  const handleSubmit = async (e) => {
    documentPack = {
      ...documentData,
      goalsAndDescription,
    };
    e.preventDefault();
    const ad = await DocumentService.saveDocument(documentPack);
    console.log("response is");
    console.log(ad);
  };

  //This has to have a better way
  let nameInput,
    descriptionInput,
    goalsInput,
    problemsInput,
    visionInput = null;

  // UseEffect to populate inputs in case there's a ID on the context
  useEffect(() => {
    async function checkIfWeComeFromEdit() {
      console.log("documentValue is " + documentValue);
      if (documentValue) {
        const response = await DocumentService.getDocument({
          id: documentValue,
        });
        console.log("this is response");
        console.log(response.data.document[0]);
        /*setDocumentData({
          name: response.data.document[0].name,
          description: response.data.document[0].description,
        });*/
        setDocumentData(response.data.document[0]);
        setGoals(response.data.document[0].goalsAndDescription);
      }
      // do nothing
    }
    checkIfWeComeFromEdit();
  }, []);

  const [updateStatus, setUpdateStatus] = useState(false);
  const handleUpdate = async (e) => {
    e.preventDefault();
    documentPack = {
      _id: documentValue,
      name: nameInput.value,
      description: descriptionInput.value,
      goalsAndDescription: {
        goals: goalsInput.value,
        problemsToSolve: problemsInput.value,
        vision: visionInput.value,
      },
    };

    setUpdateStatus(true);
    const ad = await DocumentService.updateDocument(documentPack);
  };

  return (
    <div>
      <NavBar />
      <form>
        <div>
          {documentValue && documentValue != null ? (
            <p>{`Updated? ${updateStatus}`}</p>
          ) : null}
          <label for="document-name">Document name</label>
          <input
            type="text"
            ref={(input) => {
              nameInput = input;
            }}
            value={documentData && documentData.name ? documentData.name : null}
            placeholder="e.g. To-Do SRS"
            id="document-name"
            onChange={(e) => {
              setDocumentData({
                ...documentData,
                name: e.target.value,
              });
            }}
          ></input>
        </div>
        <div>
          <label for="document-description">Document description</label>
          <input
            type="text"
            placeholder="e.g. To Do app targeted to agriculture users"
            ref={(input) => {
              descriptionInput = input;
            }}
            value={
              documentData && documentData.description
                ? documentData.description
                : null
            }
            id="document-description"
            onChange={(e) => {
              setDocumentData({
                ...documentData,
                description: e.target.value,
              });
            }}
          ></input>
        </div>

        <div>
          <label for="document-goals">Document goals</label>
          <input
            type="text"
            placeholder="e.g. make it sellable to agriculture users"
            ref={(input) => {
              goalsInput = input;
            }}
            value={
              goalsAndDescription && goalsAndDescription.goals
                ? goalsAndDescription.goals
                : null
            }
            id="document-goals"
            onChange={(e) => {
              setGoals({
                ...goalsAndDescription,
                goals: e.target.value,
              });
            }}
          ></input>
        </div>
        <div>
          <label for="document-problems">Document problems</label>
          <input
            type="text"
            placeholder="e.g. Solving marketability"
            ref={(input) => {
              problemsInput = input;
            }}
            value={
              goalsAndDescription && goalsAndDescription.problemsToSolve
                ? goalsAndDescription.problemsToSolve
                : null
            }
            id="document-problems"
            onChange={(e) => {
              setGoals({
                ...goalsAndDescription,
                problemsToSolve: e.target.value,
              });
            }}
          ></input>
        </div>
        <div>
          <label for="document-vision">Document vision</label>
          <input
            type="text"
            placeholder="e.g. VISION"
            ref={(input) => {
              visionInput = input;
            }}
            value={
              goalsAndDescription && goalsAndDescription.vision
                ? goalsAndDescription.vision
                : null
            }
            id="document-vision"
            onChange={(e) => {
              setGoals({
                ...goalsAndDescription,
                vision: e.target.value,
              });
            }}
          ></input>
        </div>
        {documentValue && documentValue != null ? (
          <button value="update" type="submit" onClick={handleUpdate}>
            Update Document
          </button>
        ) : (
          <button value="save" type="submit" onClick={handleSubmit}>
            Save Document
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateDocument;
