// Import Plugins
import axios from "axios";

const SESSION_KEY = "jwt_token";
const USER_DATA = "user_data";

class AuthService {
  constructor() {
    const token = this._getToken();
    if (token) {
      this.auth = {
        isSigned: Boolean(token),
        user: this._getUser(),
      };
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      this.auth = {
        isSigned: false,
      };
    }
  }

  // Methods related to the Saving, reading and deletion of JWT
  _getToken() {
    return localStorage.getItem(SESSION_KEY);
  }

  _saveToken(token) {
    localStorage.setItem(SESSION_KEY, token);

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  _deleteToken() {
    localStorage.removeItem(SESSION_KEY);

    axios.defaults.headers.common["Authorization"] = null;
  }

  // Methods related to the Saving, reading and deletion of User Data
  _saveUser(userData) {
    localStorage.setItem(USER_DATA, JSON.stringify(userData));
  }

  _getUser() {
    return JSON.parse(localStorage.getItem(USER_DATA));
  }

  _deleteUser() {
    localStorage.removeItem(USER_DATA);
  }

  // User Authenticator private method
  async _handleAuthentication(path, data) {
    try {
      let response = await axios.post(
        "https://srsgen.herokuapp.com" + path,
        data
      );
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
      this._saveUser(response.data.userData);
      this.auth.isSigned = true;
      this.auth.user = response.data.userData;
    }
    return response;
  }

  // Logout
  // Clean localStorage, set isSigned to false
  logout() {
    this.auth.isSigned = false;
    this._deleteUser();
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
