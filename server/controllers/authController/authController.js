const UserModel = require("../../models/UserModel");

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
 */
async function handleLogin(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const message = "Incorrect email or password, please try again.";
  const user = await UserModel.findOne({ email });

  if (!user || !password) {
    // Send 401 Unauthorized response
    return res.status(401).json({ message });
  }

  if (!user.validPassword(password, user.password)) {
    // Send 401 Unauthorized response
    return res.status(401).json({ message });
  }

  let thisToken = user.generateJWT(user);
  // succeeded
  res.json({
    success: true,
    userData: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    token: thisToken,
  });
}

module.exports = handleLogin;
