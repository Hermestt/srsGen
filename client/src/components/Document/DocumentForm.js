import React from "react";

function DocumentForm(props) {
  const document = props.document ? props.document : null;
  console.log("inside form");
  console.log(document);

  return (
    <form>
      <div className="document-info">
        <div>
          <label for="document-name">Document name</label>
          <input
            value={document && document.name ? document.name : ""}
            type="text"
            placeholder="e.g. To-Do SRS"
            id="document-name"
            onChange={(e) => {
              props.onFormChange("name", e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label for="document-name">Document description</label>
          <textarea
            type="text"
            placeholder="e.g. To-Do SRS"
            value={
              document && document.description ? document.description : null
            }
            id="document-description"
            onChange={(e) => {
              props.onFormChange("description", e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </form>
  );
}

export default DocumentForm;
