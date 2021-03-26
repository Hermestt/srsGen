/**
 * userAuth.js is responsible for
 * - Handling the login and logout requests
 * - setting the authorized and loading (for protected routes) states
 * - saving and deleting the jwt to/from the localStorage
 * - returning the states and handling functions to the context provider
 */

import { useState, useEffect } from "react";
import axios from "axios";
import history from "../../history";

export default function UserAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Because we can't guarantee that the user is already authenticated

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      console.log("Token is true and it is: " + token);
      axios.defaults.headers.Authorization = token;
    }

    setLoading(false);
  }, []);

  async function handleLogin(credentials) {
    let token = "";

    await axios
      .post("http://localhost:3001/auth/login", credentials)
      .then((resp) => {
        token = resp.data.token;
      });
    console.log("getToken is: " + token);
    localStorage.setItem("token", token);
    axios.defaults.headers.Authorization = token;
    setAuthenticated(true);

    history.push("/dashboard");
  }

  async function handleRegister(userInformation) {
    await axios
      .post("http://localhost:3001/auth/register", userInformation)
      .then((resp) => {
        console.log(resp);
        console.log(resp.status);
        if (resp.status === 200) {
          history.push("/login");
        }
      });
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
    axios.defaults.headers.Authorization = undefined;
    history.push("/login");
  }

  return { authenticated, loading, handleLogin, handleLogout, handleRegister };
}
