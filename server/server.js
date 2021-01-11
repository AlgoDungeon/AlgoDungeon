const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
