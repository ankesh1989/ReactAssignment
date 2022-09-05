const http = require("http");
require("dotenv").config();
const app = require("./app");
const { connectDB, disconnectDB, cleanUpDB } = require("./services/mongo");

const port = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => {
  await server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });

  connectDB();
};

// [
//   `exit`,
//   `SIGINT`,
//   `SIGUSR1`,
//   `SIGUSR2`,
//   `uncaughtException`,
//   `SIGTERM`,
// ].forEach((eventType) => {
//   process.on(eventType, cleanUpDB.bind(null, eventType));
// });

startServer();
