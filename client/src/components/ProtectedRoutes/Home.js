import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import ProtectedRouteController from "../ProtectedRouteController/ProtectedRouteController";

function Home() {
  return <ProtectedRouteController component={Dashboard} />;
}

export default Home;
