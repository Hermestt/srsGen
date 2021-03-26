require("dotenv").config();
var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var passport = require("passport");
const secretOrKey = process.env.SECRET;

router.post("/", (req, res, next) => {});

module.exports = router;
