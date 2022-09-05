const express = require("express");
const app = express();
const api = require("./routes/api");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api", api);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = app;
