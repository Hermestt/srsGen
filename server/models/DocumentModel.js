// USER SCHEMAAAA
const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema(
  {
    creator_id: String,
    title: String,
    description: String,
    sharableLink: String,
    goals: String,
    problems: String,
    vision: String,
    userStories: [],
    backend: [],
    frontend: [],
    security: [],
    libraries: [],
    pages: [],
    timeline: String,
    budget: String,
    risks: String,
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
