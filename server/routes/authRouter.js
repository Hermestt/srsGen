const express = require("express");
const authRouter = express.Router();
const hasBody = require("../middlewares/hasBody.js");
const handleLogin = require("../controllers/authController");

/**
 * @api {post} /login/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 * @apiVersion 0.1.0
 *
 * @apiParam {String} email Users unique email
 *
 * @apiSuccess {String} id ID of the User.
 * @apiSuccess {String} firstName First name of the User.
 * @apiSuccess {String} lastName Last name of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} token JWT token.
 *
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 *  {
 *      "success": true,
 *      "userData": {
 *          "id": 1,
 *          "firstName": "Pedro",
 *          "lastName": "Oliveira",
 *          "email": "pedro@exampleemail.com"
 *      },
 *      "token": "xxx.yyy.zzz"
 *  }
 *
 * @apiErrorExample {json} Server Error
 *  HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Unauthorized
 *  HTTP/1.1 401 Unauthorized
 *  {
 *      "message": "Incorrect email or password, please try again."
 *  }
 * @apiErrorExample {json} Empty body
 * HTTP/1.1 400 Bad Request
 *  {
 *      "success": false,
 *      "message": "You must provide data"
 *  }
 *
 * @apiSampleRequest off
 */
authRouter.post("/login", hasBody, handleLogin);

module.exports = authRouter;
