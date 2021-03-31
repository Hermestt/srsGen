import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import DocumentService from "../../services/DocumentService";
import DocumentForm from "./DocumentForm";

import AuthService from "../../services/AuthService";

function CreateDocument() {
  const [documentData, setDocumentData] = useState({});

  const onInputChange = (childName, childValue) => {
    setDocumentData({ ...documentData, [childName]: childValue });
  };

  const handleSubmit = async () => {
    let documentPack = {
      creator_id: AuthService.auth.user.id,
      name: documentData.name,
      description: documentData.description,
      goalsAndDescription: {
        goals: documentData.goals,
        problemsToSolve: documentData.problems,
        vision: documentData.vision,
      },
    };
    await DocumentService.saveDocument(documentPack);
  };

  return (
    <div>
      <NavBar />
      <DocumentForm onFormChange={onInputChange} document={documentData} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default CreateDocument;
