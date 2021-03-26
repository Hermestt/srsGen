import React, { useContext, useState } from "react";
import { Context } from "../Context/AuthProvider";

export default function Register() {
  const { handleRegister } = useContext(Context);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function handleFirstName(e) {
    setfirstName(e.target.value);
  }
  function handleLastName(e) {
    setlastName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handlePassword2(e) {
    setPassword2(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister({ firstName, lastName, email, password, password2 });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>

      <div>
        <label>First name</label>
        <input
          type="text"
          placeholder="First name"
          onChange={handleFirstName}
        />
      </div>

      <div>
        <label>Last name</label>
        <input type="text" placeholder="Last name" onChange={handleLastName} />
      </div>

      <div>
        <label>Email</label>
        <input type="email" placeholder="Enter email" onChange={handleEmail} />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          onChange={handlePassword}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          onChange={handlePassword2}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
