import React, { createContext } from "react";
import UserAuth from "./hooks/UserAuth";

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated,
    loading,
    handleLogin,
    handleLogout,
    handleRegister,
  } = UserAuth();

  return (
    <Context.Provider
      value={{
        loading,
        authenticated,
        handleLogin,
        handleLogout,
        handleRegister,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
