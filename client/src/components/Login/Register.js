// Import React Libs
import React, { useState } from "react";

// Import Services
import AuthService from "../../services/AuthService";

// Import Components and Styles
import { useHistory } from "react-router-dom";
import { Button, Col, Row, Form } from "react-bootstrap";

function Register() {
  const history = useHistory();
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!verifyPasswords()) {
      return "Passwords dont match";
    }

    const response = await AuthService.registerUser(registerData);

    if (response.data.success) {
      history.push("/login");
    } else {
      console.log("there was a problem");
      console.log(response);
    }
  };

  const verifyPasswords = () => {
    return registerData.password === registerData.password2 ? true : false;
  };

  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <div className="form-container">
          <h2>Create a new SRS Gen account.</h2>
          <p>We'll protect your data as best as you can.</p>
          <Form onSubmit={handleSubmit}>
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
              />
            </Form.Group>

            <Button value="login" type="submit" variant="primary">
              Register account
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default Register;
