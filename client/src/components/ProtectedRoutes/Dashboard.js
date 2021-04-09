// Import React Libs
import React from "react";

// Import Components and Styles
import Dashboard from "../Dashboard/Dashboard";
import ProtectedRouteController from "../ProtectedRouteController/ProtectedRouteController";

function Home() {
  return <ProtectedRouteController component={Dashboard} />;
}

export default Home;
