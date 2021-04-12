// Import React Libs
import React from "react";

// React Router Components
import { Route, Redirect } from "react-router-dom";

// Import Services
import AuthService from "../../services/AuthService";

// Wrapper of components that are private to logged in users, before the user arrives to the desired component a verification needs to be performed. In case the user isn't logged in then he's redirected to the login page
const ProtectedRouteController = ({ component: Component, ...rest }) => {
  const isSigned = AuthService.auth.isSigned === true; //call the authorization service here

  return (
    <Route
      {...rest}
      render={(props) =>
        isSigned ? <Component {...props} /> : <Redirect to={"/"} />
      }
    />
  );
};

export default ProtectedRouteController;
