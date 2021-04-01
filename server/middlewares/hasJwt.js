require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretOrKey = process.env.SECRET;

function hasJwt(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretOrKey, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}

module.exports = hasJwt;
