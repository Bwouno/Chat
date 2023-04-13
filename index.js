const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = 3000;

app.use("/", express.static("public"));

io.on("connection", (socket) => {
  console.log("A user is connected", socket.id);
});

server.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
