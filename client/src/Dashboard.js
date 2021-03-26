import React, { useContext } from "react";
import { Context } from "./Context/AuthProvider";

function Dashboard() {
  const { authenticated, handleLogout } = useContext(Context);
  return (
    <button type="button" onClick={handleLogout}>
      Sair
    </button>
  );
}

export default Dashboard;
