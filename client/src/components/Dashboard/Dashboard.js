import React from "react";
import AuthService from "../../services/AuthService";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.logout();
    history.push("/login");
  };

  return (
    <div>
      <button onClick={handleSubmit}>LOGOUT</button>
    </div>
  );
}

export default Dashboard;
