// const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io")(http);
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const apiRouter = require('./routes/api')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
// const server = http.createServer(app);
// const uuid = require('node-uuid'); //used for creating games.
const redis = require("redis");
const axios = require("axios");

const PORT = 8080 || process.env.PORT;

mongoose.connect(
  "mongodb+srv://AlgoDungeon:AlgoDungeon22%21@cluster0.qqwbd.mongodb.net/AlgoDungeon?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});

// redis endpoint: redis-10330.c114.us-east-1-4.ec2.cloud.redislabs.com:10330
// username: AlgoDungeonAdmin | password: AlgoDungeon22!

const client = redis.createClient({
  host: "redis-10330.c114.us-east-1-4.ec2.cloud.redislabs.com",
  port: 10330,
  password: "5wxv6Fd3aXrNtA4lLg8rtV4E5QsHxuK5", // default user password
});

// api 
app.use('/api', apiRouter)


client.set("foo", "bar", (err, reply) => {
  if (err) throw err;
  console.log(reply);

  client.get("foo", (err, reply) => {
    if (err) throw err;
    console.log(reply);
  });
});

socketio.on("connection", function (socket) {
  console.log("user connected", socket.id);
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});

const dispatcher = function (type, obj, toid) {
  console.log(obj);
  socketio.to(toid).emit(type, obj);
};

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
