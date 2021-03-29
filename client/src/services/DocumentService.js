import { getApiPath } from "../Utils/api";
import axios from "axios";

//This will need to be set in the context, just want to see if this works

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

  async updateDocument(data) {
    let path = "/document/update";
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

  async listDocuments() {
    let path = "/document/listing";
    try {
      let response;
      await axios.get(getApiPath(path)).then((resp) => (response = resp));
      return response;
    } catch (error) {
      console.log(error);
      return { success: false, message: "something is wrong" };
    }
  }

  async getDocument(id) {
    let path = "/document/read";
    try {
      let response;
      await axios.post(getApiPath(path), id).then((resp) => (response = resp));
      return response;
    } catch (error) {
      console.log(error);
      return { success: false, message: "something is wrong" };
    }
  }

  async deleteDocument(id) {
    console.log("This is id ");
    console.log(id);
    let path = "/document/delete";
    try {
      let response;
      await axios.post(getApiPath(path), id).then((resp) => (response = resp));
      return response;
    } catch (error) {
      console.log(error);
      return { success: false, message: "something is wrong" };
    }
  }
}

const instance = new DocumentService();
export default instance;
