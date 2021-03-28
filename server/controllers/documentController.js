const DocumentModel = require("../models/DocumentModel");

// handleDocumentCreation
async function handleDocumentCreation(req, res) {
  // Create document model with request data
  const newDocument = new DocumentModel(req.body);

  // Save document
  newDocument.saveNewDocument();

  // Send response
  res.json({
    success: true,
    message: "Document was created",
  });
}
// handleDocumentDeletion

// handleDocumentListing

// handleDocumentDelivery

module.exports = handleDocumentCreation;
