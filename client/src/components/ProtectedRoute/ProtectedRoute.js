import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "../../services/AuthService";

// Wrapper of components that are private to logged in users, before the user arrives to the desired component a verification needs to be performed. In case the user isn't logged in then he's redirected to the login page
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isSigned = AuthService.auth.isSigned === true; //call the authorization service here

  return (
    <Route
      {...rest}
      render={(props) =>
        isSigned ? <Component {...props} /> : <Redirect to={"/login"} />
      }
    />
  );
};

export default ProtectedRoute;
