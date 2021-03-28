const express = require("express");
const documentRouter = express.Router();
const hasBody = require("../middlewares/hasBody.js");
const handleDocumentCreation = require("../controllers/documentController");

// Create new Document
documentRouter.post("/create", hasBody, handleDocumentCreation);

// Delete selected document
//documentRouter.delete();

// Read selected Document
//documentRouter.get();

// Read all documents
//documentRouter.get();

module.exports = documentRouter;
