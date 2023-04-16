import bodyParser from "body-parser";
import router from "./index";
import { connectToDB } from "./connection";
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);
connectToDB();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.ORIGIN,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: any) => {
  let readOnlyMode = false; // create a flag to track if the user is in read-only mode

  socket.on("join_room", (room: string) => {
    socket.join(room);

    // check if this is the first user joining the room and emit read_only_mode if so
    if (io.sockets.adapter.rooms.get(room).size === 1) {
      readOnlyMode = true;
      socket.emit("read_only_mode");
    }
  });

  socket.on("sent_message", (data: any) => {
    // check if the user is in read-only mode before broadcasting the message
    if (!readOnlyMode) {
      socket.broadcast.to(data.roomId).emit("updated_code", data);
    }
  });
  //user leave room
  socket.on("leave_room", (roomId: string) => {
    console.log(`User left room ${roomId}`);
    socket.leave(roomId);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
