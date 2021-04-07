/**
 * @api {post} /update/:id Update specific document
 * @apiName UpdateDocument
 * @apiGroup Documents
 * @apiVersion 0.1.0
 *
 * @apiSuccess {String} message Message confirming the success
 */

/**
 * @api {get} /read/:id Request Document information
 * @apiName GetDocument
 * @apiGroup Documents
 * @apiVersion 0.4.0
 *
 * @apiSuccess {String} title Title of the document
 * @apiSuccess {String} description Description of the document
 * @apiSuccess {String} goals Goals of the project
 * @apiSuccess {String} problems Problems the project will solve
 * @apiSuccess {String} vision Vision of the project
 *
 * @apiSuccess {Object[]} userStories List of user stories (Array of Objects)
 * @apiSuccess {String} userStories.id Story ID
 * @apiSuccess {String} userStories.who The agent of the story
 * @apiSuccess {String} userStories.wants The desire of the agent
 * @apiSuccess {String} userStories.objective The objective of the agent
 *
 * @apiSuccess {Object[]} pages List of pages (Array of Objects)
 * @apiSuccess {String} pages.id Page ID
 * @apiSuccess {String} pages.name Name of the page
 * @apiSuccess {String} pages.description Description of the page
 *
 */

/**
 * @api {get} /read/:id Request Document information
 * @apiName GetDocument
 * @apiGroup Documents
 * @apiVersion 0.3.0
 *
 * @apiSuccess {String} title Title of the document
 * @apiSuccess {String} description Description of the document
 * @apiSuccess {String} goals Goals of the project
 * @apiSuccess {String} problems Problems the project will solve
 * @apiSuccess {String} vision Vision of the project
 *
 * @apiSuccess {Object[]} userStories List of user stories (Array of Objects)
 * @apiSuccess {String} userStories.id Story ID
 * @apiSuccess {String} userStories.who The agent of the story
 * @apiSuccess {String} userStories.wants The desire of the agent
 * @apiSuccess {String} userStories.objective The objective of the agent
 */

/**
 * @api {get} /read/:id Request Document information
 * @apiName GetDocument
 * @apiGroup Documents
 * @apiVersion 0.2.0
 *
 * @apiSuccess {String} title Title of the document
 * @apiSuccess {String} description Description of the document
 * @apiSuccess {String} goals Goals of the project
 * @apiSuccess {String} problems Problems the project will solve
 * @apiSuccess {String} vision Vision of the project
 * @apiSuccess {Object[]} userStories List of user stories (Array of Objects)
 * @apiSuccess {String} userStories.id Story ID
 */

/**
 * @api {get} /read/:id Request Document information
 * @apiName GetDocument
 * @apiGroup Documents
 * @apiVersion 0.1.0
 *
 * @apiSuccess {String} title Title of the document
 *
 * @apiSuccessExample Example data on success:
 * {
 *  title: "New document"
 * }
 */
