const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
  },
  lastname: {
    type: String,
    required: true,
  },
  // gender: {
  //   type: String,
  //   required: true,
  // },
  address: {
    type: String,
    required: true,
  },
  // phone: {
  //   type: Number,
  //   required: true,
  // },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
  },
  blocked: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = {
  User,
};
