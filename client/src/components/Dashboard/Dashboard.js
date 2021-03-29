import DocumentService from "../../services/DocumentService";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import axios from "axios";

function Dashboard() {
  const history = useHistory();

  const handleDocumentCreation = () => {
    history.push("/document/create");
  };

  const [documentsList, setDocumentsList] = useState([]);
  useEffect(() => {
    async function get() {
      let response = await DocumentService.listDocuments();
      setDocumentsList(response.data.list);
    }
    get();
  }, [documentsList]);

  const handleClick = async (e) => {
    DocumentService.getDocument(e.target.value);
    history.push("/document/read");
  };

  return (
    <div>
      <NavBar />
      <div>
        <h2>This is your documents list</h2>
        <div>
          <button onClick={handleDocumentCreation}>Create new document</button>
          <ul>
            <p>{`Found ${documentsList.length} documents`}</p>
            {documentsList.map((documentItem, i) => (
              <li key={i}>
                {documentItem.name}
                <button value={documentItem._id} onClick={handleClick}>
                  view
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
