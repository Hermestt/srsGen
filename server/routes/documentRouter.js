const express = require("express");
const documentRouter = express.Router();
const hasBody = require("../middlewares/hasBody.js");
const controller = require("../controllers/documentController");

// Create new Document
documentRouter.post("/create", hasBody, controller.handleDocumentCreation);

// Delete selected document
documentRouter.post("/delete", hasBody, controller.handleDocumentDeletion);

// Read selected Document
documentRouter.post("/read", hasBody, controller.handleDocumentDelivery);

// Update selected Document
documentRouter.post("/update", hasBody, controller.handleDocumentUpdate);

// Read all documents
documentRouter.get("/listing", controller.handleDocumentListing);

module.exports = documentRouter;
