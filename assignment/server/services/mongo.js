const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

const db = mongoose.connection;

db.once("open", () => {
  console.log("Mongo DB Connection is ready");
});

// db.on("error", (err) => {
//   console.log("Mongo Error :>> ", err);
// });

const connectDB = async () => {
  try {
    return await mongoose.connect(MONGO_URL);
  } catch (err) {
    console.log("Mongo Error While connecting :>> ", err);
    disconnectDB();
  }
};

const disconnectDB = () => {
  mongoose.disconnect();
};

const cleanUpDB = (eventType) => {
  //   db.close(() => {
  //     console.log("Mongo DB connection closed on event :>> ", eventType);
  //   });
};

module.exports = {
  connectDB,
  disconnectDB,
  cleanUpDB,
};
