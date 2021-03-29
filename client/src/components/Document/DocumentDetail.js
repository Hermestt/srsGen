import React, { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import DocumentService from "../../services/DocumentService";
import { useHistory } from "react-router-dom";
import { documentContext } from "../../Contexts/documentContext";

function DocumentDetail() {
  const history = useHistory();
  const { documentValue, setDocumentValue } = useContext(documentContext);
  const [document, setDocument] = useState(null);

  useEffect(() => {
    async function wele() {
      const response = await DocumentService.getDocument({
        id: documentValue,
      });
      setDocument(response.data.document[0]);
    }
    wele();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    DocumentService.deleteDocument({ _id: document._id });
    setDocumentValue(null);
    history.push("/");
  };

  return (
    <div>
      <NavBar />
      <span>Project Name</span>
      <h2>{document && document.name ? document.name : "Not loaded yet"}</h2>
      <h2>{document && document._id ? document._id : "Not loaded yet"}</h2>
      <h4>Project Description</h4>
      <p>
        {document && document.description
          ? document.description
          : "Not loaded yet"}
      </p>
      <h4>Project Goals</h4>
      <p>
        {document && document.goalsAndDescription.goals
          ? document.goalsAndDescription.goals
          : "Not loaded yet"}
      </p>
      <h4>Problems to Solve</h4>
      <p>
        {document && document.goalsAndDescription.problemsToSolve
          ? document.goalsAndDescription.problemsToSolve
          : "Not loaded yet"}
      </p>
      <h4>Project Vision</h4>
      <p>
        {document && document.goalsAndDescription.vision
          ? document.goalsAndDescription.vision
          : "Not loaded yet"}
      </p>
      <button onClick={handleClick}>Delete this document</button>
    </div>
  );
}

export default DocumentDetail;
