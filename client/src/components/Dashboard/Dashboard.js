// Import React Libs
import React, { useContext, useEffect, useState } from "react";

// Import Contexts
import { documentContext } from "../../Contexts/documentContext";

// React Router Components
import { useHistory } from "react-router-dom";

// Import Components and Styles
import MyNavBar from "../NavBar/NavBar";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
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

  return (
    <div>
      <MyNavBar />
      <Container>
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
                  <ListGroup.Item key={i}>
                    <a
                      className="fw-bold"
                      value={documentItem._id}
                      href={`/document/read/${documentItem._id}`}
                    >
                      {documentItem.title}
                    </a>
                    <p className="list-item-description">
                      {documentItem.description}
                    </p>
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
      </Container>
    </div>
  );
}

export default Dashboard;
