const express = require("express");
const documentRouter = express.Router();
const hasBody = require("../middlewares/hasBody.js");
const hasJwt = require("../middlewares/hasJwt.js");
const controller = require("../controllers/documentController");

// Create new Document
documentRouter.post(
  "/create",
  hasJwt,
  hasBody,
  controller.handleDocumentCreation
);

// Delete selected document
documentRouter.delete(
  "/delete/:id",
  hasBody,
  controller.handleDocumentDeletion
);

// Read selected Document
documentRouter.get("/read/:id", hasJwt, controller.handleDocumentDelivery);

// Update selected Document
documentRouter.put("/update", hasJwt, hasBody, controller.handleDocumentUpdate);

// Read all documents
documentRouter.get("/listing", hasJwt, controller.handleDocumentListing);

module.exports = documentRouter;
