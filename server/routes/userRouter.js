const express = require("express");
const userRouter = express.Router();
const hasBody = require("../middlewares/hasBody.js");
const handleUserRegistration = require("../controllers/userController");

userRouter.post("/register", hasBody, handleUserRegistration);

module.exports = userRouter;
