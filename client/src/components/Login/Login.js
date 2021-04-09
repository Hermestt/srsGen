// Import React Libs
import React, { useState } from "react";

// Import Services
import AuthService from "../../services/AuthService";

// Import Components and Styles
import { useHistory, Link } from "react-router-dom";
import { Button, Col, Row, Form, Container } from "react-bootstrap";
import "./Login.css";
import logo from "../../Graphics/logo_blue.svg";

function Login() {
  let history = useHistory(); // The useHistory hook gives you access to the history instance that you may use to navigate. (https://reactrouter.com/web/api/Hooks/usehistory)

  // We'll use this states to send them to the database through our AuthService
  // use context for this?
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  // We'll handle the error we might get from the authentication service
  const [error, setError] = useState("");

  // Send the credentials to the AuthService and update the history of ReactRouter if we get a success 200
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await AuthService.login(loginCredentials);

      if (response.data.success) {
        history.push("/dashboard");
      } else {
        setError(response.message);
        console.log("Auth error: " + error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className="logo-container text-center">
            <a href="/">
              <img src={logo} alt="srs logo" />
            </a>
          </div>
          <div className="form-container">
            <h3 className="text-center" style={{ marginBottom: 24 }}>
              Welcome back!
            </h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setLoginCredentials({
                      ...loginCredentials,
                      email: e.target.value,
                    });
                  }}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setLoginCredentials({
                      ...loginCredentials,
                      password: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Button value="login" type="submit" variant="primary" block>
                Log In
              </Button>
            </Form>
          </div>

          <hr></hr>
          <p className="no-account">
            Don't have an account? <Link to="/register">Register one now</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
