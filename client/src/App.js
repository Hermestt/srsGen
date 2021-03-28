import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

//Import components
import Home from "./components/ProtectedRoutes/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Document from "./components/ProtectedRoutes/Document";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/document/create" component={Document} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Redirect from="*" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
