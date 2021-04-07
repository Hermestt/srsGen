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

/**
 * @api {get} /listing/:id Request User specific documents
 * @apiName Get User Documents
 * @apiGroup Documents
 * @apiVersion 0.2.0
 *
 * @apiSuccess {Array} array The documents from the user with the :id.
 *
 * @apiSuccessExample Example data on success:
 * list: [
 *     { _id: "606a2959b9581a2960d1295f", title: "test", description: "" }
 * ]
 */
async function handleDocumentListing(req, res) {
  const data = req.params.id;
  const list = await DocumentModel.find({ creator_id: data }).select(
    "title description"
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

/**
 * @api {get} /read/:id Request Document information
 * @apiName GetDocument
 * @apiGroup Documents
 * @apiVersion 0.2.0
 *
 * @apiSuccess {Object} object The document object.
 *
 * @apiSuccessExample Example data on success:
 * {
 *  title: "New project",
 *  description: "This project is meant for learning",
 *  goals: "Learn about project development",
 *  problems: "The editors don't have music integrated",
 *  vision: "Make music out of code",
 *  userStories: [
 *    {id: "1", who: "Musician", wants: "code", objective: "make code music"}
 *  ],
 *  backend: [
 *     {id: "1", description: "Node.js"}
 *  ],
 *  frontend: [
 *     {id: "1", description: "React"}
 *  ]
 */
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
