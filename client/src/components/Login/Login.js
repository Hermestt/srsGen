import React, { useState } from "react";
import AuthService from "../../services/AuthService";
import { useHistory, Link } from "react-router-dom";

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
        history.push("/");
      } else {
        setError(response.message);
        console.log("Auth error: " + error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="Email">Email</label>
          <input
            type="text"
            placeholder="Email"
            id="Email"
            onChange={(e) => {
              setLoginCredentials({
                ...loginCredentials,
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
              setLoginCredentials({
                ...loginCredentials,
                password: e.target.value,
              });
            }}
          ></input>
        </div>
        <button value="login" type="submit">
          Log In
        </button>
      </form>

      <div>
        <p>Don't have a link?</p>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Login;
