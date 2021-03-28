import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Dashboard() {
  const history = useHistory();

  const handleDocumentCreation = () => {
    history.push("/document/create");
  };

  return (
    <div>
      <NavBar />
      <div>
        <h2>This is your documents list</h2>
        <div>
          <button onClick={handleDocumentCreation}>Create new document</button>
          <ul>
            <li>List Item</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
