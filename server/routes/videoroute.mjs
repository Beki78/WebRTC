import express from "express";
import {
  createVideo,
  getVideo,
  updateVideo,
  deleteVideo,
} from "../controllers/videocontroller.mjs"; // Import the video controller

const router = express.Router();

// Define routes for video conversations
router.post("/videos", createVideo); // Create a new video conversation
router.get("/videos/:id", getVideo); // Get a video conversation by ID
router.put("/videos/:id", updateVideo); // Update a video conversation by ID
router.delete("/videos/:id", deleteVideo); // Delete a video conversation by ID

export default router;
