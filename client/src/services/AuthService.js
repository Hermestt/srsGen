import { getApiPath } from "../Utils/api";
import axios from "axios";

const SESSION_KEY = "jwt_token";
class AuthService {
  constructor() {
    this.auth = { isSigned: Boolean(this._getToken()) }; //This only works when a log in was successfull
  }

  // Methods related to the Saving, reading and deletion of JWT
  _getToken() {
    return localStorage.getItem(SESSION_KEY);
  }

  _saveToken(token) {
    localStorage.setItem(SESSION_KEY, token);
  }

  _deleteToken() {
    localStorage.removeItem(SESSION_KEY);
  }

  // User Authenticator private method
  async _handleAuthentication(path, data) {
    try {
      let response;
      // if the authentication succeeds we return the server response
      await axios.post(getApiPath(path), data).then((resp) => {
        response = resp;
      });
      return response;
    } catch (error) {
      // if the authentication fails we have to clean the localStorage and set isSigned property to false
      this._deleteToken();
      return { success: false, message: "Incorrect login or password" };
    }
  }

  // Gets the credentials, sends them to the authenticator,
  // if the authenticator return a success 200 then we save the token that comes with it on local storage.
  // and lastly we assign the user as logedIn at this.auth.isSigned property.
  async login(credentials) {
    const response = await this._handleAuthentication(
      "/auth/login",
      credentials
    );

    if (response.data.success) {
      this._saveToken(response.data.token);
      this.auth.isSigned = true;
    }

    return response;
  }

  // Logout, user is going co caralho
  // Clean localStorage, set isSigned to false
  logout() {
    this.auth.isSigned = false;
    this._deleteToken();
    console.log("User has logged out successfully");
  }

  async registerUser(registerData) {
    const response = await this._handleAuthentication(
      "/user/register",
      registerData
    );
    return response;
  }
}

const instance = new AuthService();
export default instance;
