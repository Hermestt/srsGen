const express = require("express");
const userRouter = express.Router();
const hasBody = require("../middlewares/hasBody.js");
const handleUserRegistration = require("../controllers/userController");

/**
 * @api {post} /register Register a new User.
 * @apiName Register user
 * @apiGroup User
 * @apiVersion 0.1.0
 *
 * @apiParam {String} firstName User first name.
 * @apiParam {String} lastName User last name.
 * @apiParam {String} email User email.
 * @apiParam {String} password User password.
 *
 * @apiSuccess {String} id ID of the User.
 * @apiSuccess {String} firstName First name of the User.
 * @apiSuccess {String} lastName Last name of the User.
 * @apiSuccess {String} email Email of the User.
 *
 * @apiSuccessExample {json} Success
 *      HTTP/1.1 200 OK
 *      {
 *          "id": 1,
 *          "firstName": "Pedro",
 *          "lastName": "Oliveira",
 *          "email": "pedro@exampleemail.com"
 *      }
 * @apiErrorExample {json} Server Error
 *  HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Empty body
 * HTTP/1.1 400 Bad Request
 *  {
 *      "success": false,
 *      "message": "You must provide data"
 *  }
 *
 */
userRouter.post("/register", hasBody, handleUserRegistration);

module.exports = userRouter;
