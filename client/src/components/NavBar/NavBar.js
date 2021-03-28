import React, { useState, useEffect } from "react";
import AuthService from "../../services/AuthService";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
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
    <div className="navbar">
      <h4>{`Hello there, ${userData.firstName} ${userData.lastName}! This is your NavBar`}</h4>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}

export default NavBar;
