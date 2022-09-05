const express = require("express");
const userRoute = express.Router();
const {
  httpCreateUser,
  httpGetUsers,
  httpDeleteUser,
  httpEditUser,
} = require("../httpRequests/users");

userRoute.use((req, res, next) => {
  // you can add some logic here .. like any other middleware

  next();
});

userRoute.get("/", httpGetUsers);
userRoute.get("/all", httpGetUsers);
userRoute.post("/new", httpCreateUser);
userRoute.delete("/:userId", httpDeleteUser);
userRoute.post("/:userId", httpEditUser);

module.exports = userRoute;
