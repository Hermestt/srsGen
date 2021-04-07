/**
 * @api {get} /listing/:id Request User specific documents
 * @apiName Get User Documents
 * @apiGroup Documents
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Array} array The documents from the user with the :id.
 *
 * @apiSuccessExample Example data on success:
 * list: [{}]
 */

/**
 * @api {get} /read/:id Request Document information
 * @apiName GetDocument
 * @apiGroup Documents
 * @apiVersion 0.1.0
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
 *  ],
 *  security: [
 *     {id: "1", description: "JWT"}
 *  ]
 */
