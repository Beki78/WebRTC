import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config()

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3001

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