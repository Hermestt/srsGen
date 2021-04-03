// USER SCHEMAAAA
const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema(
  {
    creator_id: String,
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
    userStories: [],
    tech: {
      backend: [],
      frontend: [],
      security: [],
      libraries: [],
    },
    pages: [],
    features: [],
  },
  { timestamps: true }
);

/**
 * Define custom UserSchema instance methods
 * more info: https://mongoosejs.com/docs/guide.html#methods
 */
DocumentSchema.methods = {};

const DocumentModel = mongoose.model("Document", DocumentSchema);

module.exports = DocumentModel;
