import express from "express";
import {
  createFile,
  getFile,
  updateFile,
  deleteFile,
} from "../controllers/filecontroller.mjs";

const router = express.Router();

// Route to create a new file
router.post("/files", createFile);

// Route to get a file by ID
router.get("/files/:id", getFile);

// Route to update a file by ID
router.put("/files/:id", updateFile);

// Route to delete a file by ID
router.delete("/files/:id", deleteFile);

export default router;
