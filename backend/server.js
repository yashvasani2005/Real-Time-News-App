import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import newsRoutes from "./routes/newsRoutes.js";
import userRoutes from "./routes/userRoutes.js";  // Correct



dotenv.config();
const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());
app.use("/api/news", newsRoutes);
app.use("/api/user", userRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/News-App").then(() => {
  console.log("MongoDB connected");
  server.listen(5000, () => console.log(`Server on 5000`));
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  socket.on("sendNews", (news) => io.emit("receiveNews", news));
  socket.on("disconnect", () => console.log("User disconnected:", socket.id));
});
