require("dotenv").config();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const secretKey = process.env.SECRET;

// Passport Strategy Setup
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

// Passport Options Setup
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id, (err, user) => {
        if (err) {
          return done(err, false);
        }

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
  );
};
