// USER SCHEMAAAA
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DocumentModel = require("./document.model");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    documents: [DocumentModel],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
