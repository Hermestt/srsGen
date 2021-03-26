// USER SCHEMAAAA
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocumentsSchema = new Schema(
  {
    _id: Number,
    name: String,
    sharableLink: String,
    dataOfCreation: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const DocumentModel = mongoose.model("Document", DocumentsSchema);

module.export = DocumentModel;
