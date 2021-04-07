// Import React Libs
import React, { useEffect, useState } from "react";

// React Router Components
import { useHistory } from "react-router-dom";

// Import Components and Styles
import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

// Import Services
import AuthService from "../../services/AuthService";

function MyNavBar() {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(AuthService.auth.user);
  }, [userData]);

  const handleLogout = (e) => {
    e.preventDefault();
    AuthService.logout();
    history.push("/login");
  };

  return (
    <Navbar>
      <Navbar.Brand href="/">SRSGen</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: {`  ${userData.firstName} ${userData.lastName}`}
        </Navbar.Text>
        <Button
          variant="outline-secondary"
          onClick={handleLogout}
          id="logout-btn"
          size="sm"
        >
          Log out
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavBar;
