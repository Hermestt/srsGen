const DocumentModel = require("../models/DocumentModel");

// handleDocumentCreation
async function handleDocumentCreation(req, res) {
  console.log(req.body);
  const newDocument = new DocumentModel(req.body);
  newDocument.save();

  res.json({
    success: true,
    message: "Document was created",
  });
}

// handleDocumentListing
async function handleDocumentListing(req, res) {
  const data = req.params.id;
  const list = await DocumentModel.find({ creator_id: data }).select(
    "name description"
  );

  res.json({ list });
}

// handleDocumentDeletion
async function handleDocumentDeletion(req, res) {
  await DocumentModel.deleteOne(req.body);
  res.json({
    success: true,
    message: "Document deleted",
  });
}

// handleDocumentDelivery
async function handleDocumentDelivery(req, res) {
  const data = req.params.id;

  const document = await DocumentModel.find({ _id: data });

  res.json({
    success: true,
    document,
  });
}

async function handleDocumentUpdate(req, res) {
  const data = req.body;
  await DocumentModel.findOneAndUpdate(
    { _id: data._id },
    data,
    function (error, data) {
      if (error) {
        console.log(error);
      } else {
        res.status(200).json({ message: "updated" });
      }
    }
  );
}

module.exports = {
  handleDocumentCreation,
  handleDocumentListing,
  handleDocumentDeletion,
  handleDocumentDelivery,
  handleDocumentUpdate,
};
