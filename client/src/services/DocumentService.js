import { getApiPath } from "../Utils/api";
import axios from "axios";

// import the token to send with the request and check in the server if it is valid

class DocumentService {
  async saveDocument(data) {
    let path = "/document/create";
    try {
      let response;
      await axios
        .post(getApiPath(path), data)
        .then((resp) => (response = resp));
      return response;
    } catch (error) {
      console.log(error);
      return { success: false, message: "something is wrong" };
    }
  }
}

const instance = new DocumentService();
export default instance;
