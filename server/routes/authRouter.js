const express = require("express");
const authRouter = express.Router();
const hasBody = require("../middlewares/hasBody.js");
const handleLogin = require("../controllers/authController/authController");

authRouter.post("/login", hasBody, handleLogin);

module.exports = authRouter;
