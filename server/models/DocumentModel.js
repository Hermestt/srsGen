// USER SCHEMAAAA
const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    sharableLink: String,
    dataOfCreation: {
      type: Date,
      default: Date.now,
    },
    goalsAndDescription: {
      goals: String,
      problemsToSolve: String,
      vision: String,
    },
  },
  { timestamps: true }
);

/**
 * Define custom UserSchema instance methods
 * more info: https://mongoosejs.com/docs/guide.html#methods
 */
DocumentSchema.methods = {
  saveNewDocument() {
    try {
      this.save();
      console.log("Document was saved successfuly");
    } catch (error) {
      console.log(error);
    }
  },
};

const DocumentModel = mongoose.model("Document", DocumentSchema);

module.exports = DocumentModel;
