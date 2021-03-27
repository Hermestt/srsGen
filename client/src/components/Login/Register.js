import React, { useState } from "react";
import AuthService from "../../services/AuthService";
import { Link, useHistory } from "react-router-dom";

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
    <div>
      <div>
        <p>Already have an account?</p>
        <Link to="/login">Log In</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="first-name">First Name</label>
          <input
            type="text"
            placeholder="e.g John"
            id="first-name"
            onChange={(e) => {
              setRegisterData({
                ...registerData,
                firstName: e.target.value,
              });
            }}
          ></input>
        </div>
        <div>
          <label for="last-name">Last name</label>
          <input
            type="text"
            placeholder="e.g Doe"
            id="last-name"
            onChange={(e) => {
              setRegisterData({
                ...registerData,
                lastName: e.target.value,
              });
            }}
          ></input>
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="text"
            placeholder="e.g johndoe@mail.io"
            id="email"
            onChange={(e) => {
              setRegisterData({
                ...registerData,
                email: e.target.value,
              });
            }}
          ></input>
        </div>
        <div>
          <label for="Password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="Password"
            onChange={(e) => {
              setRegisterData({
                ...registerData,
                password: e.target.value,
              });
            }}
          ></input>
        </div>
        <div>
          <label for="password2">Confirm password</label>
          <input
            type="password"
            placeholder="Confirm password"
            id="password2"
            onChange={(e) => {
              setRegisterData({
                ...registerData,
                password2: e.target.value,
              });
            }}
          ></input>
        </div>
        <button value="register" type="submit">
          Register Account
        </button>
      </form>
    </div>
  );
}

export default Register;
