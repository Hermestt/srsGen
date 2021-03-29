import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import DocumentService from "../../services/DocumentService";

function CreateDocument() {
  const [documentData, setDocumentData] = useState({
    name: "",
    description: "",
  });

  const [goalsAndDescription, setGoals] = useState({
    goals: "",
    problemsToSolve: "",
    vision: "",
  });

  const handleSubmit = async (e) => {
    const documentPack = {
      ...documentData,
      goalsAndDescription,
    };
    e.preventDefault();
    const response = await DocumentService.saveDocument(documentPack);
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div>
          <label for="document-name">Document name</label>
          <input
            type="text"
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
            id="document-vision"
            onChange={(e) => {
              setGoals({
                ...goalsAndDescription,
                vision: e.target.value,
              });
            }}
          ></input>
        </div>
        <button value="save" type="submit">
          Save Document
        </button>
      </form>
    </div>
  );
}

export default CreateDocument;
