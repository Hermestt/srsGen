const DocumentModel = require("../models/DocumentModel");

// handleDocumentCreation
async function handleDocumentCreation(req, res) {
  const newDocument = new DocumentModel(req.body);
  newDocument.save();

  res.json({
    success: true,
    message: "Document was created",
  });
}

// handleDocumentListing
async function handleDocumentListing(req, res) {
  const list = await DocumentModel.find({});

  res.json({ list });
}

// handleDocumentDeletion
async function handleDocumentDeletion(req, res) {
  console.log("This is req");
  console.log(req.body);
  await DocumentModel.deleteOne(req.body);
  res.json({
    success: true,
    message: "Document deleted",
  });
}

// handleDocumentDelivery
async function handleDocumentDelivery(req, res) {
  console.log("req.body");
  console.log(req.body);

  const document = await DocumentModel.find({ _id: req.body.id });

  res.json({
    success: true,
    document,
  });
}

module.exports = {
  handleDocumentCreation,
  handleDocumentListing,
  handleDocumentDeletion,
  handleDocumentDelivery,
};
