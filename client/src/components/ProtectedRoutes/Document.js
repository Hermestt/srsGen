// Import React Libs
import React from "react";

// Import Components and Styles
import DocumentCreate from "../Document/DocumentCreate";
import ProtectedRouteController from "../ProtectedRouteController/ProtectedRouteController";

function Document() {
  // Here we must check what specific page of the Document Route the user wants, create or view
  return <ProtectedRouteController component={DocumentCreate} />;
}

export default Document;
