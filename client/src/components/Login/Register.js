// Import React Libs
import React, { useState } from "react";

// Import Services
import AuthService from "../../services/AuthService";

// Import Components and Styles
import { useHistory } from "react-router-dom";
import { Button, Col, Row, Form, Container, Spinner } from "react-bootstrap";
import logo from "../../Graphics/logo_blue.svg";

function Register() {
  const history = useHistory();
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  // Loading state for submit request
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!verifyPasswords()) {
      return "Passwords dont match";
    }

    const response = await AuthService.registerUser(registerData);

    if (response.data.success) {
      setIsLoading(false);
      history.push("/login");
    } else {
      setIsLoading(false);
      console.log(response);
    }
  };

  const verifyPasswords = () => {
    return registerData.password === registerData.password2 ? true : false;
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
          <div>
            <h2 className="text-center">Welcome to SRSGEN</h2>
            <p className="text-center">
              I'll protect your data as best as I can.
            </p>
            <hr></hr>
            <p className="text-center">
              Already have an account? <a href="/login">Log in then</a>
            </p>
          </div>
          <Form onSubmit={handleSubmit} style={{ marginTop: 40 }}>
            <Form.Group controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g John"
                onChange={(e) => {
                  setRegisterData({
                    ...registerData,
                    firstName: e.target.value,
                  });
                }}
                required
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g Doe"
                onChange={(e) => {
                  setRegisterData({
                    ...registerData,
                    lastName: e.target.value,
                  });
                }}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="e.g john@doe.com"
                onChange={(e) => {
                  setRegisterData({
                    ...registerData,
                    email: e.target.value,
                  });
                }}
                required
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  });
                }}
                required
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                onChange={(e) => {
                  setRegisterData({
                    ...registerData,
                    password2: e.target.value,
                  });
                }}
                required
              />
            </Form.Group>
            {isLoading ? (
              <Button variant="primary" disabled block>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </Button>
            ) : (
              <Button
                value="login"
                type="submit"
                variant="primary"
                block
                style={{ marginTop: 40 }}
              >
                Register account
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
