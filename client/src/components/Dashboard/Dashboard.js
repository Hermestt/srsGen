import DocumentService from "../../services/DocumentService";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { documentContext } from "../../Contexts/documentContext";

import AuthService from "../../services/AuthService";

function Dashboard() {
  const history = useHistory();
  const { setDocumentValue } = useContext(documentContext);
  const handleDocumentCreation = () => {
    history.push("/document/create");
  };

  const [documentsList, setDocumentsList] = useState([]);
  useEffect(() => {
    setDocumentValue(null);
    let id = AuthService.auth.user.id;
    async function get() {
      let response = await DocumentService.listDocuments(id);
      setDocumentsList(response.data.list);
    }
    get();
  }, []);

  const handleClick = async (e) => {
    setDocumentValue(e.target.value);
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
