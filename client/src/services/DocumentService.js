// Import Plugins
import axios from "axios";

// Import base url
import { getApiPath } from "../Utils/api";

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
    console.log(data);
    try {
      let response = await axios.put(getApiPath(path), data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async listDocuments(id) {
    let path = "/document/listing/" + id;
    try {
      let response = await axios.get(getApiPath(path), {
        data: { creator_id: id },
      });
      return response;
    } catch (error) {
      console.log(error);
      return { data: { list: [] } };
    }
  }

  async getDocument(id) {
    let path = "/document/read/" + id;
    try {
      let response = await axios.get(getApiPath(path), {
        data: { _id: id },
      });

      let documentOnly;
      if (response.data.document === null) {
        /* FIXME In case the user deletes the document and goes back on history. This avoids throwing an error on the client.
           The solution is shitty. Improvement: When the user goes back on history to a deleted document a visual error should be presented and a link to go back to dashboard
           */
        return {};
      }

      documentOnly = response.data.document;

      return documentOnly;
    } catch (error) {
      console.log(error);
      let emptyObj = {};
      return emptyObj;
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
