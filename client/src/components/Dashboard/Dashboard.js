// Import React Libs
import React, { useContext, useEffect, useState } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// React Router Components
import { useHistory } from "react-router-dom";

// Import Components and Styles
import MyNavBar from "../NavBar/NavBar";
import { ListGroup, Button, Row, Col } from "react-bootstrap";
import "./Dashboard.css";

// Import Services
import DocumentService from "../../services/DocumentService";
import AuthService from "../../services/AuthService";
import emptyDoc from "../../Utils/doc";

function Dashboard() {
  const history = useHistory();
  const { setDocument } = useContext(documentContext);

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
    setDocument(emptyDoc); // Reset the context
    history.push("/document/create");
  };

  const handleClick = (e) => {
    history.push("/document/read/" + e.target.value);
  };

  return (
    <div>
      <MyNavBar />
      <Row className="justify-content-md-center">
        <Col sm={8}>
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
                  {documentItem.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p className="no-items">
              You don't have any documents yet, create a new one.
            </p>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
