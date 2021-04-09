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
import Dashboard from "./components/ProtectedRoutes/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import DocumentCreate from "./components/Document/DocumentCreate";
import DocumentDetail from "./components/Document/DocumentDetail";
import DocumentUpdate from "./components/Document/DocumentUpdate";
import Landing from "./components/Landing/Landing";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [document, setDocument] = useState(emptyDoc);

  return (
    <documentContext.Provider value={{ document, setDocument }}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/document/read/:id" component={DocumentDetail} />
            <Route exact path="/document/create" component={DocumentCreate} />
            <Route
              exact
              path="/document/update/:id"
              component={DocumentUpdate}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect from="*" to="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    </documentContext.Provider>
  );
}

export default App;
