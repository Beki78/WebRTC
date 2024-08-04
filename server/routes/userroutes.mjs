// routes/userRouter.js
import express from "express";
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/usercontroller.mjs";

const router = express.Router();

// Define routes for user operations
router.post("/users", createUser); // Create a new user
router.get("/users/:id", getUser); // Get a user by ID
router.put("/users/:id", updateUser); // Update a user by ID
router.delete("/users/:id", deleteUser); // Delete a user by ID

export default router;
