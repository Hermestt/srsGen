import React from "react";
import CreateDocument from "../Document/CreateDocument";
import ProtectedRouteController from "../ProtectedRouteController/ProtectedRouteController";

function Document() {
  // Here we must check what specific page of the Document Route the user wants, create or view
  return <ProtectedRouteController component={CreateDocument} />;
}

export default Document;
