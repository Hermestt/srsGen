// Import React Libs
import React, { useEffect, useState } from "react";

// React Router Components
import { useHistory, Link } from "react-router-dom";

// Import Components and Styles
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

// Import Services
import AuthService from "../../services/AuthService";

function MyNavBar() {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(AuthService.auth.user);
    console.log(userData.firstName);
  }, [userData]);

  const handleLogout = (e) => {
    e.preventDefault();
    AuthService.logout();
    history.push("/login");
  };

  return (
    <Navbar>
      <Navbar.Brand href="#home">SRSGen</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as:{" "}
          <a href="#login">{`${userData.firstName} ${userData.lastName}`}</a>
        </Navbar.Text>
        <Link style={{ marginLeft: 24 }} onClick={handleLogout}>
          Log out
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavBar;
