/**
 * @api {get} /read/:id Request Document information
 * @apiName GetDocument
 * @apiGroup Documents
 * @apiVersion 0.5.0
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
 * @apiSuccess {Object[]} backend List of Backend technology (Array of Objects)
 * @apiSuccess {String} backend.id Backend ID
 * @apiSuccess {String} backend.description Backend description
 *
 * @apiSuccess {Object[]} frontend List of Frontend technology (Array of Objects)
 * @apiSuccess {String} frontend.id Frontend ID
 * @apiSuccess {String} frontend.description Frontend description
 *
 * @apiSuccess {Object[]} security List of Security technology (Array of Objects)
 * @apiSuccess {String} security.id Security ID
 * @apiSuccess {String} security.description Security description
 *
 * @apiSuccess {Object[]} libraries List of Libraries technology (Array of Objects)
 * @apiSuccess {String} libraries.id Libraries ID
 * @apiSuccess {String} libraries.description Libraries description
 *
 * @apiSuccess {String} timeline Project timeline
 * @apiSuccess {String} budget Project budget
 * @apiSuccess {String} risks Project risks
 *
 * @apiSuccess {Object[]} features List of features (Array of Objects)
 * @apiSuccess {String} features.id Page ID
 * @apiSuccess {String} features.name Name of the feature
 * @apiSuccess {String} features.description Description of the feature
 */
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
