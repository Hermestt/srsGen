const UserModel = require("../models/UserModel");

/**
 * @api {post} /register Register a new User.
 * @apiName RegisterUser
 * @apiGroup User
 * @apiVersion 0.1.0
 *
 * @apiParam {String} email Users registered email
 *
 * @apiSuccess {String} id ID of the User.
 * @apiSuccess {String} firstName First name of the User.
 * @apiSuccess {String} lastName Last name of the User.
 * @apiSuccess {String} email Email of the User.
 *
 */
async function handleUserRegistration(req, res) {
  const email = req.body.email;
  const user = await UserModel.findOne({ email });

  // If user is truthy then it's because already exists so we cannot proceed
  if (user != null) {
    const message = "User already exists";
    return res.status(409).json({ message });
  }

  const newUser = new UserModel(req.body);

  newUser.setPassword(req.body.password);

  newUser.saveNewUser();

  res.json({
    success: true,
    userData: {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    },
  });
}

module.exports = handleUserRegistration;
