const express = require("express");
const documentRouter = express.Router();
const hasBody = require("../middlewares/hasBody.js");
const hasJwt = require("../middlewares/hasJwt.js");
const controller = require("../controllers/documentController");

/**
 * @api {post} /create/:id Create a new document
 * @apiName Create New Documents
 * @apiGroup Documents
 * @apiVersion 0.1.0
 *
 * @apiParam {Object} document Document with user Input
 *
 * @apiSuccess {Boolean} success True
 * @apiSuccess {String} message Message confirming the success
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": true,
 *      "message": "Document was created"
 *    }
 *
 * @apiErrorExample {json} Unauthorized
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "message": "Incorrect email or password, please try again."
 *    }
 *
 * @apiErrorExample {json} Forbidden
 *    HTTP/1.1 403 Forbidden
 */
documentRouter.post(
  "/create",
  hasJwt,
  hasBody,
  controller.handleDocumentCreation
);

/**
 * @api {delete} /delete/:id Delete existing document
 * @apiName Delete document
 * @apiGroup Documents
 * @apiVersion 0.1.0
 *
 * @apiParam {String} _id Document ID
 *
 * @apiSuccess {Boolean} success True
 * @apiSuccess {String} message Message confirming the success
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": true,
 *      "message": "Document successfully deleted"
 *    }
 *
 * @apiErrorExample {json} Unauthorized
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "message": "Incorrect email or password, please try again."
 *    }
 *
 * @apiErrorExample {json} Forbidden
 *    HTTP/1.1 403 Forbidden
 */
documentRouter.delete(
  "/delete/:id",
  hasJwt,
  hasBody,
  controller.handleDocumentDeletion
);

/**
 * @api {get} /read/:id Request Document information
 * @apiName GetDocument
 * @apiGroup Documents
 * @apiVersion 0.1.0
 *
 * @apiSuccess {String} _id Document ID
 * @apiSuccess {String} creator_id ID of the creator of the specific document
 *
 * @apiSuccess {String} title Title of the document
 * @apiSuccess {String} description Description of the document
 * @apiSuccess {String} goals Goals of the project
 * @apiSuccess {String} problems Problems the project will solve
 * @apiSuccess {String} vision Vision of the project
 *
 * @apiSuccess {Array} userStories List of user stories (Array of Objects)
 * @apiSuccess {String} userStories.id Story ID
 * @apiSuccess {String} userStories.who The agent of the story
 * @apiSuccess {String} userStories.wants The desire of the agent
 * @apiSuccess {String} userStories.objective The objective of the agent
 *
 * @apiSuccess {Array} pages List of pages (Array of Objects)
 * @apiSuccess {String} pages.id Page ID
 * @apiSuccess {String} pages.name Name of the page
 * @apiSuccess {String} pages.description Description of the page
 *
 * @apiSuccess {Array} backend List of Backend technology (Array of Objects)
 * @apiSuccess {String} backend.id Backend ID
 * @apiSuccess {String} backend.description Backend description
 *
 * @apiSuccess {Array} frontend List of Frontend technology (Array of Objects)
 * @apiSuccess {String} frontend.id Frontend ID
 * @apiSuccess {String} frontend.description Frontend description
 *
 * @apiSuccess {Array} security List of Security technology (Array of Objects)
 * @apiSuccess {String} security.id Security ID
 * @apiSuccess {String} security.description Security description
 *
 * @apiSuccess {Array} libraries List of Libraries technology (Array of Objects)
 * @apiSuccess {String} libraries.id Libraries ID
 * @apiSuccess {String} libraries.description Libraries description
 *
 * @apiSuccess {String} timeline Project timeline
 * @apiSuccess {String} budget Project budget
 * @apiSuccess {String} risks Project risks
 *
 * @apiSuccess {Array} features List of features (Array of Objects)
 * @apiSuccess {String} features.id Page ID
 * @apiSuccess {String} features.name Name of the feature
 * @apiSuccess {String} features.description Description of the feature
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    document: {
 *        "_id": 1,
 *        "creator_id": 1,
 *        "title": "Document name",
 *        "description": "Document description lorem ipsum sit amet dolore",
 *        "goals": "Goals of the project",
 *        "problems": "Problems the project will solve",
 *        "vision": "Vision of the good the project will bring",
 *        "userStories": [{
 *            "id": 1,
 *            "who": "developer",
 *            "wants": "good documentation",
 *            "objective": "write error free requests"
 *         }],
 *        "pages": [{
 *            "id": 1,
 *            "name": "Login",
 *            "description": "form for user authentication"
 *        }],
 *        "backend": [{
 *            "id": 1,
 *            "description": "node.js"
 *        }],
 *        "frontend": [{
 *            "id": 1,
 *            "description": "ReactJS"
 *        }],
 *        "security": [{
 *            "id": 1,
 *            "description": "JWT"
 *        }],
 *        "libraries": [{
 *            "id": 1,
 *            "description": "Axios"
 *        }],
 *        "timeline": "2 weeks",
 *        "budget": "3 meals and 2 snacks/day, water, coffee and time",
 *        "risks": "Burn baby burn"
 *        "features": [{
 *            "id": 1,
 *            "name": "Sharable documents",
 *            "description": "share documents with a url to anonymous users or registered users"
 *        }]
 *    }
 * @apiErrorExample {json} Unauthorized
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "message": "Incorrect email or password, please try again."
 *    }
 * @apiErrorExample {json} Forbidden
 *    HTTP/1.1 403 Forbidden
 * @apiErrorExample {json} Document doesn't exist
 *    HTTP/1.1 200 OK
 *    {
 *      "success": false,
 *      "message": "Document doesn't exist"
 *    }
 */
documentRouter.get("/read/:id", hasJwt, controller.handleDocumentDelivery);

/**
 * @api {put} /update/:id Update existing document
 * @apiName Update document
 * @apiGroup Documents
 * @apiVersion 0.1.0
 *
 * @apiParam {Object} document Document with user Input
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": true,
 *      "message": "Document successfully updated"
 * }
 * @apiErrorExample {json} Unauthorized
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "message": "Incorrect email or password, please try again."
 *    }
 * @apiErrorExample {json} Forbidden
 *    HTTP/1.1 403 Forbidden
 * @apiErrorExample {json} Empty body
 * HTTP/1.1 400 Bad Request
 *  {
 *      "success": false,
 *      "message": "You must provide data"
 *  }
 * @apiErrorExample {json} Server Error
 *  HTTP/1.1 500 Internal Server Error
 */
documentRouter.put("/update", hasJwt, hasBody, controller.handleDocumentUpdate);

/**
 * @api {get} /listing/:id Request User specific documents
 * @apiName Get User Documents
 * @apiGroup Documents
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Array} array The documents from the user with the :id.
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    list: [{id: "1", name: "Document Name", description: "Document Description"}]
 * @apiErrorExample {json} Unauthorized
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "message": "Incorrect email or password, please try again."
 *    }
 * @apiErrorExample {json} Forbidden
 *    HTTP/1.1 403 Forbidden
 */
documentRouter.get("/listing/:id", hasJwt, controller.handleDocumentListing);

module.exports = documentRouter;
