const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io")(http);
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const savefileRouter = require("./routes/savefileRouter");
const algoRouter = require("./routes/algoRouter");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
// const server = http.createServer(app);
// const uuid = require('node-uuid'); //used for creating games.
const redis = require("redis");
const axios = require("axios");

const PORT = 3000 || process.env.PORT;

mongoose.connect(
  "mongodb+srv://AlgoDungeon:AlgoDungeon22%21@cluster0.qqwbd.mongodb.net/AlgoDungeon?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});

// redis endpoint: redis-10330.c114.us-east-1-4.ec2.cloud.redislabs.com:10330
// username: AlgoDungeonAdmin | password: AlgoDungeon22!

const redisClient = redis.createClient({
  host: "redis-10330.c114.us-east-1-4.ec2.cloud.redislabs.com",
  port: 10330,
  password: "5wxv6Fd3aXrNtA4lLg8rtV4E5QsHxuK5", // default user password
});

// api to serve all DB requests through MongoDB
app.use("/user", userRouter);
app.use("/savefiles", savefileRouter);
app.use("/algo", algoRouter);

redisClient.set("foo", "bar", (err, reply) => {
  if (err) throw err;
  // console.log(reply);

  redisClient.get("foo", (err, reply) => {
    if (err) throw err;
    // console.log(reply);
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
// statically serve everything in the build folder on the
// route '/build'
app.use("/build", express.static(path.join(__dirname, "../build")));

// route handler to send risk assessment results back to client
app.get("*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});
// app.use('*', (req, res)=> {
//   res.status(404).send('page not found!')
// })

// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught an unknown middleware error',
//     status: 500,
//     message: {err: 'An error occured'},
//   }
//   const errorObj = Object.assign(defaultErr, err);
//   res.status(errorObj.status).json(errorObj.message)
// })

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
