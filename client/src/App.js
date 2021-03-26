import React from "react";
import { Router, Link, Redirect } from "react-router-dom";

import Routes from "./routes";
import history from "./history";

import { AuthProvider } from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
