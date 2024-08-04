// routes/whiteboardRoutes.js
import express from "express";
import {
  createWhiteboard,
  getWhiteboard,
  updateWhiteboard,
  deleteWhiteboard,
} from "../controllers/whiteboardcontroller.mjs"; // Adjust path as needed

const router = express.Router();

// Create a new whiteboard
router.post("/whiteboards", createWhiteboard);

// Get a whiteboard by ID
router.get("/whiteboards/:id", getWhiteboard);

// Update a whiteboard by ID
router.put("/whiteboards/:id", updateWhiteboard);

// Delete a whiteboard by ID
router.delete("/whiteboards/:id", deleteWhiteboard);

export default router;
