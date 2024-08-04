import express from "express";
import {
  createSession,
  getSession,
  updateSession,
  deleteSession,
} from "../controllers/sessioncontroller.mjs"; // Import the session controller functions

const router = express.Router();

// Route to create a new session
router.post("/sessions", createSession);

// Route to get a session by ID
router.get("/sessions/:id", getSession);

// Route to update a session by ID
router.put("/sessions/:id", updateSession);

// Route to delete a session by ID
router.delete("/sessions/:id", deleteSession);

export default router;
