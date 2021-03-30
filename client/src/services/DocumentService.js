import { getApiPath } from "../Utils/api";
import axios from "axios";

class DocumentService {
  async saveDocument(data) {
    let path = "/document/create";
    try {
      let response = await axios.post(getApiPath(path), data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateDocument(data) {
    let path = "/document/update";
    try {
      let response = await axios.put(getApiPath(path), data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async listDocuments() {
    let path = "/document/listing";
    try {
      let response = await axios.get(getApiPath(path));
      return response;
    } catch (error) {
      console.log(error);
      return { data: { list: [] } };
    }
  }

  async getDocument(id) {
    let path = "/document/read/" + id;
    try {
      let response = await axios.get(getApiPath(path), { data: { _id: id } });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteDocument(id) {
    let path = "/document/delete/" + id;
    try {
      let response = await axios.delete(getApiPath(path), {
        data: { _id: id },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

const instance = new DocumentService();
export default instance;
