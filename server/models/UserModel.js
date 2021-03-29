// USER SCHEMAAAA
require("dotenv").config();
const mongoose = require("mongoose");
const DocumentModel = require("./DocumentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

/**
 * Define custom UserSchema instance methods
 * more info: https://mongoosejs.com/docs/guide.html#methods
 */
UserSchema.methods = {
  validPassword(reqPassword) {
    return bcrypt.compareSync(reqPassword, this.password);
  },

  setPassword(reqPassword) {
    this.password = bcrypt.hashSync(reqPassword, 10);
  },

  generateJWT() {
    return jwt.sign({ id: this._id, email: this.email }, process.env.SECRET, {
      expiresIn: "1d",
    });
  },

  // Remove this and pass it to controller
  saveNewUser() {
    try {
      this.save();
      console.log("user was saved successfuly");
    } catch (error) {
      console.log(error);
    }
  },
};

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
