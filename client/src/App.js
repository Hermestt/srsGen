// Import React Libs
import React, { useState } from "react";

// Import Utils
import emptyDoc from "./Utils/doc";

// Import Context
import { documentContext } from "./Contexts/documentContext";

// Import React Router Components
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

//Import components & Styles
import Home from "./components/ProtectedRoutes/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import DocumentCreate from "./components/Document/DocumentCreate";
import DocumentDetail from "./components/Document/DocumentDetail";
import DocumentUpdate from "./components/Document/DocumentUpdate";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [document, setDocument] = useState(emptyDoc);

  return (
    <documentContext.Provider value={{ document, setDocument }}>
      <Container fluid="sm">
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/document/read/:id"
                component={DocumentDetail}
              />
              <Route exact path="/document/create" component={DocumentCreate} />
              <Route
                exact
                path="/document/update/:id"
                component={DocumentUpdate}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Redirect from="*" to="/login" />
            </Switch>
          </div>
        </Router>
      </Container>
    </documentContext.Provider>
  );
}

export default App;
