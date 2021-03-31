import React, { useState, useContext, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import DocumentService from "../../services/DocumentService";
import DocumentForm from "./DocumentForm";

import AuthService from "../../services/AuthService";
import { documentContext } from "../../Contexts/documentContext";

function DocumentUpdate() {
  const { documentValue, setDocumentValue } = useContext(documentContext);
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    async function fetchDocument() {
      const givenDocument = await DocumentService.getDocument(documentValue);
      setDocumentData(givenDocument);
    }
    fetchDocument();
  }, []);

  const onInputChange = (childName, childValue) => {
    setDocumentData({ ...documentData, [childName]: childValue });
  };

  const handleSubmit = async () => {
    let documentPack = {
      creator_id: AuthService.auth.user.id,
      _id: documentValue,
      name: documentData.name,
      description: documentData.description,
      goalsAndDescription: {
        goals: documentData.goals,
        problemsToSolve: documentData.problems,
        vision: documentData.vision,
      },
    };
    console.log(documentPack);
    await DocumentService.updateDocument(documentPack);
  };

  return (
    <div>
      <NavBar />
      <DocumentForm onFormChange={onInputChange} document={documentData} />
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
}

export default DocumentUpdate;
