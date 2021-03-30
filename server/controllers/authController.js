const UserModel = require("../models/UserModel");

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
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    token: thisToken,
  });
}

module.exports = handleLogin;
