// Import Plugins
import axios from "axios";

class DocumentService {
  async saveDocument(data) {
    let path = "/document/create";
    try {
      let response = await axios.post(
        "https://srsgen.herokuapp.com/" + path,
        data
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateDocument(data) {
    let path = "/document/update";
    console.log(data);
    try {
      let response = await axios.put(
        "https://srsgen.herokuapp.com/" + path,
        data
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async listDocuments(id) {
    let path = "/document/listing/" + id;
    try {
      let response = await axios.get("https://srsgen.herokuapp.com/" + path, {
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
      let response = await axios.get("https://srsgen.herokuapp.com/" + path, {
        data: { _id: id },
      });
      let documentOnly = response.data.document[0];

      return documentOnly;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteDocument(id) {
    let path = "/document/delete/" + id;
    try {
      let response = await axios.delete(
        "https://srsgen.herokuapp.com/" + path,
        {
          data: { _id: id },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

const instance = new DocumentService();
export default instance;
