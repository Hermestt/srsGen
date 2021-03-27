const UserModel = require("../models/UserModel");

async function handleUserRegistration(req, res) {
  const email = req.body.email;
  const user = await UserModel.findOne({ email });

  // If user is truthy then it's because already exists so we cannot proceed
  if (user != null) {
    const message = "User already exists";
    return res.status(409).json({ message });
  }

  // Doesn't exist, proceed
  const newUser = new UserModel(req.body);

  // Hash user password
  newUser.setPassword(req.body.password);

  // Save User
  newUser.save();

  // Responde to the client side the success
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
