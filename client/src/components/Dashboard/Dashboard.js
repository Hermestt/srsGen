// Import React Libs
import React, { useContext, useEffect, useState } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// React Router Components
import { useHistory } from "react-router-dom";

// Import Components and Styles
import MyNavBar from "../NavBar/NavBar";
import { ListGroup, Button } from "react-bootstrap";
import "./Dashboard.css";

// Import Services
import DocumentService from "../../services/DocumentService";
import AuthService from "../../services/AuthService";

function Dashboard() {
  const history = useHistory();
  const { documentValue, setDocumentValue } = useContext(documentContext);

  const [documentsList, setDocumentsList] = useState([]);
  useEffect(() => {
    let id = AuthService.auth.user.id;
    async function get() {
      let response = await DocumentService.listDocuments(id);
      setDocumentsList(response.data.list);
    }
    get();
  }, []);

  const handleDocumentCreation = () => {
    history.push("/document/create");
  };

  const handleClick = (e) => {
    setDocumentValue(e.target.value);
    history.push("/document/read/" + e.target.value);
  };

  return (
    <div>
      <MyNavBar />
      <Button
        value="login"
        type="submit"
        variant="primary"
        onClick={handleDocumentCreation}
      >
        Create new document
      </Button>
      {documentsList && documentsList.length > 0 ? (
        <ListGroup>
          {documentsList.map((documentItem, i) => (
            <ListGroup.Item
              key={i}
              onClick={handleClick}
              value={documentItem._id}
              action={true}
            >
              {documentItem.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p className="no-items">
          "You don't have any documents yet, create a new one."
        </p>
      )}
    </div>
  );
}

export default Dashboard;
