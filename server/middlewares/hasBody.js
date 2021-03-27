/**
 * Responsible for checking if the body of the request that the router received is empty or not,
 * if it is empty it must return a response with a 400 to the user and stop the process.
 */

function hasBody(req, res, next) {
  if (isEmpty(req.body)) {
    return res.status(400).json({
      success: false,
      error: "You must provide data",
    });
  }

  next(); // Body wasn't empty, go to the next middleware.
}

// Check if the request body is empty
function isEmpty(reqBody) {
  return Object.keys(reqBody).length === 0 ? true : false;
}

module.exports = hasBody;
