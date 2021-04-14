const DocumentModel = require("../models/DocumentModel");

// Create New Document
async function handleDocumentCreation(req, res) {
  const newDocument = new DocumentModel(req.body);
  newDocument.save();

  res.status(200).json({
    success: true,
    message: "Document was created",
  });
}

// List User Documents
async function handleDocumentListing(req, res) {
  const data = req.params.id;
  const list = await DocumentModel.find({ creator_id: data }).select(
    "title description"
  );

  res.status(200).json({ list });
}

// Delete Document
async function handleDocumentDeletion(req, res) {
  await DocumentModel.deleteOne(req.body);
  res.status(200).json({
    success: true,
    message: "Document successfully deleted",
  });
}

// Deliver Document
async function handleDocumentDelivery(req, res) {
  const data = req.params.id;

  try {
    const document = await DocumentModel.findById(data);
    res.status(200).json({
      success: true,
      document,
    });
  } catch (error) {
    res.json({
      success: false,
      messsage: "Document doesn't exist",
    });
    console.log(error);
  }
}

// Update Existing Document
async function handleDocumentUpdate(req, res) {
  const data = req.body;

  // FIXME Mongoose suggests to use the save() method where possible
  await DocumentModel.findOneAndUpdate(
    { _id: data._id },
    data,
    function (error, data) {
      if (error) {
        console.log(error);
        res.status(500);
      } else {
        res.status(200).json({
          success: true,
          message: "Document successfully updated",
        });
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
