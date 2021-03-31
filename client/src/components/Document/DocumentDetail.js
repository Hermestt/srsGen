import React, { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import DocumentService from "../../services/DocumentService";
import { useHistory } from "react-router-dom";
import { documentContext } from "../../Contexts/documentContext";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function DocumentDetail() {
  const history = useHistory();
  const { documentValue, setDocumentValue } = useContext(documentContext);
  const [document, setDocument] = useState(null);

  useEffect(() => {
    async function fetchDocument() {
      const givenDocument = await DocumentService.getDocument(documentValue);
      setDocument(givenDocument);
    }
    fetchDocument();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    DocumentService.deleteDocument(document._id);
    setDocumentValue(null);
    history.push("/");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    history.push("/document/update");
  };

  const handleDownload = (e) => {
    var docDefinition = {
      content: [`${document.name}`, `${document.description}`],
    };
    pdfMake.createPdf(docDefinition).download();
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
      <button onClick={handleClick}>Delete this document</button>
      <button onClick={handleEdit}>Edit this document</button>
      <button onClick={handleDownload}>Download pdf</button>
    </div>
  );
}

export default DocumentDetail;
