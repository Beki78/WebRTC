import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv"
import mongoose from "mongoose";
import userroutes from "./routes/userroutes.mjs"
import sessionroutes from "./routes/sessionroute.mjs"
import fileroutes from "./routes/fileroute.mjs"
import videoroutes from "./routes/videoroute.mjs"
import whiteboardroutes from "./routes/whiteboardroute.mjs"
dotenv.config()

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3001

app.use("/api", userroutes);
app.use("/api", sessionroutes);
app.use("/api", fileroutes);
app.use("/api", videoroutes);
app.use("/api", whiteboardroutes);

mongoose.connect(process.env.DB_URI)
.then(() => {
    console.log("DB is connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.log(error); 
}) 