import React, { useContext, useState } from "react";

import { Context } from "./Context/AuthProvider";

export default function Login() {
  const { handleLogin } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log in</h3>

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
        <div>
          <input type="checkbox" id="customCheck1" />
          <label htmlFor="customCheck1">Remember me</label>
        </div>
      </div>

      <button type="submit">Sign in</button>
      <p>
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}
