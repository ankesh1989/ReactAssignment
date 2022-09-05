const express = require("express");
const api = express.Router();
const userRoutes = require("./userRoute");

api.use("/user", userRoutes);

api.use("/", (req, res) => {
  res.send("API Called");
});

module.exports = api;
