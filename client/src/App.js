import React, { useState } from "react";
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
import DocumentDetail from "./components/Document/DocumentDetail";
import DocumentUpdate from "./components/Document/DocumentUpdate";

// Import Context
import { documentContext } from "./Contexts/documentContext";

function App() {
  const [documentValue, setDocumentValue] = useState(null);

  return (
    <documentContext.Provider value={{ documentValue, setDocumentValue }}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/document/read" component={DocumentDetail} />
            <Route exact path="/document/create" component={Document} />
            <Route exact path="/document/update" component={DocumentUpdate} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect from="*" to="/login" />
          </Switch>
        </div>
      </Router>
    </documentContext.Provider>
  );
}

export default App;
